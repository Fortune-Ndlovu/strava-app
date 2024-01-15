import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./sidebarStyles/LeftDashboardAthleteSidebar.css";
import ActivityStatsTabs from "./LeftDashboardAthleteSidebarComponents/AthleteStatsTabs";
import fortunendlovu from "../../images/fortunendlovu.jpg";
import dropdown_icon from '../../images/dropdown_icon.svg';

function LeftDashboardAthleteSidebar({ athlete, activities }) {
	return (
		<div style={{ width: "17rem" }}>
			<Card className="athlete-stats-card">
				<Card.Img
					variant="top"
					src={fortunendlovu}
					className="mx-auto d-block"
					id="athleteStatsCardImg"
				/>
				<Card.Body id="athlete-stats-body-wrapper">
					<Link to={"/activities"} id="athleteName">
						<Card.Title>
							{" "}
							{athlete.firstname} {athlete.lastname}{" "}
						</Card.Title>
					</Link>
					<Card.Text>
						<ul className="dashboard-stats">
							<li className="following-stat">
								<a href="home">
									<span>Following</span>
									<p className="dashboard-stats-value"> {activities.length}</p>
								</a>
							</li>
							<li className="followers-stat">
								<a href="home">
									<span>Followers</span>
									<p> {activities.length}</p>
								</a>
							</li>
							<li className="activities-stat">
								<a href="home">
									<span>Activities</span>
									<p> {activities.length}</p>
								</a>
							</li>
						</ul>
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>
						<span className="latestActivityText">Latest Activity</span>
						<br></br>
						<Link to={"/activities"} className="latest-activity-link">
							<strong>Morning run</strong>
							<span className="dotSpan">•</span>
							<time dateTime="Sep 22, 2023" className="latest-activity-time">
								Sep 22, 2023
							</time>
							</Link>
					</ListGroup.Item>
				</ListGroup>
				<Card.Body className="training-log">
					<Link to={"/activities"} id="training-log-link">
						Your Training Log
						<img src={dropdown_icon} alt="arrow for helping the user to their activities" className="trainingLogIcon" width={32} height={32}/>
				</Link>
				</Card.Body>
			</Card>

			<ActivityStatsTabs />
		</div>
	);
}

LeftDashboardAthleteSidebar.propTypes = {
	athlete: PropTypes.shape({
		firstname: PropTypes.string,
		lastname: PropTypes.string,
		bio: PropTypes.string,
		city: PropTypes.string,
		// Add other properties as needed
	}).isRequired,
	activities: PropTypes.array.isRequired,
};

export default LeftDashboardAthleteSidebar;
