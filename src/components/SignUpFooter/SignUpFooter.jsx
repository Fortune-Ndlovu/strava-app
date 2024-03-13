import React from "react";
import Navbar from "react-bootstrap/Navbar";
import stravaLogoFooter from "../../images/signUp-strava-logo.png";
const SignUpFooter = () => {
	return (
		<div>
			<footer className="footer">
				<div className="main-footer">
					<div className="container footerMaxWidth">
						<div className="row">
							<div className="col-md-2">
								<Navbar.Brand
									title="Return to the Strava home page"
									href="#home"
									id="footer-strava-logo"
								>
									<img
										src={stravaLogoFooter}
										id="strava-logo-footer"
										alt="Company brand logo that simply says strava."
										width={200}
									/>
								</Navbar.Brand>
								<p>&copy; 2023 Strava</p>
								{/* You can replace this with the Strava logo */}{" "}
							</div>
							<div className="col-md-2">
								<h5>About</h5>
								<ul className="list-unstyled">
									<li>
										<a href="/about">About</a>
									</li>
									<li>
										<a href="/features">Features</a>
									</li>
									<li>
										<a href="/mobile">Mobile</a>
									</li>
									<li>
										<a href="/subscribe?cta=subscription&amp;element=nav&amp;source=global_footer">
											Subscription
										</a>
									</li>
									<li>
										<a href="/student?origin=global_footer">Student Discount</a>
									</li>
									<li>
										<a href="/legal/privacy">Privacy Policy</a>
									</li>
									<li>
										<a href="#home">Do Not Share My Personal Information</a>
									</li>
									<li>
										<a href="/legal/terms">Terms and Conditions</a>
									</li>
									<li>
										<a href="https://support.strava.com/hc/en-us/articles/216917717-About-Strava-Maps">
											About Our Maps
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<h5>Explore</h5>
								<ul className="list-unstyled">
									<li>
										<a href="/routes/hiking/usa">Routes</a>
									</li>
									<li>
										<a href="/events/paris-marathon">Paris 2023 Marathon</a>
									</li>
									<li>
										<a href="/events/boston-marathon">Boston 2023 Marathon</a>
									</li>
									<li>
										<a href="/events/london-marathon">London 2023 Marathon</a>
									</li>
									<li>
										<a href="/events/nyc-marathon">NYC 2023 Marathon</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<h5>Follow</h5>
								<ul className="list-unstyled">
									<li>
										<a href="#home">Facebook</a>
									</li>
									<li>
										<a href="#home">Instagram</a>
									</li>
									<li>
										<a href="#home">Twitter</a>
									</li>
									<li>
										<a href="#home">YouTube</a>
									</li>
									<li>
										<a href="#home">LinkedIn</a>
									</li>
									<li>
										<a href="https://stories.strava.com">Stories</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<h5>Help</h5>
								<ul className="list-unstyled">
									<li>
										<a href="https://strava.zendesk.com/home">Strava Support</a>
									</li>
								</ul>
							</div>
							<div className="col-md-2">
								<h5>More</h5>
								<ul className="list-unstyled">
									<li>
										<a href="/careers">Careers</a>
									</li>
									<li>
										<a href="https://press.strava.com">Press</a>
									</li>
									<li>
										<a href="https://business.strava.com?utm_source=footer&amp;utm_medium=referral">
											Business
										</a>
									</li>
									<li>
										<a href="http://labs.strava.com/developers">Developers</a>
									</li>
									<li>
										<a href="http://labs.strava.com">Labs</a>
									</li>
									<li>
										<a href="/community-standards">
											Strava Community standards
										</a>
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
