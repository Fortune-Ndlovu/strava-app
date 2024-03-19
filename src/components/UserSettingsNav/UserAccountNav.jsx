import React from "react";
import Button from "react-bootstrap/Button";
const UserAccountNav = () => {
	return (
		<div>
			<h3> My Account</h3>
			<p>Email</p>
			<p>aaaaa@gmail.com</p>
			<p>Membership Status</p>
			<p>Free Account</p>
			<div>
				<Button>Start Your Free Trial</Button>
			</div>
			<hr></hr>
			<div className="social-connections-container">
				<h3>Social Connections</h3>
				<div className="sc-wrapper">
					<p>Connect with Garmin</p>
					<p>Find your friends, share your activities</p>
				</div>
				<div className="sc-wrapper">
					<p>Connect with Facebook</p>
					<p>Automatic uploads and Strava Live Segments</p>
				</div>
				<div className="sc-wrapper">
					<p>Connected as Fortune Ndlovu</p>
					<p>Automatic uploads and Strava Live Segments</p>
				</div>
				<div className="sc-wrapper">
					<p>Connect with MyFitnessPal</p>
					<p>Share your Strava activities on MyFitnessPal</p>
				</div>
			</div>
		</div>
	);
};

export default UserAccountNav;
