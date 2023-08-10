import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import stravaLogo from '../images/strava_logo.svg';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
    const [showDashboardItems, setShowDashboardItems] = useState(false); // state to track hover

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
                            title="Dashboard"
                            id="dashboard-dropdown"
                            onMouseEnter={handleDashboardHover}
                            onMouseLeave={handleDashboardLeave}
                            show={showDashboardItems} // Show items based on state
                        >
                            <NavDropdown.Item href="#activityFeed">Activity Feed</NavDropdown.Item>
                            <NavDropdown.Item href="#mySegments">My Segments</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <div className='dashboard-dropdown-subscription'>
                                <NavDropdown.Item><h6>SUBSCRIPTION</h6></NavDropdown.Item>
                                <NavDropdown.Item href="#myGoals">My Goals</NavDropdown.Item>
                                <NavDropdown.Item href="#Heatmaps">Heatmaps</NavDropdown.Item>
                            </div>
                        </NavDropdown>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#challenges">Challenges</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
