import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import authSignInWithEmailAndPassword from "../services/authSignInWithEmailAndPassword";
import "../styles/LogInSignUp.css";

const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const user = await authSignInWithEmailAndPassword(email, password);
		if (user && !user.error) {
			navigate("/");
			console.log("The user is being Logged in: ", user);
		} else {
			console.error("The user is not logged in: ", user.error);
		}
	};

	return (
		<div className="LogInSignUp">
			<h1>LogIn</h1>
			<Form onSubmit={handleLogin}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Log In
				</Button>
			</Form>
		</div>
	);
};

export default LogIn;
