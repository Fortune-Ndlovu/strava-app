import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserProfileForm from "../../components/UserProfileForm/UserProfileForm";
import "../../styles/UserPages/Settings.css";
import UserSettingsNav from "../../components/UserSettingsNav/UserSettingsNav";
import UserAccountNav from "../../components/UserSettingsNav/UserAccountNav";

const Settings = () => {
	return (
		<div className="settings-wrapper">
			<Container>
				<Row>
					<Col id="userSettingsNavCol">
						<UserSettingsNav />
					</Col>
					<Col id="userProfileFormCol">
						<UserProfileForm />
					</Col>
					<Col id="UserAccountNavCol">
						<UserAccountNav />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Settings;
