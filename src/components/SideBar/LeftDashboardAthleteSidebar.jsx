import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { RiArrowDropDownLine } from "react-icons/ri";


import fortunendlovu from "../../images/fortunendlovu.jpg";
import './sidebarStyles/LeftDashboardAthleteSidebar.css';
import ActivityStatsTabs from "./LeftDashboardAthleteSidebarComponents/AthleteStatsTabs";

function LeftDashboardAthleteSidebar({ athlete, activities }) {
	return (
		<div>
			<Card className="athlete-stats-card">
				<Card.Img
					variant="top"
					src={fortunendlovu}
					className="mx-auto d-block"
					id="athleteStatsCardImg"
				/>
				<Card.Body id="athlete-stats-body-wrapper">
					<Card.Title>
						{" "}
						{athlete.firstname} {athlete.lastname}{" "}
					</Card.Title>
					<Card.Text>
						<ul className="dashboard-stats">
							<li className="following-stat">
								<a href="home">
									<span>Following</span>
									<p> {activities.length}</p>
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
						<a href="home" className="morning-run-link">
							<strong>Morning run</strong>
							<span className="dotSpan">•</span>
							<time dateTime="Sep 22, 2023" className="morning-run-time">
								Sep 22, 2023
							</time>
						</a>
					</ListGroup.Item>
				</ListGroup>
				<Card.Body className="training-log">
					<Card.Link href="home" id="training-log-link">
						Your Training Log
						<RiArrowDropDownLine className="trainingLogIcon" />
					</Card.Link>
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
