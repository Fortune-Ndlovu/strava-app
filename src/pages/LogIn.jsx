import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import authSignInWithEmailAndPassword from "../services/signInWithEmailAndPassword";
import "../styles/LogInSignUp.css";

const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => { 
		e.preventDefault();
		const user = await authSignInWithEmailAndPassword(email, password);
		console.log(user);
	}

	return (
		<div className='LogInSignUp'>
			<h1>LogIn</h1>
			<Form onSubmit={handleLogin}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Log In
				</Button>
			</Form>
		</div>
	);
};

export default LogIn;
