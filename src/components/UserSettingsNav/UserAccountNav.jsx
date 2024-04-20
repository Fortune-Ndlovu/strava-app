import React, { useEffect, useState } from "react";
import { db, getCurrentUserId } from "../../firebase/firebase"; // Import the Firebase Firestore instance
import Button from "react-bootstrap/Button";
import { query, collection, getDocs, where } from "firebase/firestore";
import "../../styles/common/buttons.css";

const UserAccountNav = () => {
	const [currentUserData, setCurrentUserData] = useState(null);

	useEffect(() => {
		const fetchCurrentUser = async () => {
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
						setCurrentUserData(userDataFromFirestore);
					} else {
						console.error("User document not found for current user.");
					}
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchCurrentUser();
	}, []);

	return (
		<div className="currentUserMyAccount">
			<h3 className="currentUserHeading"> My Account</h3>
			<div>
				<p className="currentUserEmailLabel">Email</p>
				{currentUserData ? <p> {currentUserData.email}</p> : <p></p>}
				<p>Membership Status</p>
				<p>Free Account</p>
				<div>
					<Button className="startTrialBtn">Start Your Free Trial</Button>
				</div>
				<hr></hr>
				<div className="social-connections-container">
					<h3>Social Connections</h3>
					<div className="sc-wrapper">
						<p>Connect with Garmin</p>
						<p>Find your friends, share your activities</p>
					</div>
					<div className="sc-wrapper">
						<p>Connect with Facebook</p>
						<p>Automatic uploads and Fortune Live Segments</p>
					</div>
					<div className="sc-wrapper">
						<p>Connect with MyFitnessPal</p>
						<p>Share your Fortune activities on MyFitnessPal</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserAccountNav;
