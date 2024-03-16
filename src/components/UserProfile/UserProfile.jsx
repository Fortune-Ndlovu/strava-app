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
	console.log("activities ", activities);
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
				<div className="user-profile-wrapper">
					<div className="user-profile-hero-images">
						{activities.length ? (
							activities.slice(0, 3).map((activity, index) => (
								<div key={index}>
									<img src={activity.imageUrls} alt="scenic View" />
								</div>
							))
						) : (
							<img src={scenicView} alt="scenic View" />
						)}
					</div>
					<div className="user-profile-info-wrapper">
						<div className="user-profile">
							<div className="user-profile-image">
								<img
									src={userData.profileImageUrl}
									alt={userData.displayName}
								/>
							</div>
							<div className="user-profile-info">
								<div className="user-profile-name">{userData.name}</div>
								<div className="user-profile-bio">{userData.profileBio}</div>
							</div>
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
