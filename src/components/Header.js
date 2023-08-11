import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import stravaLogo from '../images/strava_logo.svg';
import { FiSearch } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Header = () => {
    const [showDashboardItems, setShowDashboardItems] = useState(false);

    const handleDashboardHover = () => {
        setShowDashboardItems(true);
    };

    const handleDashboardLeave = () => {
        setShowDashboardItems(false);
    };

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
                            id="dashboard-dropdown"
                            onMouseEnter={handleDashboardHover}
                            onMouseLeave={handleDashboardLeave}
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
                            onMouseEnter={handleDashboardHover}
                            onMouseLeave={handleDashboardLeave}
                            show={showDashboardItems}
                            id="dashboard-dropdown"
                            title={<div className="d-flex align-items-center">
                            Training <RiArrowDropDownLine className="dashboard-dropdown-icon" />
                        </div>}
                        >

                            <NavDropdown.Item href="#action/3.1">Training Calendar</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                My Activities
                            </NavDropdown.Item>
                            <div className='dashboard-dropdown-subscription'>
                                <h6>SUBSCRIPTION</h6>
                                <NavDropdown.Item href="#myGoals">Training Log</NavDropdown.Item>
                                <NavDropdown.Item href="#Heatmaps">Training Plans</NavDropdown.Item>
                                <NavDropdown.Item href="#Heatmaps">Power Curve</NavDropdown.Item>
                                <NavDropdown.Item href="#Heatmaps">Fitness & Freshness</NavDropdown.Item>
                            </div>
                        </NavDropdown>

                        <Nav.Link href="#challenges">Challenges</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
