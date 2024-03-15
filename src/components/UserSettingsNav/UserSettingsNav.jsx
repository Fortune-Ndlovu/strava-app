import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./UserSettingsNav.css";

const UserSettingsNav = () => {
	return (
		<div className="user-settings-nav-container">
			{" "}
			<Nav defaultActiveKey="/home" className="flex-column user-settings-nav">
				<ul className="user-settings-nav-list">
					<li>
						<Link to={"/home/myProfile"}>My Profile</Link>
					</li>
					<li>
						<Link to={"/home/myAccount"}>My Account</Link>
					</li>
					<li>
						<Link to={"/home/myPerformance"}>My Performance</Link>
					</li>
					<li>
						<Link to={"/home/displayPreferences"}>Display Preferences</Link>
					</li>
					<li>
						<Link to={"/home/Privacy Controls"}>Privacy Controls</Link>
					</li>
					<li>
						<Link to={"/home/dataPermissions"}>Data Permissions</Link>
					</li>
					<li>
						<Link to={"/home/emailNotifications"}>Email Notifications</Link>
					</li>
					<li>
						<Link to={"/home/myGear"}>My Gear</Link>
					</li>
					<li>
						<Link to={"/home/myApps"}>My Apps</Link>
					</li>
					<li>
						<Link to={"/home/partnerIntegrations"}>Partner Integrations</Link>
					</li>
					<li>
						<Link to={"/home/myBadges"}>My Performance</Link>
					</li>
					<li>
						<Link to={"/home/myAPIApplication"}>My Performance</Link>
					</li>
				</ul>
			</Nav>
		</div>
	);
};

export default UserSettingsNav;
