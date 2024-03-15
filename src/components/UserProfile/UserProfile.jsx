import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { getCurrentUserId } from "../../firebase/firebase";
import { query, collection, onSnapshot, getDocs } from "firebase/firestore";
import { where } from "firebase/firestore";

const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const [activities, setActivities] = useState([]);
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
		// Setting up a snapshot listener to track changes in the collection
		const unsubscribeActivitiesCollection = onSnapshot(
			collection(db, "userActivities"),
			(snapshot) => {
				// Update the state whenever there's a change in the collection
				// Filtering activities to show only those created by the current user
				const userActivities = snapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }))
					.filter((activity) => activity.userId === getCurrentUserId())
					.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());

				setActivities(userActivities);

				// Fetch comments for each activity and update the comments state
				// userActivities.forEach(async (activity) => {
				// 	const activityId = activity.id;
				// 	const userDoc = doc(db, "userActivities", activityId);
				// 	const existingComments =
				// 		(await getDoc(userDoc)).data().comments || [];
				// 	setComments((prevComments) => ({
				// 		...prevComments,
				// 		[activityId]: existingComments,
				// 	}));

				// 	const existingCommentLikes =
				// 		(await getDoc(userDoc)).data().commentLikes || {};
				// 	setCommentLikes((prevCommentLikes) => ({
				// 		...prevCommentLikes,
				// 		[activityId]: existingCommentLikes,
				// 	}));
				// });
			}
		);

		// Cleanup the listener when the component unmounts
		return () => unsubscribeActivitiesCollection();
	}, []);


	return (
		<div>
			{userData ? (
				<div className="user-profile-wrapper">
                    <div className="user-profile-hero-images">
                        {activities.map((activity, index) => (
                            <div key={index}>
                                
                                <img src={activity.imageUrls} alt="" />
                            </div>
                        ))}


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
