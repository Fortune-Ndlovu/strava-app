import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDropDownLine } from "react-icons/ri";
import fortunendlovu from "../../images/fortunendlovu.jpg";
import celebration_bronze_icon from "../../images/celebration_bronze_icon.svg";
import runningRoute from "../../images/runningRoute.png";
import runningView from "../../images/runningView.jpg";
import "./sidebarStyles/CenterDashboardAthleteSidebar.css";

function CenterDashboardAthleteSidebar({ athlete }) {
	return (
		<div id="homeDashboardFeedUI">
			<Container>
				<Card style={{ width: "auto" }}>
					<Card.Body>
						<Card.Text>
							<Row>
								<div className="feed-ui-card">
									<Col>
										<div className="feed-ui-user-image-wrapper">
											<Card.Img
												variant="top"
												id="feed-ui-user-image"
												src={fortunendlovu}
											/>
										</div>
										<div className="feed-ui-user-info">
											<p className="feed-ui-user-name">
												{athlete.firstname} {athlete.lastname}
											</p>
											<p className="feed-ui-user-location">
												<time data-test id="date_at_time">
													22 September 2023 at 09:09
												</time>
												<br></br>
												<span>
													· The Borough District of Clonmel, County Tipperary
												</span>
											</p>
										</div>
										{/* </div> */}
									</Col>
									<Col sm={4}>
										<div className="feed-ui-card-external-socialsBtn-wrapper">
											<Dropdown id="uiSocialsBtn">
												<Dropdown.Toggle
													variant="success"
													id="uiSocialsBtn-dropdownBtn-list"
												>
													<RiArrowDropDownLine className="uiSocialsBtn-dropdownUp-icon" />
												</Dropdown.Toggle>
												<Dropdown.Menu id="module-btn-list-dropdown">
													<Dropdown.Item
														href="#/action-1"
														className="uiSocialsBtn-dropDown-link"
													>
														Facebook
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item
														href="#/action-1"
														className="uiSocialsBtn-dropDown-link"
													>
														Twitter
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item
														href="#/action-2"
														className="uiSocialsBtn-dropDown-link"
													>
														Get Embed Code
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</Col>
								</div>
							</Row>
						</Card.Text>
						<Card.Text id="feedUIPackages">
							<div className="feed-ui-media">
								<div className="feed-ui-run-icon">
									<svg
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
									>
										<title>Run</title>
										<path
											d="M21.3 18.12L14.98 6.28a2.6 2.6 0 00-4.63.07l-.46.93a.585.585 0 01-.21-.45V3.17A2.452 2.452 0 007.24.72a2.172 2.172 0 00-2.01 1.4L2.91 6.84 1.39 7.96a2.768 2.768 0 00-1.06 2.06 2.96 2.96 0 00.9 2.32l7.76 7.9a11.62 11.62 0 008.22 3.43h3.65a2.757 2.757 0 002.41-1.4l.05-.09a2.7 2.7 0 00-.01-2.73 2.665 2.665 0 00-2.01-1.33zm.85 3.39l-.05.09a1.425 1.425 0 01-1.24.73h-3.65a10.257 10.257 0 01-7.26-3.04l-7.78-7.92a1.566 1.566 0 01-.49-1.27 1.426 1.426 0 01.5-1.05l.71-.53 8.6 8.48h1.64v-.28L3.98 7.7l2.48-5.02a.848.848 0 01.78-.61 1.1 1.1 0 011.09 1.1v3.66a1.92 1.92 0 001.92 1.92h.43l.88-1.8a1.24 1.24 0 011.12-.7 1.257 1.257 0 011.11.67l1.04 1.94L12.69 10v1.52l2.77-1.47.77 1.42v.01l-2.63 1.39v1.53l3.26-1.73.74 1.37-3.02 1.6v1.53l3.65-1.94 2.06 3.85.25.36h.4a1.376 1.376 0 011.2.69 1.34 1.34 0 01.01 1.38z"
											fill=""
										></path>
									</svg>
								</div>
								<div className="feed-ui-media-activity">
									<h4>
										<a href="home">Morning Run</a>
									</h4>
									<p>Slow and steady wins the race 🏃💨</p>
									<div className="feed-ui-media-stats">
										<Row>
											<Col  sm={2}>
												<div>
													<p className="media-stats-para">Distance</p>
													<p className="media-stats-para-numbers">1.96 Km</p>
												</div>
											</Col>
											<Col  sm={2}>
												<div>
													<p className="media-stats-para">Pace</p>
													<p className="media-stats-para-numbers">8:15 /km</p>
												</div>
											</Col>
											<Col  sm={2}>
												<div>
													<p className="media-stats-para">Time</p>
													<p className="media-stats-para-numbers">16m 12s</p>
												</div>
                                            </Col>
                                            <Col sm={6}>
												<div className="achievements-stat">
													<p className="media-stats-para">Achievements</p>
													<a href="home" id="achievementsLink">
														<svg
															fill="currentColor"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 24 24"
															width="18"
															height="18"
														>
															<path
																d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.57 4.57 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.31-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77v-7.5h2.64v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29zm-5.42 20.04h-4.5L12 21.12zm4.09-11.19a3.156 3.156 0 01-1.4 2.41l-3.22 1.84c-.76.43-1.36.75-1.64.88a15.37 15.37 0 01-1.78-.88l-3.23-1.84a3.186 3.186 0 01-1.4-2.41V3.55a.1.1 0 00.05-.04h-.05V1.67h12.66V7.6h.01z"
																fill=""
															></path>
														</svg>
														<span>4</span>
													</a>
                                                </div>
                                            </Col>
										</Row>
									</div>
								</div>
							</div>
						</Card.Text>
						<Card.Text id="celebrationsWrapper">
							<div className="feed-ui-celebration-title">
								<Card.Img
									variant="top"
									src={celebration_bronze_icon}
									width={32}
									height={32}
								/>

								<a
									href="home"
									aria-label="Congrats! You just set your 3rd fastest time in the 1 mile!"
								>
									Congrats! You just set your 3rd fastest time in the 1 mile!
								</a>
							</div>
						</Card.Text>
						<Card.Text>
							<div className="feed-ui-activity-images">
								<div className="feed-ui-activity-imageLeft">
									<a href="home">
										<Card.Img
											variant="top"
											src={runningRoute}
											width={287}
											height={287}
										/>
										<Button title="View all kudos" variant="primary">
											Start and end hidden
										</Button>
										<Button
											title="View all kudos"
											variant="primary"
											id="saveRouteBtn"
										>
											Save Route
										</Button>
									</a>
								</div>
								<div className="feed-ui-activity-imageLeft">
									<a href="home">
										<Card.Img
											variant="top"
											src={runningView}
											width={287}
											height={287}
										/>
									</a>
								</div>
							</div>
						</Card.Text>

						<Button title="View all kudos" variant="primary">
							Like
						</Button>
						<Button title="Comments" variant="primary">
							Comments
						</Button>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

CenterDashboardAthleteSidebar.propTypes = {
	athlete: PropTypes.shape({
		firstname: PropTypes.string,
		lastname: PropTypes.string,
		bio: PropTypes.string,
		city: PropTypes.string,
		// Add other properties as needed
	}).isRequired,
	activities: PropTypes.array.isRequired,
};

export default CenterDashboardAthleteSidebar;
