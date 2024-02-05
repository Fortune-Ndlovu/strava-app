import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
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
	}, []);

	const handleDeleteActivity = async () => {
		const userDoc = doc(db, "userActivities", activityId);
		await deleteDoc(userDoc);

		// Redirect to MyActivities page after deletion
		navigate("/activities");
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
							<Dropdown.Item href="#/action-1">
								Refresh Activity Achievements
							</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Flag</Dropdown.Item>
							<Dropdown.Item onClick={handleDeleteActivity}>
								Delete
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Fortune Ndlovu - {activityDetails.sport}
							</Accordion.Header>
							<Accordion.Body>
								<p>Date of the activity: {activityDetails.date}</p>
								<p>Time of the activity: {activityDetails.time}</p>
								<p>Name: {activityDetails.name}</p>
								<p>Description: {activityDetails.description}</p>
								<p>
									The activity Duration: {activityDetails.hour}:
									{activityDetails.minute}:{activityDetails.second}
								</p>
								{activityDetails.imageUrls &&
									activityDetails.imageUrls.length > 0 && (
										<div>
											<p>Images:</p>
											<div>
												{activityDetails.imageUrls.map((imageUrl, index) => (
													<img
														key={index}
														src={imageUrl}
														alt={`Activity ${index + 1}`}
														width={64}
														height={64}
														style={{ marginRight: "10px" }}
													/>
												))}
											</div>
										</div>
									)}
								<p>Shoes: Nike NIKE W NIKE METCON 8 BLACK (0.6 km)</p>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			)}
		</div>
	);
};

export default ActivityDetailsPage;
