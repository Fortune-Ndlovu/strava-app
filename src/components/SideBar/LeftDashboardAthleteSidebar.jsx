import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./sidebarStyles/LeftDashboardAthleteSidebar.css";
import ActivityStatsTabs from "./LeftDashboardAthleteSidebarComponents/AthleteStatsTabs";
import fortunendlovu from "../../images/fortunendlovu.jpg";
import dropdown_icon from "../../images/dropdown_icon.svg";

function LeftDashboardAthleteSidebar({ athlete }) {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		// Firestore collection reference
		const activitiesCollection = collection(db, "userActivities");

		// Setting up a snapshot listener to track changes in the collection
		const unsubscribe = onSnapshot(activitiesCollection, (snapshot) => {
			// Update the state whenever there's a change in the collection
			setActivities(
				snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		});

		// Cleanup the listener when the component unmounts
		return () => unsubscribe();
	}, []);

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
					<div>
						<ul className="dashboard-stats">
							<li className="following-stat">
								<a href="/activities">
									<span>Following</span>
									<p className="dashboard-stats-value">0</p>
								</a>
							</li>
							<li className="followers-stat">
								<a href="/activities">
									<span>Followers</span>
									<p>0</p>
								</a>
							</li>
							<li className="activities-stat">
								<a href="/activities">
									<span>Activities</span>
									<p>{activities.length}</p>
								</a>
							</li>
						</ul>
					</div>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>
						<span className="latestActivityText">Latest Activity</span>
						<br></br>
						<Link to={"/activities"} className="latest-activity-link">
							{activities.length > 0 ? (
								<>
									<strong>{activities[0].name}</strong>
									<span className="dotSpan">•</span>
									<time
										dateTime="Sep 22, 2023"
										className="latest-activity-time"
									>
										{activities[0].date || "No date added"}
									</time>
								</>
							) : (
								<p>No activities found</p>
							)}
						</Link>
					</ListGroup.Item>
				</ListGroup>
				<Card.Body className="training-log">
					<Link to={"/activities"} id="training-log-link">
						Your Training Log
						<img
							src={dropdown_icon}
							alt="arrow for helping the user to their activities"
							className="trainingLogIcon"
							width={32}
							height={32}
						/>
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
	}),
};

export default LeftDashboardAthleteSidebar;
