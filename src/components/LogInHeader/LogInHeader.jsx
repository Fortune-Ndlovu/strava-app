import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import stravaLogo from "../../images/strava_logo.svg";

const LogInHeader = () => {
	return (
		<div>
			LogInHeader
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container fluid>
				<Link to="/" title="Return to the Strava home page" className="mr-auto">
					<img
						src={stravaLogo}
						id="strava-logo"
						alt="Company brand logo that simply says strava."
						width={110}
						height={55}
					/>
				</Link>

						<Link to="/SignUp" title="Sign Up" className="mr-auto experiment btn btn-sm btn-primary d-flex align-items-center">
						Sign Up
				</Link>
			  </Container>
			</Navbar>
		</div>
	);
};

export default LogInHeader;
