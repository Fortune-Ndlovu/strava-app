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
} from "firebase/firestore";
import Button from "react-bootstrap/Button";

const SearchUserProfile = () => {
	const { userId } = useParams();
	console.log("userId", userId);
	const [userData, setUserData] = useState(null);
	const [isFollowing, setIsFollowing] = useState(false); // State to track if user is already being followed
	const [activitiesCount, setActivitiesCount] = useState(0); // State to store the count of activities

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userDoc = query(
					collection(db, "users"),
					where("uid", "==", userId)
				);
				const userSnapshot = await getDocs(userDoc);
				if (!userSnapshot.empty) {
					const userDataFromFirestore = userSnapshot.docs[0].data();
					setUserData(userDataFromFirestore);
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

					if (!followingArray.includes(userId)) {
						// Follow user
						followingArray.push(userId);
						await updateDoc(userDoc, { following: followingArray });
						setIsFollowing(true); // Update state to reflect that the user is now being followed
						localStorage.setItem(`following_${userId}`, true); // Store button text in browser storage
						console.log("User followed successfully!");
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
					}
				} else {
					console.log("User document not found");
				}
			} else {
				console.error("Current user not found");
			}

			// followers of the user logic

			if (userId) {
				const userRef = query(
					collection(db, "users"),
					where("uid", "==", userId)
				);
				const userSnapshot = await getDocs(userRef);

				if (!userSnapshot.empty) {
					const userDoc = userSnapshot.docs[0].ref;
					const userData = userSnapshot.docs[0].data();

					const followersArray = userData.followers || [];
					
					if (!followersArray.includes(currentUser)) {
						// Follow user
						followersArray.push(currentUser);
						await updateDoc(userDoc, { followers: followersArray });
						console.log("follower successfully!");
					} else {
						// Unfollow user
						const updatedFollowersArray = followersArray.filter(
							(id) => id !== currentUser
						);
						await updateDoc(userDoc, {
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

	useEffect(() => {
    const fetchActivitiesCount = async () => {
    try {
        // Fetch the activities of the followed user
        const userActivitiesQuery = query(
            collection(db, "userActivities"),
            where("userId", "==", userId) // Filter by the userId of the followed user
        );
        const activitiesSnapshot = await getDocs(userActivitiesQuery);

        // Get the total count of activities
        const totalCount = activitiesSnapshot.size;
        setActivitiesCount(totalCount);
    } catch (error) {
        console.error("Error fetching activities count:", error);
    }
};

    fetchActivitiesCount();
}, [userId]);

	return (
		<div>
			{userData ? (
				<div>
					<h2>User Profile</h2>
					<p>{userData.name}</p>
					<p>{userData.location}</p>
					<Button onClick={handleFollow}>
						{isFollowing ? "Following" : "Follow"}
					</Button>
					<p>{userData.profileBio}</p>
					<p>Total Activities {activitiesCount}</p>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default SearchUserProfile;
