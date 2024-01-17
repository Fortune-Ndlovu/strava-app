import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const UploadActivitiesSideBar = () => {
	return (
		<div className="upload-activities-sidebar-container">
			<ListGroup className="flex-column" defaultActiveKey="#link1">
				<ListGroup.Item action>
					<Link
						to="/device"
						data-rr-ui-event-key="/device"
						className="nav-link"
					>
						Device
					</Link>
				</ListGroup.Item>
				<ListGroup.Item action>
					<Link to="/file" data-rr-ui-event-key="/file" className="nav-link">
						File
					</Link>
				</ListGroup.Item>
				<ListGroup.Item action>
					<Link
						to="/manual"
						data-rr-ui-event-key="/manual"
						className="nav-link"
					>
						Manual
					</Link>
				</ListGroup.Item>
				<ListGroup.Item action>
					<Link
						to="/mobile"
						data-rr-ui-event-key="/mobile"
						className="nav-link"
					>
						Mobile
					</Link>
				</ListGroup.Item>
			</ListGroup>
		</div>
	);
};

export default UploadActivitiesSideBar;
