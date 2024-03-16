import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, getCurrentUserId } from "../../firebase/firebase";
import {
	doc,
	where,
	query,
	getDocs,
	collection,
	getDoc,
	updateDoc,
	arrayUnion,
	arrayRemove,
} from "firebase/firestore";
import Button from "react-bootstrap/Button";

const SearchUserProfile = () => {
	const { userId } = useParams();
	const [userData, setUserData] = useState(null);
	const [isFollowing, setIsFollowing] = useState(false); // State to track if user is already being followed

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userDoc = await getDoc(doc(db, "users", userId));
				if (userDoc.exists()) {
					setUserData(userDoc.data());
					// Check if the current user is already following this user
					const currentUser = getCurrentUserId();
					if (currentUser) {
						const userRef = doc(db, "users", currentUser);
						const userSnapshot = await getDoc(userRef);
						if (userSnapshot.exists()) {
							const userData = userSnapshot.data();
							setIsFollowing(userData.following.includes(userId));
						}
					}
				} else {
					console.log("User not found");
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, [userId]);

	useEffect(() => {
		// Check if the button text was stored in the browser storage
		const storedIsFollowing = localStorage.getItem(`following_${userId}`);
		if (storedIsFollowing !== null) {
			setIsFollowing(JSON.parse(storedIsFollowing));
		}
	}, [userId]);

	const handleFollow = async () => {
		try {
			// following user logic
			const currentUser = getCurrentUserId();
			if (currentUser) {
				const userQuery = query(
					collection(db, "users"),
					where("uid", "==", currentUser)
				);
				const userSnapshot = await getDocs(userQuery);

				if (!userSnapshot.empty) {
					const userDoc = userSnapshot.docs[0].ref; // Get the DocumentReference
					const userData = userSnapshot.docs[0].data();

					const followingArray = userData.following || [];
					const futureFollowersArray = userData.followers || [];

					if (!followingArray.includes(userId)) {
						// Follow user
						followingArray.push(userId);
						await updateDoc(userDoc, { following: followingArray });
						setIsFollowing(true); // Update state to reflect that the user is now being followed
						localStorage.setItem(`following_${userId}`, true); // Store button text in browser storage
						console.log("User followed successfully!");

						// futureFollowersArray of the followed user
						if (!futureFollowersArray.includes(userId)) {
							futureFollowersArray.push(userId);
							await updateDoc(userDoc, {
								futureFollowers: futureFollowersArray,
							});
						}
					} else {
						// Unfollow user
						const updatedFollowingArray = followingArray.filter(
							(id) => id !== userId
						);
						await updateDoc(userDoc, {
							following: updatedFollowingArray,
						});
						setIsFollowing(false); // Update state to reflect that the user is now unfollowed
						console.log("User unfollowed successfully!");
						localStorage.setItem(`following_${userId}`, false); // Store button text in browser storage

						// Remove the user's ID from futureFollowersArray of the followed user
						const updatedFutureFollowersArray = futureFollowersArray.filter(
							(id) => id !== userId
						);
						await updateDoc(userDoc, {
							futureFollowers: updatedFutureFollowersArray,
						});
					}
				} else {
					console.log("User document not found");
				}
			} else {
				console.error("Current user not found");
			}

			// followers of the user logic

			if (userId) {
				const userRef = doc(db, "users", userId);
				const userDoc = await getDoc(userRef);

				if (userDoc.exists()) {
					const userData = userDoc.data();
					const followersArray = userData.followers || [];
					if (!followersArray.includes(currentUser)) {
						// Follow user
						followersArray.push(currentUser);
						await updateDoc(userRef, { followers: followersArray });
						console.log("follower successfully!");
					} else {
						// Unfollow user
						const updatedFollowersArray = followersArray.filter(
							(id) => id !== currentUser
						);
						await updateDoc(userRef, {
							followers: updatedFollowersArray,
						});
						console.log("User unfollowed successfully!");
					}
				} else {
					console.log("User document not found");
				}
			} else {
				console.error("Current user not found");
			}
		} catch (error) {
			console.error("Error following/unfollowing user:", error);
		}
	};

	return (
		<div>
			{userData ? (
				<div>
					<h2>User Profile</h2>
					<p>Name: {userData.name}</p>
					<p>Email: {userData.email}</p>
					<Button onClick={handleFollow}>
						{isFollowing ? "Following" : "Follow"}
					</Button>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default SearchUserProfile;
