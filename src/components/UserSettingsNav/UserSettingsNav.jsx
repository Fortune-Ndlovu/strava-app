import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./UserSettingsNav.css";

const UserSettingsNav = () => {
	return (
		<div className="user-settings-nav-container">
			{" "}
			<Nav defaultActiveKey="/strava-app/home" className="flex-column user-settings-nav">
				<ul className="user-settings-nav-list">
					<li className="myProfileList">
						<Link to={"/strava-app/home/settings"} className="myProfileLink">My Profile</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>My Account</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>My Performance</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>Display Preferences</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>Privacy Controls</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>Data Permissions</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>Email Notifications</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>My Gear</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>My Apps</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>Partner Integrations</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>My Performance</Link>
					</li>
					<li>
						<Link to={"/strava-app/home/settings"}>My Performance</Link>
					</li>
				</ul>
			</Nav>
		</div>
	);
};

export default UserSettingsNav;
