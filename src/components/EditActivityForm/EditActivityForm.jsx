import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import SportSelection from "../FilteringMyActivitiesForm/SportSelection";
import compressImage from "../../services/compressImage";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./EditActivityForm.css";

const EditActivityForm = () => {
	const { activityId } = useParams();
	const navigate = useNavigate();
	const [activityDetails, setActivityDetails] = useState(null);
	const [editedActivity, setEditedActivity] = useState({
		name: "",
		description: "",
		sport: "",
		// ... other fields
		imageUrls: [], // Array to store image URLs
	});

	useEffect(() => {
		const fetchActivityDetails = async () => {
			const activityDoc = doc(db, "userActivities", activityId);
			const activitySnapshot = await getDoc(activityDoc);

			if (activitySnapshot.exists()) {
				setActivityDetails({
					...activitySnapshot.data(),
					id: activitySnapshot.id,
				});
				setEditedActivity({
					...activitySnapshot.data(),
				});
			}
		};

		fetchActivityDetails();
	}, [activityId]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedActivity({
			...editedActivity,
			[name]: value,
		});
	};

	const handleOptionChange = (selectedOption) => {
		setEditedActivity({
			...editedActivity,
			sport: selectedOption,
		});
	};

	const handleAddImage = (newImageUrl) => {
		setEditedActivity((prev) => ({
			...prev,
			imageUrls: [...prev.imageUrls, newImageUrl],
		}));
	};

	const handleRemoveImage = (index) => {
		setEditedActivity((prev) => {
			const newImageUrls = [...prev.imageUrls];
			newImageUrls.splice(index, 1);
			return {
				...prev,
				imageUrls: newImageUrls,
			};
		});
	};

	const handleSaveChanges = async () => {
		const userDoc = doc(db, "userActivities", activityId);
		await updateDoc(userDoc, editedActivity);

		navigate(`/activity/${activityId}`);
	};

	const handleFileInputChange = async (e) => {
		const file = e.target.files[0];
		if (file) {
			try {
				// Compress the image before adding it to the state
				const compressedImage = await compressImage(file);

				const reader = new FileReader();
				reader.onloadend = () => {
					handleAddImage(reader.result);
				};
				reader.readAsDataURL(compressedImage);
			} catch (error) {
				console.error("Error compressing image:", error);
			}
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = async (e) => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		if (file) {
			try {
				// Compress the dropped image before adding it to the state
				const compressedImage = await compressImage(file);

				const reader = new FileReader();
				reader.onloadend = () => {
					handleAddImage(reader.result);
				};
				reader.readAsDataURL(compressedImage);
			} catch (error) {
				console.error("Error compressing image:", error);
			}
		}
	};
	return (
		<div>
			<Container className="edit-activity-form-container">
				<div className="edit-activity-form-header">
					<h1>Edit Activity</h1>{" "}
					<Button
						type="button"
						onClick={handleSaveChanges}
						id="editActivityFormSaveChangesBtn"
					>
						Save
					</Button>
				</div>
				{activityDetails && (
					<Form>
						<Row>
							<Col>
								<Form.Group className="mb-3">
									<Form.Label>Title</Form.Label>
									<Form.Control
										type="text"
										className="edit-activity-form-input-style"
										name="name"
										value={editedActivity.name}
										onChange={handleInputChange}
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Description</Form.Label>
									<Form.Control
										as="textarea"
										className="edit-activity-form-input-style"
										placeholder="How'd it go?"
										rows={3}
										id="description"
										name="description"
										value={editedActivity.description}
										onChange={handleInputChange}
									/>
								</Form.Group>

								{/* Add image management */}
								<div>
									<p>Images:</p>
									{editedActivity.imageUrls.map((imageUrl, index) => (
										<div key={index}>
											<img
												src={imageUrl}
												alt={`Activity ${index + 1}`}
												width={100}
												height={100}
												loading="lazy"
												style={{
													objectFit: "cover",
													marginRight: "5px",
												}} // Set object-fit to 'cover' or 'contain'
											/>
											<Button
												type="button"
												variant="dark"
												onClick={() => handleRemoveImage(index)}
											>
												Remove
											</Button>
										</div>
									))}
								</div>

								<div className="image-zone-info">
									<div>
										<label htmlFor="imageInput">Add Images:</label>
										<input
											type="file"
											accept="image/*"
											id="imageInput"
											onChange={handleFileInputChange}
											style={{ display: "none" }}
												onDragOver={handleDragOver}
										onDrop={handleDrop}
										/>
									</div>

									{/* Drag and drop area for image selection */}
									<div
										className="drag-drop-area"
										onDragOver={handleDragOver}
										onDrop={handleDrop}
									>
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
								</div>
							</Col>
							<Col>
								<Form.Group className="mb-3">
									<Form.Label>Sport</Form.Label>
									<SportSelection
										className="edit-activity-form-input-style"
										selectedOption={editedActivity.sport}
										handleOptionChange={handleOptionChange}
									/>
								</Form.Group>
							</Col>
							<Col>
								<div className="edit-activity-form-prefilled-data">
									<table className="table">
										<tbody>
											<tr>
												<td className="table-bold">Date</td>
												<td>{editedActivity.date}</td>
											</tr>
											<tr>
												<td className="table-bold">Time</td>
												<td>
													{editedActivity.hour}:{editedActivity.minute}:
													{editedActivity.second}
												</td>
											</tr>
											<tr>
												<td className="table-bold">Elevation Gain</td>
												<td>{editedActivity.elevation} </td>
											</tr>
										</tbody>
									</table>
								</div>
							</Col>
						</Row>
					</Form>
				)}
			</Container>
		</div>
	);
};

export default EditActivityForm;
