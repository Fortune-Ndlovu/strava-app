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
	const [newImages, setNewImages] = useState([]); // Change to an array for multiple images
	const [dragging, setDragging] = useState(false);
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
		const files = Array.from(e.target.files);
		setNewImages([...newImages, ...files]);
	};

	const handleDragEnter = (e) => {
		e.preventDefault();
		setDragging(true);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		setDragging(false);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setDragging(false);

		const files = Array.from(e.dataTransfer.files);
		setNewImages([...newImages, ...files]);
	};

	const handleCreateActivity = async () => {
		let imageUrls = []; // Use an array for multiple images

		try {
			// Upload multiple images to Firebase Storage
			await Promise.all(
				newImages.map(async (file) => {
					const storage = getStorage(app);
					const storageRef = ref(storage, `activity_images/${file.name}`);
					await uploadBytes(storageRef, file);
					const imageUrl = await getDownloadURL(storageRef);
					imageUrls.push(imageUrl);
				})
			);

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
				imageUrls: imageUrls, // Use the outer-scoped imageUrl
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
				<Form
					id="manualEntryForm"
					onDragEnter={handleDragEnter}
					onDragOver={handleDragEnter}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
				>
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
						<Form.Label>Images</Form.Label>
						<div
							className={`image-dropzone ${dragging ? "dragging" : ""}`}
							onClick={() => document.getElementById("imageInput").click()}
						>
							{newImages.length > 0 ? (
								newImages.map((image, index) => (
									<img
										key={index}
										src={URL.createObjectURL(image)}
										alt={`Selected ${index + 1}`}
										width={70}
										height={70}
									/>
								))
							) : (
								<p>Drag & Drop or Click to Upload</p>
							)}
						</div>
						<input
							id="imageInput"
							type="file"
							onChange={handleImageChange}
							style={{ display: "none" }}
							multiple // Allow multiple file selection
						/>
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
