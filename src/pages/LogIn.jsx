import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import authSignInWithEmailAndPassword from "../services/authSignInWithEmailAndPassword";
import authSignInWithGoogle  from "../services/authSignInWithGoogle";
import { FcGoogle } from "react-icons/fc";
import { IoPersonCircleOutline } from "react-icons/io5";
import LoginStravaPic from "../images/LoginStravaPic.jpg";
import "../styles/LogInSignUp.css";

const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const user = await authSignInWithEmailAndPassword(email, password);
		if (user && !user.error) {
			navigate("/strava-app/home");
			console.log("The user is being Logged in: ", user);
		} else {
			console.error("The user is not logged in: ", user.error);
		}
	};

	const handleGoogleLogin = async () => {
    const user = await authSignInWithGoogle();
    if (user && !user.error) {
      navigate("/strava-app/home");
      console.log("Logged in with Google: ", user);
    } else {
      console.error("Google login error: ", user.error);
    }
  };

	const handleSignUpAsGuestBtn = () => { 
		navigate("/strava-app/home");
	}

	return (
		<div
			className="LogInSignUp"
			style={{
				backgroundImage: `url(${LoginStravaPic})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div id="SignUpContainer">
				<div id="SignUpWrapper">
					<div className="SignH3UpWrapper">
						<h3>LogIn</h3>
					</div>
					<Button variant="primary" id="signUpWithGoogleBtn" onClick={handleGoogleLogin}>
						{" "}
						<FcGoogle id="FcGoogle" />
						Log in using Google
					</Button>

					<Button variant="primary" id="signUpAsGuestBtn" type="button" onClick={handleSignUpAsGuestBtn}>
						<IoPersonCircleOutline id="IoPersonCircleOutline" />
						Proceed as a Guest
					</Button>

					<div>
						<p className="orLogInWithEmailPara">Or log in with email</p>
					</div>
					<Form onSubmit={handleLogin} className="logInForm">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Control
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								id="loginFormPasswordInput"
							/>
							<Form.Check type="checkbox" label="Remember me" />
						</Form.Group>
						<Button variant="primary" type="submit" id="signUpFormSubmitBtn">
							Log In
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
