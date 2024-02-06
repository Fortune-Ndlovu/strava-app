import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ActivityDetailsPage.css";
import "../styles/common/buttons.css";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a id="activity-details-dropside-btn"
		title="Actions"
		href="#"
		ref={ref}
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}
	>
		{children}
	</a>
));

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
			<Container className="activity-details-container">
				{activityDetails && (
					<div>
						<Row>
							<Col id="activtyDetailButtonGroupCol">
								<Dropdown as={ButtonGroup}>
									<Link to={`/activity/${activityId}/edit`}>
										<Button
											id="activity-details-edit-btn"
											title="Edit this activity"
										>
											<svg
												width="24"
												height="24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M22.4 1.936l-.277-.278L19.457.231l-.8.119L5.131 13.88.4 22.683l.913.913 8.426-4.485 13.897-13.85.118-.8L22.4 1.936zM8.687 15.652l-.278-.276-1.865-1L17.236 3.684l2.046 1.095L20.3 6.687 9.608 17.378l-.921-1.726zm-2.925-.164l1.83.981.938 1.758-5.895 3.138 3.127-5.877zM21.3 5.69l-.921-1.726-.279-.277-1.867-1 1.029-1.029 2.047 1.1 1.018 1.902L21.3 5.69z"
													fill="#000"
												/>
											</svg>
										</Button>
									</Link>

									<Dropdown.Toggle
										as={CustomToggle}
										split
										variant="success"
										id="dropdown-split-basic"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											fill="none"
										>
											<path
												d="M3.5 15.175a3.175 3.175 0 1 1 0-6.35 3.175 3.175 0 0 1 0 6.35zm0-5a1.824 1.824 0 1 0 0 3.649 1.824 1.824 0 0 0 0-3.649zm17 5a3.175 3.175 0 1 1 0-6.35 3.175 3.175 0 0 1 0 6.35zm0-5a1.825 1.825 0 1 0 0 3.65 1.825 1.825 0 0 0 0-3.65zm-8.5 5a3.175 3.175 0 1 1 0-6.35 3.175 3.175 0 0 1 0 6.35zm0-5a1.825 1.825 0 1 0 0 3.65 1.825 1.825 0 0 0 0-3.65z"
												fill="#000"
											/>
										</svg>
									</Dropdown.Toggle>
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
							</Col>
							<Col xs="10">
								<Accordion defaultActiveKey="0" id="activityDetailPageBook">
									<Accordion.Item eventKey="0">
										<Accordion.Header id="activity-details-book-header">
											<div id="activityDetailsTypeInfo">
												<a href="#">Fortune Ndlovu </a> - {activityDetails.sport}
											</div>
											<ButtonGroup aria-label="Basic example" id="socials">
												<Button variant="secondary">Left</Button>
												<Button variant="secondary">Middle</Button>
												<Button variant="secondary">Right</Button>
											</ButtonGroup>
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
															{activityDetails.imageUrls.map(
																(imageUrl, index) => (
																	<img
																		key={index}
																		src={imageUrl}
																		alt={`Activity ${index + 1}`}
																		width={64}
																		height={64}
																		style={{ marginRight: "10px" }}
																		loading="lazy"
																	/>
																)
															)}
														</div>
													</div>
												)}
											<p>Shoes: Nike NIKE W NIKE METCON 8 BLACK (0.6 km)</p>
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</Col>
						</Row>
					</div>
				)}
			</Container>
		</div>
	);
};

export default ActivityDetailsPage;
