import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import SportSelection from "../FilteringMyActivitiesForm/SportSelection";

const EditActivityForm = () => {
	const { activityId } = useParams();
	const navigate = useNavigate();
	const [activityDetails, setActivityDetails] = useState(null);
	const [editedActivity, setEditedActivity] = useState({
		// Define the structure of your activity object here
		// Example:
		name: "",
		description: "",
		sport: "",
		// ... other fields
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

	const handleSaveChanges = async () => {
		// Implement save changes logic
		const userDoc = doc(db, "userActivities", activityId);
		await updateDoc(userDoc, editedActivity);

		// Redirect back to the ActivityDetailsPage
		navigate(`/activity/${activityId}`);
	};

	return (
		<div>
			<h1>Edit Activity</h1>
			{activityDetails && (
				<form>
					{/* Example form fields, replace with your actual fields */}
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
					<p>The activity Duration: {editedActivity.hour}:{editedActivity.minute}:{editedActivity.second}</p>
					<p>Elevation Gain: {editedActivity.elevation} m</p>
					</div>

					{/* Add other form fields as needed */}
					<button type="button" onClick={handleSaveChanges}>
						Save Changes
					</button>
				</form>
			)}
		</div>
	);
};

export default EditActivityForm;