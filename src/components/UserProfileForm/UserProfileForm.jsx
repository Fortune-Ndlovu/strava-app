import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { db } from "../../firebase/firebase";
import { query, collection, getDocs } from "firebase/firestore";
import { where, doc, updateDoc } from "firebase/firestore";
import ProfileComponent from "./ProfileComponent";
import { getCurrentUserId } from "../../firebase/firebase";

const UserProfileForm = () => {
	const [userData, setUserData] = useState({
		name: "",
		birthday: "",
		location: "",
		primaryClub: "",
		weight: "",
		profileBio: "",
	});
	const [editMode, setEditMode] = useState(""); // Changed to string to track edited field

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

	const handleEdit = (field) => {
		setEditMode(field); // Set edit mode to the clicked field
	};

	const handleSave = async () => {
		try {
			// Retrieve the user document
			const usersQuery = query(
				collection(db, "users"),
				where("uid", "==", getCurrentUserId())
			);
			const userSnapshot = await getDocs(usersQuery);

			if (!userSnapshot.empty) {
				// Get the document ID from the first document in the snapshot
				const userId = userSnapshot.docs[0].id;

				// Update the user document with profile information and profile image URL
				await updateDoc(doc(db, "users", userId), {
					...userData,
				});
				alert("Profile updated successfully!");
				setEditMode(""); // Reset edit mode after saving
			} else {
				console.error("User document not found for current user.");
			}
		} catch (error) {
			console.error("Error updating profile:", error);
		}
	};

	const handleChange = (field, value) => {
		setUserData((prevState) => ({
			...prevState,
			[field]: value,
		}));
	};

	const updateUserDocument = async (data) => {
		try {
			// Retrieve the user document
			const usersQuery = query(
				collection(db, "users"),
				where("uid", "==", getCurrentUserId())
			);
			const userSnapshot = await getDocs(usersQuery);

			if (!userSnapshot.empty) {
				// Get the document ID from the first document in the snapshot
				const userId = userSnapshot.docs[0].id;

				// Update the user document with profile information and profile image URL
				await updateDoc(doc(db, "users", userId), {
					...userData,
					...data,
				});
				alert("Profile updated successfully!");
			} else {
				console.error("User document not found for current user.");
			}
		} catch (error) {
			console.error("Error updating profile:", error);
		}
	};

	return (
		<div>
            <div>
                <img src={userData.profileImageUrl} alt="" width={70}
					height={70}
					style={{
						objectFit: "cover",
						marginRight: "10px",
					}}/>
                <ProfileComponent updateUserDocument={updateUserDocument} />
            </div>
			<Table striped bordered hover>
				<tbody>
					<tr>
						<td>Name</td>
						<td>
							{editMode === "name" ? (
								<input
									type="text"
									value={userData.name}
									onChange={(e) => handleChange("name", e.target.value)}
								/>
							) : (
								<p>{userData.name}</p>
							)}
						</td>
						<td>
							{editMode === "name" ? (
								<Button variant="primary" onClick={handleSave}>
									Save
								</Button>
							) : (
								<Button variant="primary" onClick={() => handleEdit("name")}>
									Edit
								</Button>
							)}
						</td>
					</tr>
					{/* Repeat the same structure for other fields */}
				</tbody>
			</Table>
		</div>
	);
};

export default UserProfileForm;
