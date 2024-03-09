import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/LogInSignUp.css";

const SignUp = () => {
  return (
   <div id='LogInSignUp'>
			<h1>Sign Up</h1>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Sign Up
				</Button>
			</Form>
		</div>
  )
}

export default SignUp