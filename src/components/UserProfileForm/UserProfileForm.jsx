import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import UserSettingsNav from "../UserSettingsNav/UserSettingsNav";

const UserProfileForm = () => {
	return (
		<div>
			{/* <UserSettingsNav /> */}
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Current Photo</Form.Label>
                    <input
                        className="form-control"
							id="imageInput"
							type="file"
							// onChange={handleImageChange} 
						/>
                </Form.Group>
                
                <Form.Group className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Gender</Form.Label>
					<Form.Control type="text" placeholder="Enter your gender" />
                </Form.Group>
                
                <Form.Group className="mb-3">
					<Form.Label>Location</Form.Label>
					<Form.Control type="text" placeholder="Enter your location" />
                </Form.Group>
                
                <Form.Group className="mb-3">
					<Form.Label>Primary Club</Form.Label>
					<Form.Control type="text" placeholder="Enter your primary club" />
                </Form.Group>

                <Form.Group className="mb-3">
					<Form.Label>Weight</Form.Label>
					<Form.Control type="text" placeholder="Enter your weight" />
                </Form.Group>

                <Form.Group className="mb-3">
					<Form.Label>Profile Bio</Form.Label>
					<Form.Control type="text" placeholder="Enter your profile bio" />
                </Form.Group>
                
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default UserProfileForm;
