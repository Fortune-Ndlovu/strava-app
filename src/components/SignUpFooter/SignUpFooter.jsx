import React from "react";
import Navbar from "react-bootstrap/Navbar";
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
										<a href="/events/boston-marathon">
											<FaTwitter />
										</a>
									</li>
									<li>
										<a href="/events/london-marathon">
											<FaYoutube />
										</a>
									</li>
									<li>
										<a href="/events/nyc-marathon">
											<CiInstagram />
										</a>
									</li>
									<li>
										<a href="/routes/hiking/usa">
											<FaLinkedin />
										</a>
									</li>
									<li>
										<a href="/events/paris-marathon">
											<FaFacebookSquare />
										</a>
									</li>
									</div>
								</ul>
							</div>
							<div className="col-md-2">
								<ul className="list-unstyled">
									<li>
										<a href="/events/boston-marathon">Features</a>
									</li>
									<li>
										<a href="/events/london-marathon">Subscription</a>
									</li>
									<li>
										<a href="/events/nyc-marathon">Student Discount</a>
									</li>	<li>
										<a href="/events/nyc-marathon">About</a>
									</li>	<li>
										<a href="/events/nyc-marathon">Careers</a>
									</li>	<li>
										<a href="/events/nyc-marathon">Press</a>
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
										<a href="https://strava.zendesk.com/home">What's New</a>
									</li>
									<li>

										<a href="https://strava.zendesk.com/home">Stories</a>
									</li>
									<li>
									<a href="https://strava.zendesk.com/home">Support</a>
									</li>	
									<li>

									<a href="https://strava.zendesk.com/home">Business</a>
									</li>
									<li>

										<a href="https://strava.zendesk.com/home">Partner Center</a>
									</li>
									<li>
										<a href="https://strava.zendesk.com/home">Terms</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<ul className="list-unstyled">
									<li>
										<a href="/careers">Privacy</a>
									</li>
									<li>
										<a href="https://press.strava.com">Do Not Share My Personal Information</a>
									</li>
									<li>
										<a href="https://business.strava.com?utm_source=footer&amp;utm_medium=referral" className="signUpFooterLink">
											Log In
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<ul className="list-unstyled">
									<li>
										<a href="/DownloadOnTheAppleStore"><img src={DownloadOnTheAppleStore} alt="Apple Store Logo" height={35}/></a>
									</li>
									<br></br>
									<li>
										<a href="/getItOnGooglePlayLogo"><img src={getItOnGooglePlayLogo} alt="Google Play Logo" height={35}/></a>
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
