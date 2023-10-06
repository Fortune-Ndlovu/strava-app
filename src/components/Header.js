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
    const [showSearch, setShowSearch] = useState(window.innerWidth <= 992); // Initially show on smaller screens.
    const [isHamburger, setIsHamburger] = useState(window.innerWidth <= 992); // Initially show on smaller screens.
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Responsible for updating the isHamburger state based on the window width.
    const handleResize = () => {
        setIsHamburger(window.innerWidth <= 992);
    }

     // Listen for window resize events.
    useEffect(() => {
        // if the hamburger is true that means we can show the navigation dropdowns.
        setShowDashboardItems(isHamburger);
        setTrainingItems(isHamburger);
        setExploreItems(isHamburger);
        setUserAvatar(isHamburger);
        setUploadButton(isHamburger);
         
        // When the window is resized the handleResize func will be called.
        window.addEventListener('resize', handleResize);
        return () => {
            // Removing the resized handleResize func when the useEffect Hook is runs again to prevent unnecessary function calls.
            window.removeEventListener('resize', handleResize);
        };
         
        // The useEffect will be re-executed whenever the isHamburger changes.
    }, [isHamburger]);
    
    // Setting the dropdowns to be toggled based on their previous state.
     const toggleDropdownVisibility = (showStateSetter) => {
        return () => {
            showStateSetter((prevShowState) => !prevShowState);
        };
     };
    
    // Wether the navigation items I mouse clicked or tabbed toggle their dropdown menus.
    const handleDashboardDropdownToggle = toggleDropdownVisibility(setShowDashboardItems);
    const handleTrainingDropdownToggle = toggleDropdownVisibility(setTrainingItems);
    const handleExploreDropdownToggle = toggleDropdownVisibility(setExploreItems);
    const handleUserAvatarDropdownToggle = toggleDropdownVisibility(setUserAvatar);
    const handleUserUploadDropdownToggle = toggleDropdownVisibility(setUploadButton);

    const handleDropdownIconKeyPress = (event, toggleDropdown) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            toggleDropdown();
        }
    };
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand title="Return to the Strava home page" href="#home" className="mr-auto">
                    <img src={stravaLogo} id="strava-logo" alt="Company brand logo that simply says strava." width={110} height={55}/>
                </Navbar.Brand>

                {/* Toggling the menu state when clicked. When we first click on the hamburger icon,
                    !isMenuOpen will be true because !false is true. So,
                    the onClick function will set isMenuOpen to true. After the first click, isMenuOpen is now true. vice-versa. */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {/* Changing the hamburger icon to an X when the menu is open. */}
                    <div className={isMenuOpen ? 'menu-icon menu-icon-close' : 'menu-icon'} id="xHamburger">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {/* When we are on both small and large view-ports we want to show the search component. */}
                        {(showSearch || isHamburger) && <SearchBar onCancel={() => setShowSearch(false)} />}
                        
                        {/* When the hamburger and the search component are not showing, then show the search icon. */}
                        {(!isHamburger && !showSearch) && (
                            <Nav.Link title="Search" href="#home" onClick={() => setShowSearch(true)}>
                                <FiSearch className="open-search-icon" />
                            </Nav.Link>
                        )}

                        {/* When the hamburger is true or when the search component is false then show the navigation dropdowns. */}
                        {(isHamburger || !showSearch) && (
                            <React.Fragment>
                                <NavDropdown
                                    id="dashboardDropdown"
                                    // When we hover over the navigation Dashboard, dropdown items show the dropdown and when we leave do not show them.
                                    onMouseEnter={() => setShowDashboardItems(true)}
                                    onMouseLeave={() => setShowDashboardItems(false)}
                                    show={showDashboardItems}
                                    title={
                                        <div className="d-flex align-items-center">
                                            Dashboard{' '}
                                            <button
                                                title="Expand dashboard menu"
                                                onClick={handleDashboardDropdownToggle}
                                                onKeyDown={(event) => handleDropdownIconKeyPress(event, handleDashboardDropdownToggle)}
                                                className="icon-button"
                                                aria-label="Toggle Dashboard Dropdown"
                                                tabIndex={0}
                                            >
                                                <RiArrowDropDownLine className="dashboard-dropdown-icon" />
                                            </button>
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
                                            Training{' '}
                                            <button
                                                title="Expand training menu"
                                                onClick={handleTrainingDropdownToggle}
                                                onKeyDown={(event) => handleDropdownIconKeyPress(event, handleTrainingDropdownToggle)}
                                                className="icon-button"
                                                aria-label="Toggle Training Dropdown"
                                                tabIndex={0}
                                            >
                                                <RiArrowDropDownLine className="training-dropdown-icon" />
                                            </button>
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
                                            Explore{' '}
                                            <button
                                                title="Expand explore menu"
                                                onClick={handleExploreDropdownToggle}
                                                onKeyDown={(event) => handleDropdownIconKeyPress(event, handleExploreDropdownToggle)}
                                                className="icon-button"
                                                aria-label="Toggle Explore Dropdown"
                                                tabIndex={0}
                                            >
                                                <RiArrowDropDownLine className="explore-dropdown-icon" />
                                            </button>
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
                    
                    {/* Whenever we are in smaller screens align items at the start and whenever we are on large screens align items at the centre. */}
                    <Nav className={`d-flex ${isHamburger ? 'align-items-start' : 'align-items-center'}`}>
                        <div className="start-trial-btn">
                            <Nav.Link href="#home" className="experiment btn btn-sm btn-primary d-flex align-items-center">Start Trial</Nav.Link>
                         </div>
                        <div className="notifications-wrapper">
                            <Nav.Link title="0 new notifications" href="#challenges" id="notifications" className="d-flex align-items-center"> <MdOutlineNotificationsNone className="mdOutlineNotificationsNone-icon"/> </Nav.Link>
                        </div>
                        <div className="flex-fill" id="fullWidthUserAvatar">
                            <NavDropdown
                                onMouseEnter={() => setUserAvatar(true)}
                                onMouseLeave={() => setUserAvatar(false)}
                                show={showUserAvatar}
                                id="userAvatar"
                                className="flipped-dropdown-horizontal"
                                title={
                                    // Whenever we hover over the icon we changes is color to orange.
                                    <div className={`d-flex align-items-center ${showUserAvatar ? 'hovered' : ''}`}>
                                        <button
                                                title="Expand profile menu"
                                                onClick={handleUserAvatarDropdownToggle}
                                                onKeyDown={(event) => handleDropdownIconKeyPress(event, handleUserAvatarDropdownToggle)}
                                                className="icon-button"
                                                aria-label="Toggle user avatar dropdown"
                                                tabIndex={0}
                                        >
                                            <RiArrowDropDownLine className="explore-dropdown-icon" /> <BiSolidUserCircle className="biSolidUserCircle-icon" />
                                        </button>
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
                                    <div className="d-flex align-items-center">
                                        {/* Whenever we hover over the icon we want to change it to another icon. */}
                                        {showUploadButton ? (
                                            <button
                                                type="button"
                                                onClick={handleUserUploadDropdownToggle}
                                                onKeyDown={(event) => handleDropdownIconKeyPress(event, handleUserUploadDropdownToggle)}
                                                className="icon-button"
                                                aria-label="Toggle user upload dropdown"
                                                tabIndex={0}
                                            >
                                                <BsPlusCircleFill />
                                            </button>
                                            ):(
                                            <button
                                                type="button"
                                                onClick={handleUserUploadDropdownToggle}
                                                onKeyDown={(event) => handleDropdownIconKeyPress(event, handleUserUploadDropdownToggle)}
                                                className="icon-button"
                                                aria-label="Toggle user upload dropdown"
                                                tabIndex={0}
                                            >
                                                <BsPlusCircle />
                                            </button>
                                            )
                                        }
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
