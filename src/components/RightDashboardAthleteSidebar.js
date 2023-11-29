import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function RightDashboardAthleteSidebar({isLoading}) {
    return (
        <div> {
            isLoading ? (
                <p>LOADING...</p>
            ) : (
                <div>
                    <Card>
                        <Card.Header>Challenges</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Join a run or cycling Challenge to stay on top of your game, earn new achievements and see how you stack up.
                                <Button variant="outline-primary">View All Challenges</Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Your Clubs</h5>
                                <Button variant="outline-primary">View All Challenges</Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Find Your Friends</h5>Connect with your friends already on Strava or invite your training buddy to be part of the action!<Button variant="outline-primary">View All Challenges</Button>
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
                </div>
            )
        } </div>
    );
}

RightDashboardAthleteSidebar.propTypes = {
    athlete: PropTypes.shape(
        {
            firstname: PropTypes.string,
            lastname: PropTypes.string,
            bio: PropTypes.string,
            city: PropTypes.string,
            // Add other properties as needed
        }
    ).isRequired,
    activities: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default RightDashboardAthleteSidebar;
