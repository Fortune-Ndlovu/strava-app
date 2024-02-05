import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../firebase/firebase";
import ActivityDetails from "./ManualEntryFormComponents/ActivityDetails";
import ActivityStats from "./ManualEntryFormComponents/ActivityStats";
import "./ManualEntryForm.css";

const ManualEntryForm = ({ onCreateActivity }) => {
	const [newImage, setNewImage] = useState(null);

	const navigate = useNavigate(); // Hook to navigate between pages

	const [newDistance, setNewDistance] = useState(0);
	const [newHour, setNewHour] = useState(0);
	const [newMinute, setNewMinute] = useState(0);
	const [newSecond, setNewSecond] = useState(0);
	const [newElevation, setNewElevation] = useState(0);

	const [newSportSelection, setNewSportSelection] = useState("");
	const [newDateValue, setNewDateValue] = useState("");
	const [newTimeValue, setNewTimeValue] = useState("");
	const [newActivity, setNewActivity] = useState("");
	const [newDescription, setNewDescription] = useState("");

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setNewImage(file);
	};

	const handleCreateActivity = async () => {
		let imageUrl; // Declare imageUrl at the top

		try {
			// Upload image to Firebase Storage
			if (newImage) {
				const storage = getStorage(app);
				const storageRef = ref(storage, `activity_images/${newImage.name}`);
				await uploadBytes(storageRef, newImage);
				imageUrl = await getDownloadURL(storageRef);

				// Set the image URL in the new activity
				setNewActivity({ ...newActivity, imageUrl });
			}

			// Create activity as before
			const createdActivity = await onCreateActivity({
				distance: newDistance,
				hour: newHour,
				minute: newMinute,
				second: newSecond,
				elevation: newElevation,
				sport: newSportSelection,
				date: newDateValue,
				time: newTimeValue,
				name: newActivity,
				description: newDescription,
				imageUrl: imageUrl, // Use the outer-scoped imageUrl
			});

			console.log("Created Activity:", createdActivity);

			// Redirect to the new activity details page using the id from the created activity
			if (createdActivity && createdActivity.id) {
				navigate(`/activity/${createdActivity.id}`);
			}
		} catch (error) {
			console.error("Error creating activity:", error);
		}
	};

	return (
		<div>
			<Container>
				<h1>Manual Entry</h1>
				<Form id="manualEntryForm">
					<ActivityStats
						distanceValue={newDistance}
						distanceOnChange={(e) => setNewDistance(e.target.value)}
						hourValue={newHour}
						hourOnChange={(e) => setNewHour(e.target.value)}
						minuteValue={newMinute}
						minuteOnChange={(e) => setNewMinute(e.target.value)}
						secondValue={newSecond}
						secondOnChange={(e) => setNewSecond(e.target.value)}
						elevationValue={newElevation}
						elevationOnChange={(e) => setNewElevation(e.target.value)}
					/>
					<hr></hr>
					<ActivityDetails
						sportSelectionValue={newSportSelection}
						sportSelectionOnChange={(value) => setNewSportSelection(value)}
						dateValue={newDateValue}
						dateOnChange={(e) => setNewDateValue(e.target.value)}
						timeValue={newTimeValue}
						timeOnChange={(e) => setNewTimeValue(e.target.value)}
						titleValue={newActivity}
						titleOnChange={(e) => setNewActivity(e.target.value)}
						descriptionValue={newDescription}
						descriptionOnChange={(e) => setNewDescription(e.target.value)}
					/>
					{/* New input for image upload */}
					<Form.Group controlId="image">
						<Form.Label>Image</Form.Label>
						<Form.Control type="file" onChange={handleImageChange} />
					</Form.Group>
					<Button
						variant="primary"
						type="button"
						onClick={handleCreateActivity}
					>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default ManualEntryForm;
