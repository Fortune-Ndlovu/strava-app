import React from "react";
import Card from "react-bootstrap/Card";
import { MdDoubleArrow } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import WeeksStyleSvg from "./WeeksStyleSvg";

const TabsCard = ({ svgContent, weekText, yearText }) => {
	return (
		<div>
			{" "}
			{/* second tab body */}
			<div className="relativeEffortTitleStyle">
				<MdDoubleArrow className="arrowIcon" />
				<p>GOALS</p>
			</div>
			<Card style={{ width: "18rem" }} id="recoveryWeek-cardStyle">
				<Card.Body>
					<Card.Text className="goals-tab-cardText">
						<div className="goals-tab-text">
							<p>
								Subscribe to stay motivated with custom progress, segment and
								power goals. <a href="home">Upgrade</a>
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
					<Card.Text className="weekStats-cardText">
						<div className="goals-tab-progress">
							<span id="rangeSpan">--:--</span>
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
					<Card.Link href="home" id="goals-log-link">
						Manage Your Goals
						<RiArrowDropDownLine className="trainingLogIcon" />
					</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default TabsCard;
