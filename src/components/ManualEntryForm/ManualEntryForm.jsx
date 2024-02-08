import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../firebase/firebase";
import compressImage from "../../services/compressImage";
import ActivityDetails from "./ManualEntryFormComponents/ActivityDetails";
import ActivityStats from "./ManualEntryFormComponents/ActivityStats";
import "./ManualEntryForm.css";
import "../../styles/common/buttons.css";

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

	// func triggered when a file is selected using the file input
	const handleImageChange = async (e) => {
		// converting selected files into an array
		const files = Array.from(e.target.files);

		// Compress each image before uploading
		const compressedImages = await Promise.all(
			files.map(async (file) => await compressImage(file))
		);

		// adding compressed images to the existing images state array
		setNewImages([...newImages, ...compressedImages]);
	};

	// func triggered when a file is dragged over the drop zone, sets dragging state to true
	const handleDragEnter = (e) => {
		e.preventDefault();
		setDragging(true);
	};

	// func triggered when the dragged file leaves the drop zone, sets dragging state to false
	const handleDragLeave = (e) => {
		e.preventDefault();
		setDragging(false);
	};

	// func triggered when a file is dropped into the drop zone, sets dragging state to false
	const handleDrop = (e) => {
		e.preventDefault();
		setDragging(false);
// Retrieving the dropped files from the event data (e.dataTransfer.files)
		const files = Array.from(e.dataTransfer.files);
		// The dropped files added to the existing newImages state array
		setNewImages([...newImages, ...files]);
	};

	const handleCreateActivity = async () => {
		let imageUrls = []; // Use an array for multiple images

		try {
			// Upload multiple images to Firebase Storage
			await Promise.all(
				// Iterating over each compressed image in newImages
				newImages.map(async (file) => {
					const storage = getStorage(app);
					const storageRef = ref(storage, `activity_images/${file.name}`);

					// upload the selected images to Firebase Storage
					await uploadBytes(storageRef, file);

					// Retrieving the download URL and adding it to the imageUrls array
					const imageUrl = await getDownloadURL(storageRef);
					imageUrls.push(imageUrl);
				})
			);

			//Triggering the creation of a new activity doc in Firestore
			const createdActivity = await onCreateActivity({
			// Passing an object as an argument containing details needed for the activity
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
						<Form.Label>Media</Form.Label>
						<div
							className={`image-dropzone ${dragging ? "dragging" : ""}`}
							onClick={() => document.getElementById("imageInput").click()}
						>
							{newImages.length > 0 ? (
								newImages.map((image, index) => (
									<img
										key={index}
										src={URL.createObjectURL(image)} //create temporary URL
										alt={`Selected ${index + 1}`}
										width={70}
										height={70}
										style={{
											objectFit: "cover",
											marginRight: "10px",
										}}
									/>
								))
							) : (
								<div className="image-zone-info">
									<svg
										fill="#2b2b2b"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 32 32"
										width="32"
										height="32"
									>
										<path
											d="M.175.175v31.65h31.65V.175H.175zm30 30H1.825V1.825h28.35v28.35z"
											fill=""
										></path>
										<path
											d="M7.5 10.825a3.325 3.325 0 100-6.65 3.325 3.325 0 000 6.65zm0-5a1.675 1.675 0 110 3.35 1.675 1.675 0 010-3.35zm20.325 14.941L19.845 6l-6.968 13.083-2.99-5.383-5.712 10.719v3.406h23.65v-7.059zm-1.65 5.409H5.825v-1.344l4.092-7.679 2.991 5.384 6.947-13.044 6.32 11.691v4.992z"
											fill=""
										></path>
									</svg>
									<p className="drag-dop-para">Drag and drop media</p>
									<p>or click to upload</p>
								</div>
							)}
						</div>
						<input
							id="imageInput"
							type="file"
							onChange={handleImageChange} //trigger when files are selected
							style={{ display: "none" }}
							multiple // Allow multiple file selection
						/>
					</Form.Group>
					<br></br>
					<hr></hr>
					<div className="manual-entry-form-btn-group">
						<Button type="button" onClick={handleCreateActivity}>
							Create
						</Button>
						<a href="home">Cancel</a>
					</div>
				</Form>
			</Container>
		</div>
	);
};

export default ManualEntryForm;
