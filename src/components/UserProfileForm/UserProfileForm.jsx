import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { db, getCurrentUserId } from "../../firebase/firebase";
import {
	query,
	collection,
	getDocs,
	where,
	doc,
	updateDoc,
} from "firebase/firestore";
import Image from "react-bootstrap/Image";
import ProfileComponent from "./ProfileComponent";
import "./UserProfileForm.css";
import "../../styles/common/buttons.css";

const UserProfileForm = () => {
	const [userData, setUserData] = useState({
		name: "",
		birthday: "",
		gender: "",
		location: "",
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
				// alert("Profile updated successfully!");
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
				// alert("Profile updated successfully!");
			} else {
				console.error("User document not found for current user.");
			}
		} catch (error) {
			console.error("Error updating profile:", error);
		}
	};

	return (
		<div id="userProfileContainer">
			<div>
				<h2>My Profile</h2>
				<div>
					<Image
						src={userData.profileImageUrl}
						alt={`${userData.name}s profile`}
						width={70}
						height={70}
						style={{
							objectFit: "cover",
							marginRight: "10px",
						}}
						roundedCircle
					/>
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
										placeholder="Enter your name"
										className="form-control"
										value={userData.name}
										onChange={(e) => handleChange("name", e.target.value)}
									/>
								) : (
									<p>{userData.name}</p>
								)}
							</td>
							<td>
								{editMode === "name" ? (
									<Button
										title="Save"
										variant="primary"
										className="userProfileSettingsBtn"
										onClick={handleSave}
									>
										Save
									</Button>
								) : (
									<Button
										title="Edit"
										variant="primary"
										className="userProfileSettingsBtn"
										onClick={() => handleEdit("name")}
									>
										Edit
									</Button>
								)}
							</td>
						</tr>
						<tr>
							<td>Birthday</td>
							<td>
								{editMode === "birthday" ? (
									<input
										type="date"
										placeholder="Enter your date of birth"
										className="form-control"
										value={userData.birthday}
										onChange={(e) => handleChange("birthday", e.target.value)}
									/>
								) : (
									<p>{userData.birthday}</p>
								)}
							</td>
							<td>
								{editMode === "birthday" ? (
									<Button
										title="Save"
										variant="primary"
										className="userProfileSettingsBtn"
										onClick={handleSave}
									>
										Save
									</Button>
								) : (
									<Button
										title="Edit"
										variant="primary"
										className="userProfileSettingsBtn"
										onClick={() => handleEdit("birthday")}
									>
										Edit
									</Button>
								)}
							</td>
						</tr>
						<tr>
							<td>Gender</td>
							<td>
								{editMode === "gender" ? (
									<input
										type="text"
										placeholder="Enter your gender (Optional)"
										className="form-control"
										value={userData.gender}
										onChange={(e) => handleChange("gender", e.target.value)}
									/>
								) : (
									<p>{userData.gender}</p>
								)}
							</td>
							<td>
								{editMode === "gender" ? (
									<Button
										title="Save"
										variant="primary"
										className="userProfileSettingsBtn"
										onClick={handleSave}
									>
										Save
									</Button>
								) : (
									<Button
										title="Edit"
										variant="primary"
										className="userProfileSettingsBtn"
										onClick={() => handleEdit("gender")}
									>
										Edit
									</Button>
								)}
							</td>
						</tr>
						<tr>
							<td>Location</td>
							<td>
								{editMode === "location" ? (
									<input
										type="text"
										placeholder="Enter your location"
										className="form-control"
										value={userData.location}
										onChange={(e) => handleChange("location", e.target.value)}
									/>
								) : (
									<p>{userData.location}</p>
								)}
							</td>
							<td>
								{editMode === "location" ? (
									<Button
										title="Save"
										variant="primary"
										className="userProfileSettingsBtn"
										onClick={handleSave}
									>
										Save
									</Button>
								) : (
									<Button
										title="Edit"
										variant="primary"
										className="userProfileSettingsBtn"
										onClick={() => handleEdit("location")}
									>
										Edit
									</Button>
								)}
							</td>
						</tr>
						<tr>
							<td>Profile Bio</td>
							<td>
								{editMode === "profileBio" ? (
									<textarea
										type="textarea"
										placeholder="Tell us about your profile"
										className="form-control"
										 rows={3}
										value={userData.profileBio}
										onChange={(e) => handleChange("profileBio", e.target.value)}
									/>
								) : (
									<p>{userData.profileBio}</p>
								)}
							</td>
							<td>
								{editMode === "profileBio" ? (
									<Button
										title="Save"
										variant="primary"
										className="userProfileSettingsBtn"
										onClick={handleSave}
									>
										Save
									</Button>
								) : (
									<Button
										title="Edit"
										variant="primary"
										className="userProfileSettingsBtn"
										onClick={() => handleEdit("profileBio")}
									>
										Edit
									</Button>
								)}
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default UserProfileForm;
