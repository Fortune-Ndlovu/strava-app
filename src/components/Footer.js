import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <p>&copy; 2023 Strava</p>
                        {/* You can replace this with the Strava logo */}
                    </div>
                    <div className="col-md-2">
                        <h5>About</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about">About</a></li>
                            <li><a href="/features">Features</a></li>
                            <li><a href="/mobile">Mobile</a></li>
                            <li><a href="/subscribe?cta=subscription&amp;element=nav&amp;source=global_footer">Subscription</a></li>
                            <li><a href="/student?origin=global_footer">Student Discount</a></li>
                            <li><a href="/legal/privacy">Privacy Policy</a></li>
                            <li>
                                <a href="#">Do Not Share My Personal Information</a>
                            </li>
                            <li><a href="/legal/terms">Terms and Conditions</a></li>
                            <li><a href="https://support.strava.com/hc/en-us/articles/216917717-About-Strava-Maps">About Our Maps</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Explore</h5>
                        <ul className="list-unstyled">
                            <li><a href="/routes/hiking/usa">Explore</a></li>
                            <li><a href="/events/paris-marathon">Paris 2023 Marathon</a></li>
                            <li><a href="/events/boston-marathon">Boston 2023 Marathon</a></li>
                            <li><a href="/events/london-marathon">London 2023 Marathon</a></li>
                            <li><a href="/events/nyc-marathon">NYC 2023 Marathon</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Follow</h5>
                        <ul className="list-unstyled">
                            <li><a target="_blank" href="http://www.facebook.com/Strava">Facebook</a></li>
                            <li><a target="_blank" href="http://twitter.com/strava">Twitter</a></li>
                            <li><a target="_blank" href="http://instagram.com/strava">Instagram</a></li>
                            <li><a target="_blank" href="http://www.youtube.com/stravainc">YouTube</a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/company/strava-inc./">LinkedIn</a></li>
                            <li><a href="https://stories.strava.com">Stories</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Help</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://strava.zendesk.com/home">Help</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>More</h5>
                        <ul className="list-unstyled">
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="https://press.strava.com">Press</a></li>
                            <li><a href="https://business.strava.com?utm_source=footer&amp;utm_medium=referral">Business</a></li>
                            <li><a href="http://labs.strava.com/developers">Developers</a></li>
                            <li><a href="http://labs.strava.com">Labs</a></li>
                            <li><a href="/community-standards">Strava Community Standards</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
