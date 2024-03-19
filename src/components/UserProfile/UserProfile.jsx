import React, { useEffect, useState } from "react";
import { db, getCurrentUserId } from "../../firebase/firebase";
import {
	where,
	query,
	collection,
	onSnapshot,
	getDocs,
} from "firebase/firestore";
import scenicView from "../../images/scenicView.jpg";
import "./UserProfile.css";

const UserProfile = () => {
	const [userData, setUserData] = useState({});
	const [activities, setActivities] = useState([]);
	console.log("userData ", userData);
	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userId = getCurrentUserId();
				if (userId) {
					const usersQuery = query(
						collection(db, "users"),
						where("uid", "==", userId)
					);
					const userSnapshot = await getDocs(usersQuery);
					if (!userSnapshot.empty) {
						const userDataFromFirestore = userSnapshot.docs[0].data();
						setUserData(userDataFromFirestore);
					} else {
						console.error("User document not found for current user.");
					}
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, []);

	useEffect(() => {
		const unsubscribeActivitiesCollection = onSnapshot(
			collection(db, "userActivities"),
			(snapshot) => {
				const userActivities = snapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }))
					.filter((activity) => activity.userId === getCurrentUserId())
					.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());

				setActivities(userActivities);
			}
		);

		return () => unsubscribeActivitiesCollection();
	}, []);

	return (
		<div>
			{userData ? (
				<div className="searchUsersProfile">
					<div className="searchedUsersHeroImageWrapper">
						<img src={scenicView} alt="scenicView" />
					</div>
					<div className="searchedUsersProfileImg">
						<img
							src={userData.profileImageUrl}
							alt={`${userData.name}s identifier visual`}
						/>
					</div>
					<div className="searchedUsersInfoWrapper">
						<div className="searchedUsersInfo">
							<h3>{userData.name}</h3>
							<p>{userData.location}</p>
							<p className="searchUserProfileBio">{userData.profileBio}</p>
						</div>
						<div className="searchUserActivityCount">
							<p>Total Activities</p>
							<h1 id="totalActivities">{activities.length}</h1>

							<div className="socialStats">
								<div className="follower">
									<p>Followers</p>
									<h1>
										{userData.followers ? userData.followers.length : "0"}
									</h1>
								</div>
								<div className="following">
									<p>Following</p>
									<h1>
										{userData.following ? userData.following.length : "0"}
									</h1>
								</div>
							</div>
						</div>
						<div>
							<p></p>
						</div>
					</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default UserProfile;
