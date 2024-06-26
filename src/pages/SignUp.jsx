import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IoPersonCircleOutline } from "react-icons/io5";
import authSignUpWithEmailAndPassword from "../services/authSignUpWithEmailAndPassword";
import authSignUpWithGoogle from "../services/authSignUpWithGoogle";
import { FcGoogle } from "react-icons/fc";
import SignUpStravaPic from "../images/SignUpStravaPic.jpg";
import "../styles/LogInSignUp.css";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSignUp = async (e) => {
		e.preventDefault();
		const user = await authSignUpWithEmailAndPassword(email, password);
		console.log("The user is being Signed Up: ", user);

		if (user && !user.error) {
			//Successfully signed up
			navigate("/strava-app/home");
		} else {
			//Failed to sign up
			console.error(user.error);
		}
	};

	const handleGoogleSignUp = async () => {
		const user = await authSignUpWithGoogle();
		if (user && !user.error) {
			// Successfully signed up with Google
			navigate("/strava-app/home");
			console.log("Signed up with Google: ", user);
		} else {
			// Handle sign-up error
			console.error("Google sign-up error: ", user.error);
		}
	};

	const handleSignUpAsGuestBtn = () => {
		navigate("/strava-app/home");
	};

	return (
		<div
			className="LogInSignUp"
			style={{
				backgroundImage: `url(${SignUpStravaPic})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div id="SignUpContainer">
				<div id="SignUpWrapper">
					<div className="SignH3UpWrapper">
						<h3>Sign Up For Free</h3>
					</div>
					<div>
						<div>
							<p className="signUpForFreePara">
								Track your progress and reach goals. Join 100 million active
								people on Fortune.
							</p>
						</div>
						<div>
							<Button
								variant="primary"
								id="signUpWithGoogleBtn"
								onClick={handleGoogleSignUp}
							>
								{" "}
								<FcGoogle id="FcGoogle" />
								Sign Up With Google
							</Button>
						</div>
						<div>
							<Button variant="primary" id="signUpAsGuestBtn" onClick={handleSignUpAsGuestBtn}>
								<IoPersonCircleOutline id="IoPersonCircleOutline" />
								Proceed as a Guest
							</Button>
						</div>
						<div className="signUpFormLineBreak">
							<div className="signUpFormLineBreakLeft"></div>
							<span>or</span>
							<div className="signUpFormLineBreakRight"></div>
						</div>
					</div>
					<Form onSubmit={handleSignUp}>
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
								placeholder="Create a Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<p className="text-muted" id="signUpFormMutedTextPw">
								Passwords must contain at least 8 characters.
							</p>
						</Form.Group>
						<Button variant="primary" type="submit" id="signUpFormSubmitBtn">
							Sign Up
						</Button>
						<p className="text-muted" id="signUpFormMutedText">
							By signing up for Fortune, you agree to the Terms of Service. View
							our Privacy Policy.
						</p>
					</Form>
					<div>
						<p>
							Already a Member?{" "}
							<Link
								to={"/strava-app/login"}
								className="signUpFormFooterLogInLink"
							>
								Log in
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
