import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import SportSelection from "../FilteringMyActivitiesForm/SportSelection";
import compressImage from "../../services/compressImage";

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
			<h1>Edit Activity</h1>
			{activityDetails && (
				<form>
					<div>
						<label htmlFor="name">Title</label>
						<input
							type="text"
							id="name"
							name="name"
							value={editedActivity.name}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="description">Description</label>
						<textarea
							id="description"
							name="description"
							value={editedActivity.description}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="name">Title</label>
						<SportSelection
							selectedOption={editedActivity.sport}
							handleOptionChange={handleOptionChange}
						/>
					</div>
					<div>
						<p>Date of the activity: {editedActivity.date}</p>
						<p>
							The activity Duration: {editedActivity.hour}:
							{editedActivity.minute}:{editedActivity.second}
						</p>
						<p>Elevation Gain: {editedActivity.elevation} m</p>
					</div>

					{/* Add image management */}
					<div>
						<p>Images:</p>
						{editedActivity.imageUrls.map((imageUrl, index) => (
							<div key={index}>
								<img
									src={imageUrl}
									alt={`Activity ${index + 1}`}
									width={64}
									height={64}
									loading="lazy"
								/>
								<button type="button" onClick={() => handleRemoveImage(index)}>
									Remove
								</button>
							</div>
						))}
					</div>

					{/* Improved file input for image selection */}
					<div>
						<label htmlFor="imageInput">Add Images:</label>
						<input
							type="file"
							accept="image/*"
							id="imageInput"
							onChange={handleFileInputChange}
							style={{ display: "none" }}
						/>
					</div>

					{/* Drag and drop area for image selection */}
					<div
						className="drag-drop-area"
						onDragOver={handleDragOver}
						onDrop={handleDrop}
					>
						Drag and drop images here
					</div>

					<button type="button" onClick={handleSaveChanges}>
						Save Changes
					</button>
				</form>
			)}
		</div>
	);
};

export default EditActivityForm;
