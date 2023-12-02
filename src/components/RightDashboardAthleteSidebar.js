import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import viking_marathon_image from '../images/viking_marathon_image.jpg';
import wit_arena from '../images/wit_arena.png';

function RightDashboardAthleteSidebar() {
    return (<div>
        <Card>
            <Card.Header className="challenges-header-wrapper">
            <div className="challengesIcon-wrapper">
                <div className="challengesIcon">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28" alt="Challenges Icon"><g fill=""><path d="M24 .36L0 13.12v21.76l24 12.76 24-12.76V13.12zM2 32.6V14.32L24 2.63l22 11.69v18.26l-16.38-8.71L6.6 36.13l-3.48-1.86L13 29.02v-2.26zm22 12.78L8.72 37.26l20.9-11.13 15.29 8.13z"></path><path d="M21 22.51l-4 2.12v2.27l4-2.13zm8-4.25l-4 2.12v2.27l4-2.13z"></path></g></svg>       
                </div>
            </div>
            <div className="challenges-wrapper">
                <h4>Challenges</h4>
                <p>
                    Join a run or cycling Challenge to stay on top of your game, earn new achievements and see how you stack up.
                </p>
                <Button variant="outline-primary" className="view-all-challenges-btn">View All Challenges</Button>
            </div>
            </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h5 className="your-goals-heading">Your Clubs</h5>
                    <div className="your-goals-image-wrapper">
                        <div className="viking-marathon-image-wrapper">
                            <Card.Img variant="top"
                            src={viking_marathon_image}
                            className="mx-auto d-block"
                                id="vikingMarathonImg" />
                        </div>
                        <div className="wit-arena-image-wrapper">
                            <Card.Img variant="top"
                            src={wit_arena}
                            className="mx-auto d-block"
                            id="witArenaImg"/>
                        </div>
                    </div>
                    <Button variant="outline-primary" className="view-all-clubs-btn">View All Clubs</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="find-FriendsIcon-wrapper">
                        <div className="find-FriendsIcon">
                            <svg className="friendsIcon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28"><g fill=""><path d="M10.08 36.31l1.94-3.66A4.999 4.999 0 0116.43 30h15.12a5 5 0 014.41 2.65L40.94 42H9.2l-1.11 2h36.18l-6.54-12.29A6.99 6.99 0 0031.55 28H16.43a6.98 6.98 0 00-6.18 3.72L3.73 44H5.8z"></path><path d="M0 0v48h48V0zm46 46H2V2h44z"></path><path d="M24 26a8.5 8.5 0 100-17 8.5 8.5 0 000 17zm0-15a6.5 6.5 0 11-6.5 6.5A6.513 6.513 0 0124 11z"></path></g></svg>
                        </div>
                        <div className="find-Friends-wrapper">
                            <h5 className="find-Friends-heading">Find Your Friends</h5>
                            <p>
                                Connect with your friends already on Strava or invite your training buddy to be part of the action!
                            </p>
                            <div className="view-all-friends-btn-wrapper">
                                <Button variant="outline-primary" className="view-all-friends-btn">Find and Invite Your Friends</Button>
                            </div>    
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <ul className="modulelist">
                        <li>
                            <a href="#home">Community Hub</a>
                        </li>
                        <li>
                            <a href="#home">Support</a>
                        </li>
                        <li>
                            <a href="#home">Subscription</a>
                        </li>
                        <li>
                            <a href="#home">Student Discount</a>
                        </li>
                        <li>
                            <a href="#home">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="#home">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#home" className="complianceBtn">Do Not Share My Personal Information</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <select name="languages" id="languages-select">
                                <option value="English (US)">English (US)</option>
                                <option value="British English">British English</option>
                                <option value="Deutsch">Deutsch</option>
                                <option value="English (US)">English (US)</option>
                                <option value="español">español</option>
                                <option value="español latinoamericano">español latinoamericano</option>
                                <option value="français">français</option>
                                <option value="italiano">italiano</option>
                                <option value="Nederlands">Nederlands</option>
                                <option value="português">português</option>
                                <option value="português do Brasil">português do Brasil</option>
                                <option value="русский">русский</option>
                                <option value="日本語">日本語</option>
                                <option value="简体中文">简体中文</option>
                                <option value="繁體中文">繁體中文</option>
                            </select>
                        </li>
                        <li>
                            <select name="languages" id="languages-select">
                                <option value="English (US)">English (US)</option>
                                <option value="British English">British English</option>
                                <option value="Deutsch">Deutsch</option>
                                <option value="English (US)">English (US)</option>
                                <option value="español">español</option>
                                <option value="español latinoamericano">español latinoamericano</option>
                                <option value="français">français</option>
                                <option value="italiano">italiano</option>
                                <option value="Nederlands">Nederlands</option>
                                <option value="português">português</option>
                                <option value="português do Brasil">português do Brasil</option>
                                <option value="русский">русский</option>
                                <option value="日本語">日本語</option>
                                <option value="简体中文">简体中文</option>
                                <option value="繁體中文">繁體中文</option>
                            </select>
                        </li>
                        <li>
                            <select name="languages" id="languages-select">
                                <option value="English (US)">English (US)</option>
                                <option value="British English">British English</option>
                                <option value="Deutsch">Deutsch</option>
                                <option value="English (US)">English (US)</option>
                                <option value="español">español</option>
                                <option value="español latinoamericano">español latinoamericano</option>
                                <option value="français">français</option>
                                <option value="italiano">italiano</option>
                                <option value="Nederlands">Nederlands</option>
                                <option value="português">português</option>
                                <option value="português do Brasil">português do Brasil</option>
                                <option value="русский">русский</option>
                                <option value="日本語">日本語</option>
                                <option value="简体中文">简体中文</option>
                                <option value="繁體中文">繁體中文</option>
                            </select>
                        </li>
                    </ul>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </div>);
}

export default RightDashboardAthleteSidebar;
