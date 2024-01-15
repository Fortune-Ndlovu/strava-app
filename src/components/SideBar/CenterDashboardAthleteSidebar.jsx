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
										<Row>
											<Col sm={3} className="feed-ui-user-image-col" style={{width: "15%"}}>
												<div className="feed-ui-user-image-wrapper">
													<Card.Img
														variant="top"
														id="feed-ui-user-image"
														src={fortunendlovu}
													/>
												</div>
											</Col>

											<Col sm={9}>
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
															· The Borough District of Clonmel, County
															Tipperary
														</span>
													</p>
												</div>
											</Col>
										</Row>
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
													<Dropdown.Item
														href="#/action-1"
														className="uiSocialsBtn-dropDown-link"
													>
														Twitter
													</Dropdown.Item>
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
										<div className="media-stats-wrapper">
											<div>
												<p className="media-stats-para">Distance</p>
												<p className="media-stats-para-numbers">1.96 Km</p>
											</div>

											<div>
												<p className="media-stats-para">Pace</p>
												<p className="media-stats-para-numbers">8:15 /km</p>
											</div>

											<div>
												<p className="media-stats-para">Time</p>
												<p className="media-stats-para-numbers">16m 12s</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Text>
						<Card.Text className="feed-ui-activity-container">
							<div className="feed-ui-activity-images">
								<div className="feed-ui-activity-imageLeft">
									<a href="home">
										<Card.Img
											variant="top"
											src={runningRoute}
											width={287}
											height={287}
										/>
										<Button
											title="View all kudos"
											id="start-and-end-hidden-btn"
										>
											Start and end hidden
										</Button>
										<Button title="View all kudos" id="saveRouteBtn">
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
							<div className="activity-kudos-reactions">
								<Button title="View all kudos" id="activityKudosLikeBtn">
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
								</Button>
								<Button title="Comments" id="activityKudosCommentBtn">
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
								</Button>
							</div>
						</Card.Text>
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
