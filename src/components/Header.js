import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiSearch } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BiSolidUserCircle } from 'react-icons/bi';
import stravaLogo from '../images/strava_logo.svg';

const Header = () => {
    const [showDashboardItems, setShowDashboardItems] = useState(false);
    const [showTrainingItems, setTrainingItems] = useState(false);
    const [showExploreItems, setExploreItems] = useState(false);
    const [showuserAvatar, setuserAvatar] = useState(false);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={stravaLogo} alt='Company brand logo that simply says strava.'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><FiSearch className='open-search-icon' /></Nav.Link>

                        <NavDropdown
                            id="dashboardDropdown"
                            onMouseEnter={() => setShowDashboardItems(true)}
                            onMouseLeave={() => setShowDashboardItems(false)}
                            show={showDashboardItems}
                            title={
                                <div className="d-flex align-items-center">
                                    Dashboard <RiArrowDropDownLine className="dashboard-dropdown-icon" />
                                </div>
                            }
                        >
                            <NavDropdown.Item href="#activityFeed">Activity Feed</NavDropdown.Item>
                            <NavDropdown.Item href="#mySegments">My Segments</NavDropdown.Item>
                            <div className='dashboard-dropdown-subscription'>
                                <h6>SUBSCRIPTION</h6>
                                <NavDropdown.Item href="#myGoals">My Goals</NavDropdown.Item>
                                <NavDropdown.Item href="#Heatmaps">Heatmaps</NavDropdown.Item>
                            </div>
                        </NavDropdown>

                        <NavDropdown
                            onMouseEnter={() => setTrainingItems(true)}
                            onMouseLeave={() => setTrainingItems(false)}
                            show={showTrainingItems}
                            id="trainingDropdown"
                            title={<div className="d-flex align-items-center">
                            Training <RiArrowDropDownLine className="training-dropdown-icon" />
                        </div>}
                        >

                            <NavDropdown.Item href="#action/3.1">Training Calendar</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">My Activities</NavDropdown.Item>
                            <div className='training-dropdown-subscription'>
                                <h6>SUBSCRIPTION</h6>
                                <NavDropdown.Item href="#trainingLog">Training Log</NavDropdown.Item>
                                <NavDropdown.Item href="#trainingPlans">Training Plans</NavDropdown.Item>
                                <NavDropdown.Item href="#powerCurve">Power Curve</NavDropdown.Item>
                                <NavDropdown.Item href="#fitnessAndFreshness">Fitness & Freshness</NavDropdown.Item>
                            </div>
                        </NavDropdown>

                        <NavDropdown
                            onMouseEnter={() => setExploreItems(true)}
                            onMouseLeave={() => setExploreItems(false)}
                            show={showExploreItems}
                            id="exploreDropdown"
                            title={<div className="d-flex align-items-center">
                            Explore <RiArrowDropDownLine className="explore-dropdown-icon" />
                        </div>}
                        >
                            <NavDropdown.Item href="#action/3.1">Segment Explore</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Segment Search</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Athlete Search</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Clubs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Apps</NavDropdown.Item>
                            <div className='explore-dropdown-subscription'>
                                <h6>SUBSCRIPTION</h6>
                                <NavDropdown.Item href="#trainingLog">Create a Route</NavDropdown.Item>
                                <NavDropdown.Item href="#trainingPlans">Subscriber Perks</NavDropdown.Item>
                            </div>
                        </NavDropdown>

                        <Nav.Link href="#challenges" id="exploreDropdown" className="d-flex align-items-center">Challenges</Nav.Link>
                    </Nav>
                    <Nav className="me-auto d-flex align-items-center">
                        <div>
                            <Nav.Link href="#home" className="experiment btn btn-sm btn-primary d-flex align-items-center">Start Trial</Nav.Link>
                         </div>
                        <div>
                            <Nav.Link href="#challenges" id="notifications" className="d-flex align-items-center">  <MdOutlineNotificationsNone /></Nav.Link>
                        </div>
                        <div>

                            <NavDropdown
                                onMouseEnter={() => setuserAvatar(true)}
                                onMouseLeave={() => setuserAvatar(false)}
                                show={showuserAvatar}
                                id="userAvatar"
                                title={<div className='d-flex align-items-center'> <BiSolidUserCircle /> <RiArrowDropDownLine className="explore-dropdown-icon" /> </div>}
                            >
                                <NavDropdown.Item href="#action/3.1">Find Friends</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">My Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>

                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
