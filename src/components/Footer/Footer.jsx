import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { RiArrowDropDownLine } from 'react-icons/ri';
import stravaLogoFooter from '../../images/stravaLogoFooter.svg'

const Footer = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('English (US)');

    const handleLanguageChange = (value) => {
      setSelectedLanguage(value);
    };

    return (
        <footer className="footer">
            <div id="promos-footer">
                <div className="container footerMaxWidth">
                    <div className="row">
                        <div className="col-md-4 promo">
                            <h4>Your Recent Activities</h4>
                            <p className="light">No recent activities found</p>
                            <a href="#home" className="promo-link">Upload an activity</a>
                        </div>
                        <div className="col-md-4 promo">
                            <h4 className="strava-stories-heading">Strava Stories</h4>
                            <p className="strava-stories-para">With athlete profiles, training tips and advice, and the latest product updates, <a href="home" className="strava-stories-link"> Strava Stories</a> is the place to discover the latest content from Strava.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-footer">
                <div className="container footerMaxWidth">
                    <div className="row">
                        <div className="col-md-2">
                            <Navbar.Brand title="Return to the Strava home page" href="#home" id="footer-strava-logo">
                                <img src={stravaLogoFooter}
                                    id="strava-logo-footer"
                                    alt="Company brand logo that simply says strava."
                                    width={150}
                                    height={95}/>
                            </Navbar.Brand>
                            <p>&copy; 2023 Strava</p>
                            {/* You can replace this with the Strava logo */} </div>
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
                                    <a href="/subscribe?cta=subscription&amp;element=nav&amp;source=global_footer">Subscription</a>
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
                                    <a href="https://support.strava.com/hc/en-us/articles/216917717-About-Strava-Maps">About Our Maps</a>
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
                                    <a href="https://business.strava.com?utm_source=footer&amp;utm_medium=referral">Business</a>
                                </li>
                                <li>
                                    <a href="http://labs.strava.com/developers">Developers</a>
                                </li>
                                <li>
                                    <a href="http://labs.strava.com">Labs</a>
                                </li>
                                <li>
                                    <a href="/community-standards">Strava Community standards</a>
                                </li>
                                {/* Render the language dropdown when the button is clicked */}
                                <li>
                                    <Dropdown drop="up" id="dropdownUp">
                                        <Dropdown.Toggle variant="success" id="languages-select">
                                                    {selectedLanguage}
                                                    <RiArrowDropDownLine className="dropdownUp-icon"/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu id="module-btn-list-dropdown">
                                            <Dropdown.Item href="#/action-1" onClick={() => handleLanguageChange('English (US)')} value="English (US)">English (US)</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1" onClick={() => handleLanguageChange('British English')} value="British English">British English</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('español')} value="español">español</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('español latinoamericano')} value="español latinoamericano">Deutsch</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('français')} value="français">français</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('italiano')} value="italiano">italiano</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('Nederlands')} value="Nederlands">Nederlands</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('português')} value="português">português</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('português do Brasil')} value="português do Brasil">português do Brasil</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('русский')} value="русский">русский</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('日本語')} value="日本語">日本語</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('简体中文')} value="简体中文">简体中文</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" onClick={() => handleLanguageChange('繁體中文')} value="繁體中文">繁體中文</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
