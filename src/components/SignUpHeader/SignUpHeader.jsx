import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import stravaLogo from "../../images/strava_logo.svg";
import "../../styles/common/buttons.css";
const SignUpHeader = () => {
	return (
		<div>
			SignUpHeader
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container fluid>
					<Link
						to="#home"
						title="Return to the Strava home page"
						className="mr-auto"
					>
						<img
							src={stravaLogo}
							id="strava-logo"
							alt="Company brand logo that simply says strava."
							width={110}
							height={55}
						/>
					</Link>

					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#challenges">Challenges</Nav.Link>
							<Nav.Link href="#subscription">Subscription</Nav.Link>
						</Nav>
					</Navbar.Collapse>

					<Link
						to="/strava-app/login"
						title="Log In"
						id="homeLoginBtn"
						className="mr-auto btn btn-sm btn-primary d-flex align-items-center"
					>
						Log In
					</Link>
				</Container>
			</Navbar>
		</div>
	);
};

export default SignUpHeader;
