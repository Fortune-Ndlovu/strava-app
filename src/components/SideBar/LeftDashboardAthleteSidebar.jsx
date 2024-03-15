import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
	query,
	collection,
	onSnapshot,
	where,
	getDocs,
} from "firebase/firestore";
import { getCurrentUserId } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import "./sidebarStyles/LeftDashboardAthleteSidebar.css";
import ActivityStatsTabs from "./LeftDashboardAthleteSidebarComponents/AthleteStatsTabs";
import defaultUserProfile from "../../images/defaultUserProfile.png";
import dropdown_icon from "../../images/dropdown_icon.svg";

function LeftDashboardAthleteSidebar({ athlete }) {
	const [activities, setActivities] = useState([]);

	const [userData, setUserData] = useState({});

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userId = getCurrentUserId();
				if (userId) {
					const usersQuery = query(
						collection(db, "users"),
						where("uid", "==", userId)
					);
					const userSnapshot = await getDocs(usersQuery);
					if (!userSnapshot.empty) {
						const userDataFromFirestore = userSnapshot.docs[0].data();
						setUserData(userDataFromFirestore);
					} else {
						console.error("User document not found for current user.");
					}
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, []);

	useEffect(() => {
		// Firestore collection reference
		const activitiesCollection = collection(db, "userActivities");

		// Setting up a snapshot listener to track changes in the collection
		const unsubscribe = onSnapshot(activitiesCollection, (snapshot) => {
			// Update the state whenever there's a change in the collection
			setActivities(
				snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter((activity) => activity.userId === getCurrentUserId())
			);
		});

		// Cleanup the listener when the component unmounts
		return () => unsubscribe();
	}, []);

	return (
		<div style={{ width: "17rem" }}>
			<Card className="athlete-stats-card">
				{userData.profileImageUrl ? (
					<Card.Img
						variant="top"
						src={userData.profileImageUrl}
						className="mx-auto d-block"
						id="athleteStatsCardImg"
						width={64}
						height={64}
					/>
				) : (
					<Card.Img
						variant="top"
						src={defaultUserProfile}
						className="mx-auto d-block"
						id="athleteStatsCardImg"
						width={64}
						height={64}
					/>
				)}
				<Card.Body id="athlete-stats-body-wrapper">
					<Link to={"/home/activities"} id="athleteName">
						<Card.Title>
							{" "}
							{userData.name}
						</Card.Title>
					</Link>
					<div>
						<ul className="dashboard-stats">
							<li className="following-stat">
								<Link to="/home/activities">
									<span>Following</span>
									<p className="dashboard-stats-value">0</p>
								</Link>
							</li>
							<li className="followers-stat">
								<Link to="/home/activities">
									<span>Followers</span>
									<p>0</p>
								</Link>
							</li>
							<li className="activities-stat">
								<Link to="/home/activities">
									<span>Activities</span>
									<p>{activities.length}</p>
								</Link>
							</li>
						</ul>
					</div>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>
						<span className="latestActivityText">Latest Activity</span>
						<br></br>
						<Link to={"/home/activities"} className="latest-activity-link">
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
					<Link to={"/home/activities"} id="training-log-link">
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
