import { React, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import authSignUpWithEmailAndPassword from '../services/authSignUpWithEmailAndPassword';
import "../styles/LogInSignUp.css";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async (e) => { 
		e.preventDefault();
        const user = await authSignUpWithEmailAndPassword(email, password);
		console.log("The user is being Signed Up: ", user);
	}

  return (
   <div className='LogInSignUp'>
			<h1>Sign Up</h1>
		  <Form onSubmit={handleSignUp}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
				  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Sign Up
				</Button>
			</Form>
		</div>
  )
}

export default SignUp