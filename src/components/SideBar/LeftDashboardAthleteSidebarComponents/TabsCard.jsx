import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { MdDoubleArrow } from "react-icons/md";
import WeeksStyleSvg from "./WeeksStyleSvg";
import dropdown_icon from "../../../images/dropdown_icon.svg";

const TabsCard = ({ svgContent, weekText, yearText }) => {
	return (
		<div>
			{" "}
			{/* second tab body */}
			<div className="relativeEffortTitleStyle">
				<MdDoubleArrow className="arrowIcon" />
				<p>GOALS</p>
			</div>
			<Card style={{ width: "17rem" }} id="recoveryWeek-cardStyle">
				<Card.Body>
					<Card.Text className="goals-tab-cardText">
						<div className="goals-tab-text">
							<p>
								Subscribe to stay motivated with custom progress, segment and
								power goals. <Link to="/strava-app/home">Upgrade</Link>
							</p>
						</div>
					</Card.Text>
					<Card.Text className="weekStats-cardText">
						<div className="goals-tab-stats">
							<p className="thisWeek-para">THIS WEEK</p>
							<p className="thisWeek-numbers">{weekText}</p>
						</div>
					</Card.Text>
					<Card.Text>
						<div
							className="tab-stats"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<WeeksStyleSvg />
							{svgContent}
						</div>
					</Card.Text>
					<Card.Text className="weekStats-cardText-second">
						<div className="goals-tab-stats">
							<p className="thisWeek-para">THIS YEAR</p>
							<p className="thisWeek-numbers">{yearText}</p>
						</div>
					</Card.Text>
				</Card.Body>
				<Card.Body className="training-log">
					<Link to={"/strava-app/home/activities"} id="goals-log-link">
						Manage Your Goals <img
							src={dropdown_icon}
							alt="arrow for helping the user to their activities"
							className="trainingLogIcon"
							width={32}
							height={32}
						/>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default TabsCard;
