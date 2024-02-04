import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/ActivityDetailsPage.css";

const ActivityDetailsPage = () => {
	const { activityId } = useParams();
	const navigate = useNavigate();
	const [activityDetails, setActivityDetails] = useState(null);

	useEffect(() => {
		const fetchActivityDetails = async () => {
			const activityDoc = doc(db, "userActivities", activityId);
			const activitySnapshot = await getDoc(activityDoc);

			if (activitySnapshot.exists()) {
				setActivityDetails({
					...activitySnapshot.data(),
					id: activitySnapshot.id,
				});
			}
		};

		fetchActivityDetails();
	}, [activityId]);

	const handleDeleteActivity = async () => {
		const userDoc = doc(db, "userActivities", activityId);
		await deleteDoc(userDoc);

		// Redirect to MyActivities page after deletion
		navigate('/activities');
	};

	return (
		<div>
			<h1>Activity Details</h1>
			{activityDetails && (
				<div>
					<Dropdown as={ButtonGroup}>
						<Link to={`/activity/${activityId}/edit`}>
						<Button variant="success">Edit</Button>
						</Link>

						<Dropdown.Toggle
							split
							variant="success"
							id="dropdown-split-basic"
						/>

						<Dropdown.Menu id="activityDropdownOptions">
							<Dropdown.Item href="#/action-1">Refresh Activity Achievements</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Flag</Dropdown.Item>
							<Dropdown.Item onClick={handleDeleteActivity}>Delete</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					{/* Display activity details here */}
					<p>Name: {activityDetails.name}</p>
                    <p>Description: {activityDetails.description}</p>
					{/* Add other details as needed */}
				</div>
			)}
		</div>
	);
};

export default ActivityDetailsPage;
