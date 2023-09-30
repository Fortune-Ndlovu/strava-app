import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiSearch } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineNotificationsNone, MdMonitorHeart } from 'react-icons/md';
import { BiSolidUserCircle } from 'react-icons/bi';
import { BsPlusCircle, BsPlusCircleFill, BsArrowUpCircle, BsLayoutTextWindow } from 'react-icons/bs';
import { TbRoute } from 'react-icons/tb';
import stravaLogo from '../images/strava_logo.svg';

const Header = () => {
    const [showDashboardItems, setShowDashboardItems] = useState(false);
    const [showTrainingItems, setTrainingItems] = useState(false);
    const [showExploreItems, setExploreItems] = useState(false);
    const [showUserAvatar, setUserAvatar] = useState(false);
    const [showUploadButton, setUploadButton] = useState(false);
    const [showSearch, setShowSearch] = useState(window.innerWidth <= 992); // Initially show on smaller screens
    const [isHamburger, setIsHamburger] = useState(window.innerWidth <= 992); // Initially show on smaller screens
    
    const handleResize = () => {
        setIsHamburger(window.innerWidth <= 992);
    }

     // Listen for window resize events
     useEffect(() => {
        // if the hamburger is true that means we can show the navigation dropdowns
        setShowDashboardItems(isHamburger);
        setTrainingItems(isHamburger);
        setExploreItems(isHamburger);
        setUserAvatar(isHamburger);
        setUploadButton(isHamburger);
         
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
         
    }, [isHamburger]);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home" className="mr-auto">
                    <img src={stravaLogo} id="strava-logo" alt="Company brand logo that simply says strava." width={110} height={55}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    {(showSearch || isHamburger) && <SearchBar onCancel={() => setShowSearch(false)} />}
                        {(!isHamburger && !showSearch) && (
                            <Nav.Link href="#home" onClick={() => setShowSearch(true)}>
                                <FiSearch className="open-search-icon" />
                            </Nav.Link>
                        )}
                        {(isHamburger || !showSearch) && (
                            <React.Fragment>
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
                              
                                    <div className="dropdownEffect">
                                        <NavDropdown.Item href="#activityFeed">Activity Feed</NavDropdown.Item>
                                        <NavDropdown.Item href="#mySegments">My Segments</NavDropdown.Item>
                                        <div className="dashboard-dropdown-subscription">
                                            <h6>SUBSCRIPTION</h6>
                                            <NavDropdown.Item href="#myGoals">My Goals</NavDropdown.Item>
                                            <NavDropdown.Item href="#Heatmaps">Heatmaps</NavDropdown.Item>
                                        </div>
                                    </div>
                                </NavDropdown>
                                        
                                <NavDropdown
                                    onMouseEnter={() => setTrainingItems(true)}
                                    onMouseLeave={() => setTrainingItems(false)}
                                    show={showTrainingItems}
                                    id="trainingDropdown"
                                    title={
                                        <div className="d-flex align-items-center nav-title">
                                            Training <RiArrowDropDownLine className="training-dropdown-icon" />
                                        </div>
                                    }
                                >
                                    <div className="dropdownEffect">
                                        <NavDropdown.Item href="#action/3.1">Training Calendar</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">My Activities</NavDropdown.Item>
                                        <div className="training-dropdown-subscription">
                                            <h6>SUBSCRIPTION</h6>
                                            <NavDropdown.Item href="#trainingLog">Training Log</NavDropdown.Item>
                                            <NavDropdown.Item href="#trainingPlans">Training Plans</NavDropdown.Item>
                                            <NavDropdown.Item href="#powerCurve">Power Curve</NavDropdown.Item>
                                            <NavDropdown.Item href="#fitnessAndFreshness">Fitness & Freshness</NavDropdown.Item>
                                        </div>
                                    </div>   
                                </NavDropdown>
                            

                                <NavDropdown
                                    onMouseEnter={() => setExploreItems(true)}
                                    onMouseLeave={() => setExploreItems(false)}
                                    show={showExploreItems}
                                    id="exploreDropdown"
                                    title={
                                        <div className="d-flex align-items-center">
                                            Explore <RiArrowDropDownLine className="explore-dropdown-icon" />
                                        </div>
                                    }
                                >
                                    <div className="dropdownEffect">
                                        <NavDropdown.Item href="#action/3.1">Segment Explore</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Segment Search</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Athlete Search</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Clubs</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Apps</NavDropdown.Item>
                                        <div className="explore-dropdown-subscription">
                                            <h6>SUBSCRIPTION</h6>
                                            <NavDropdown.Item href="#trainingLog">Create a Route</NavDropdown.Item>
                                            <NavDropdown.Item href="#trainingPlans">Subscriber Perks</NavDropdown.Item>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <Nav.Link href="#challenges" id="challengesLink" className="d-flex align-items-center">Challenges</Nav.Link>
                            </React.Fragment>
                        )}
                     
                    </Nav>
                    
                    <Nav className={`d-flex ${isHamburger ? 'align-items-start' : 'align-items-center'}`}>
                        <div className="start-trial-btn">
                            <Nav.Link href="#home" className="experiment btn btn-sm btn-primary d-flex align-items-center">Start Trial</Nav.Link>
                         </div>
                        <div className="notifications-wrapper">
                            <Nav.Link href="#challenges" id="notifications" className="d-flex align-items-center">  <MdOutlineNotificationsNone className="mdOutlineNotificationsNone-icon"/></Nav.Link>
                        </div>
                        <div className="flex-fill" id="fullWidthUserAvatar">
                            <NavDropdown
                                onMouseEnter={() => setUserAvatar(true)}
                                onMouseLeave={() => setUserAvatar(false)}
                                show={showUserAvatar}
                                id="userAvatar"
                                className="flipped-dropdown-horizontal"
                                title={
                                        <div className={`d-flex align-items-center ${showUserAvatar ? 'hovered' : ''}`}>
                                            <RiArrowDropDownLine className="explore-dropdown-icon" /> <BiSolidUserCircle className="biSolidUserCircle-icon" />
                                        </div>
                                }
                            >
                                <div className="dropdownEffect">
                                    <NavDropdown.Item href="#action/3.1" className="flipped-text">Find Friends</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="flipped-text">My Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="flipped-text">Settings</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="flipped-text">Log Out</NavDropdown.Item>
                                </div>
                            </NavDropdown>
                        </div>
                        <div className="flex-fill" id="fullWidthUserUpload">
                            <NavDropdown
                                onMouseEnter={() => setUploadButton(true)}
                                onMouseLeave={() => setUploadButton(false)}
                                show={showUploadButton}
                                id="userUpload"
                                className="flipped-dropdown-horizontal"
                                title={
                                    <div className="d-flex align-items-center"
                                    >
                                        {showUploadButton ? (<BsPlusCircleFill/> ) : ( <BsPlusCircle/> )}
                                    </div>
                                }
                            >   
                                <div className="dropdownEffect" id="userUploadWrapper">
                                    <NavDropdown.Item href="#action/3.1" className="flipped-text">
                                        <div className="upload-center-wrapper">
                                            <BsArrowUpCircle className="upload-icons"/> Upload activity
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="flipped-text">
                                        <div className="upload-center-wrapper">
                                            <MdMonitorHeart className="upload-icons"/> Add manual Entry
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="flipped-text">
                                        <div className="upload-center-wrapper">
                                            <TbRoute className="upload-icons"/> Create route
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="flipped-text">
                                        <div className="upload-center-wrapper">
                                            <BsLayoutTextWindow className="upload-icons"/> Create post
                                        </div>
                                    </NavDropdown.Item>
                                </div>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
