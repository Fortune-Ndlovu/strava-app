import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import "../styles/ActivityDetailsPage.css";
import "../styles/common/buttons.css";
import fortunendlovu from "../images/fortunendlovu.jpg";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
		id="activity-details-dropside-btn"
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
											<Row id="activity-details-book-header-Row">
												<Col xs="9" id="activity-details-book-header-Col">
													<div id="activityDetailsTypeInfo">
														<a href="/activities">Fortune Ndlovu </a> -{" "}
														{activityDetails.sport}
													</div>
												</Col>
												<Col xs="3">
													<ButtonGroup aria-label="Basic example" id="socials">
														<Button variant="secondary">
															<FaFacebookF id="facebook-icon" />
														</Button>
														<Button variant="secondary">
															<FaTwitter id="twitter-icon" />
														</Button>
														<Button variant="secondary">
															<IoShareSocialOutline id="share-icon" />
														</Button>
														<Button
															variant="secondary"
															className="activity-details-kudos"
														>
															<svg
																fill="currentColor"
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 16 16"
																width="16"
																height="16"
																data-testid="unfilled_kudos"
															>
																<path
																	d="M15.243 7.182a1.907 1.907 0 00-.532-1.423 2.069 2.069 0 00-1.493-.641H9.863l.454-1.812A2.426 2.426 0 008.064.514h-.513l-.718 2.807L4.97 6.915.412 9.34l2.472 6.424 4.278-2.28h4.785a2.142 2.142 0 002.127-1.976l.084-1.177a1.962 1.962 0 00.712-2.097 1.93 1.93 0 00.373-1.052zM1.664 9.807l2.06-1.1 1.748 4.542-2.061 1.1-1.747-4.542zm12.289-2.038l-.268.254.165.331a.942.942 0 01-.044.903.965.965 0 01-.369.352l-.237.131-.122 1.7a1.123 1.123 0 01-1.129 1.049H6.914l-.552.295-1.748-4.547 1.1-.586 2.033-3.92.567-2.166a1.427 1.427 0 011.032 1.371c0 .071 0 .139-.007.167l-.758 3.016h4.64a1.059 1.059 0 01.764.328.917.917 0 01.26.683.942.942 0 01-.292.639z"
																	fill=""
																></path>
															</svg>
															0
														</Button>
														<Button
															variant="secondary"
															className="activity-details-kudos"
														>
															<svg
																fill="currentColor"
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 16 16"
																width="16"
																height="16"
															>
																<path
																	d="M.5 1.5v11h2v3.21l6.06-3.21h6.94v-11H.5zm14 10H8.31L3.5 14.05V11.5h-2v-9h13v9z"
																	fill=""
																></path>
																<path
																	d="M12.96 4.5H3v1h9.43l.53-1zm-1.59 3H3v1h7.84l.53-1z"
																	fill=""
																></path>
															</svg>
															0
														</Button>
														<Button variant="secondary">
															<IoMdArrowDropdown className="activity-details-toggle-icon" />
														</Button>
													</ButtonGroup>
												</Col>
											</Row>
										</Accordion.Header>
										<Accordion.Body>
											<Row>
												<Col>
													<div className="activity-details-left-page">
														<div className="activity-details-left-page-text">
															<Row>
																<Col id="activityDetailsLeftPageCol">
																	<img
																		id="activity-details-user-image"
																		src={fortunendlovu}
																		alt="fortune ndlovu"
																		width={50}
																		height={50}
																	/>
																</Col>
																<Col>
																	<p>
																		{activityDetails.time} on{" "}
																		{activityDetails.date}
																	</p>

																	<p className="activity-details-name">
																		{activityDetails.name}
																	</p>
																	<p className="activity-details-description">
																		{activityDetails.description}
																	</p>
																</Col>
															</Row>
														</div>
														{activityDetails.imageUrls &&
															activityDetails.imageUrls.length > 0 && (
																<div className="activity-details-added-image">
																	{activityDetails.imageUrls.map(
																		(imageUrl, index) => (
																			<img
																				key={index}
																				src={imageUrl}
																				alt={`Activity ${index + 1}`}
																				width={70}
																				height={70}
																				loading="lazy"
																				style={{
																					objectFit: "cover",
																					marginRight: "5px",
																				}} 
																			/>
																		)
																	)}
																</div>
															)}
													</div>
												</Col>
												<Col>
													<div className="activity-details-right-page">
														<p className="activity-details-right-duration">
															<span id="activityDetailsDuration">
															{activityDetails.hour}:{activityDetails.minute}:
															{activityDetails.second}</span><br></br>
															<span className="activity-details-right-duration-span">Duration</span>
														</p>
														<p>
															Shoes: Nike NIKE W NIKE METCON 8 <br></br>BLACK (0.6 km)
														</p>
													</div>
												</Col>
											</Row>
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
