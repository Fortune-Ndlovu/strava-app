import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL params
import { db } from "../../firebase/firebase"; // Import your Firebase configuration
import { doc, getDoc } from "firebase/firestore"; // Import Firestore utilities
import Button from "react-bootstrap/Button";

const SearchUserProfile = () => {
	const { userId } = useParams(); // Extract user ID from URL params
	const [userData, setUserData] = useState(null); // State to store user data

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				// Get user document from Firestore using the user ID
				const userDoc = await getDoc(doc(db, "users", userId));
				if (userDoc.exists()) {
					// If user document exists, set user data to state
					setUserData(userDoc.data());
				} else {
					console.log("User not found");
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData(); // Fetch user data when component mounts
	}, [userId]); // Run effect when userId changes

	return (
		<div>
			{userData ? (
				<div>
					<h2>User Profile</h2>
					<p>Name: {userData.name}</p>
					<p>Email: {userData.email}</p>
					<Button>Follow</Button>
					{/* Add additional fields as needed */}
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default SearchUserProfile;
