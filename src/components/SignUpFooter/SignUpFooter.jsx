import React from "react";
import {  Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import getItOnGooglePlayLogo from "../../images/Get_it_on_Google_Play_Logo.png";
import stravaLogoFooter from "../../images/strava_logo.svg";
import DownloadOnTheAppleStore from "../../images/Download_on_the_App_Store_logo.png";
import "./SignUpFooter.css";
const SignUpFooter = () => {
	return (
		<div>
			<footer className="footer">
				<div className="main-footer">
					<div className="container footerMaxWidth">
						<div className="row">
							<div className="col-md-2">
								<ul className="list-unstyled">
									<li>
										<img
											src={stravaLogoFooter}
											id="strava-logo-footer"
											alt="Company brand logo that simply says strava."
											width={200}
										/>
									</li>
									<li>
										<p>
											Strava protects your data. Read more in our <a href="#Privacy Policy">Privacy Policy.</a>
										</p>
									</li>
									<div className="signUpFooterIcons">

									<li>
										<a href="#boston-marathon">
											<FaTwitter />
										</a>
									</li>
									<li>
										<a href="#london-marathon">
											<FaYoutube />
										</a>
									</li>
									<li>
										<a href="#nyc-marathon">
											<CiInstagram />
										</a>
									</li>
									<li>
										<a href="#hiking/usa">
											<FaLinkedin />
										</a>
									</li>
									<li>
										<a href="#paris-marathon">
											<FaFacebookSquare />
										</a>
									</li>
									</div>
								</ul>
							</div>
							<div className="col-md-2">
								<ul className="list-unstyled">
									<li>
										<a href="#boston-marathon">Features</a>
									</li>
									<li>
										<a href="#london-marathon">Subscription</a>
									</li>
									<li>
										<a href="#nyc-marathon">Student Discount</a>
									</li>	<li>
										<a href="#nyc-marathon">About</a>
									</li>	<li>
										<a href="#nyc-marathon">Careers</a>
									</li>	<li>
										<a href="#nyc-marathon">Press</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<ul className="list-unstyled">
									<li>
										<a href="#home">Routes</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<ul className="list-unstyled">
									<li>
										<a href="#what's new">What's New</a>
									</li>
									<li>

										<a href="#stories">Stories</a>
									</li>
									<li>
									<a href="#home">Support</a>
									</li>	
									<li>

									<a href="#home">Business</a>
									</li>
									<li>

										<a href="#home">Partner Center</a>
									</li>
									<li>
										<a href="#home">Terms</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<ul className="list-unstyled">
									<li>
										<a href="#privacy">Privacy</a>
									</li>
									<li>
										<a href="#information">Do Not Share My Personal Information</a>
									</li>
									<li>
										<Link to={"/strava-app/login"} className="signUpFooterLink">
											Log In
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<ul className="list-unstyled">
									<li>
										<a href="#DownloadOnTheAppleStore"><img src={DownloadOnTheAppleStore} alt="Apple Store Logo" height={35}/></a>
									</li>
									<br></br>
									<li>
										<a href="#getItOnGooglePlayLogo"><img src={getItOnGooglePlayLogo} alt="Google Play Logo" height={35}/></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default SignUpFooter;
