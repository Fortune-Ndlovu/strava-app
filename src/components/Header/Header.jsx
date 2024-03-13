import React, { useState, useEffect } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { getCurrentUserId } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNotificationsNone, MdMonitorHeart } from "react-icons/md";
import {
	BsPlusCircle,
	BsPlusCircleFill,
	BsArrowUpCircle,
	BsLayoutTextWindow,
} from "react-icons/bs";
import { TbRoute } from "react-icons/tb";
import SearchBar from "../SearchBar/SearchBar";
import stravaLogo from "../../images/strava_logo.svg";
import dropdown_icon from "../../images/dropdown_icon.svg";
import defaultUserProfile from "../../images/defaultUserProfile.png";
import "./Header.css";

const Header = () => {
	const [showDashboardItems, setShowDashboardItems] = useState(false);
	const [showTrainingItems, setTrainingItems] = useState(false);
	const [showExploreItems, setExploreItems] = useState(false);
	const [showUserAvatar, setUserAvatar] = useState(false);
	const [showUploadButton, setUploadButton] = useState(false);
	const [showSearch, setShowSearch] = useState(window.innerWidth <= 992); // Initially show on smaller screens.
	const [isHamburger, setIsHamburger] = useState(window.innerWidth <= 992); // Initially show on smaller screens.
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [userData, setUserData] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userId = getCurrentUserId();
				if (userId) {
					const usersQuery = query(
						collection(db, "users"),
						where("uid", "==", userId)
					);
					const userSnapshot = await getDocs(usersQuery);
					if (!userSnapshot.empty) {
						const userDataFromFirestore = userSnapshot.docs[0].data();
						setUserData(userDataFromFirestore);
					} else {
						console.error("User document not found for current user.");
					}
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, []);

	// Responsible for updating the isHamburger state based on the window width.
	const handleResize = () => {
		setIsHamburger(window.innerWidth <= 992);
	};

	// Listen for window resize events.
	useEffect(() => {
		// if the hamburger is true that means we can show the navigation dropdowns.
		setShowDashboardItems(isHamburger);
		setTrainingItems(isHamburger);
		setExploreItems(isHamburger);
		setUserAvatar(isHamburger);
		setUploadButton(isHamburger);

		// When the window is resized the handleResize func will be called.
		window.addEventListener("resize", handleResize);
		return () => {
			// Removing the resized handleResize func when the useEffect Hook is runs again to prevent unnecessary function calls.
			window.removeEventListener("resize", handleResize);
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
	const handleDashboardDropdownToggle = toggleDropdownVisibility(
		setShowDashboardItems
	);
	const handleTrainingDropdownToggle =
		toggleDropdownVisibility(setTrainingItems);
	const handleExploreDropdownToggle = toggleDropdownVisibility(setExploreItems);
	const handleUserAvatarDropdownToggle =
		toggleDropdownVisibility(setUserAvatar);
	const handleUserUploadDropdownToggle =
		toggleDropdownVisibility(setUploadButton);

	const handleDropdownIconKeyPress = (event, toggleDropdown) => {
		if (event.key === "Enter") {
			event.preventDefault();
			toggleDropdown();
		}
	};

	// When the screen sizes are large we want to be able to hover over the dropdown
	const handleDropdownHover = (handler, event) => {
		if (!isHamburger) {
			handler(event);
		}
	};

	const handleSignOut = async () => {
		const auth = getAuth();
		try {
			await signOut(auth);
			navigate("/SignUp");
		} catch (error) {
			console.error("Error is signing out: ", error);
		}
	};

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<Link to="/" title="Return to the Strava home page" className="mr-auto">
					<img
						src={stravaLogo}
						id="strava-logo"
						alt="Company brand logo that simply says strava."
						width={110}
						height={55}
					/>
				</Link>

				{/* Toggling the menu state when clicked. When we first click on the hamburger icon,
                    !isMenuOpen will be true because !false is true. So,
                    the onClick function will set isMenuOpen to true. After the first click, isMenuOpen is now true. vice-versa. */}
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{/* Changing the hamburger icon to an X when the menu is open. */}
					<div
						className={isMenuOpen ? "menu-icon menu-icon-close" : "menu-icon"}
						id="xHamburger"
					>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
				</Navbar.Toggle>

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{/* When we are on both small and large view-ports we want to show the search component. */}
						{(showSearch || isHamburger) && (
							<SearchBar onCancel={() => setShowSearch(false)} />
						)}

						{/* When the hamburger and the search component are not showing, then show the search icon. */}
						{!isHamburger && !showSearch && (
							<Nav.Link
								title="Search"
								href="#search"
								onClick={() => setShowSearch(true)}
							>
								<FiSearch className="open-search-icon" />
							</Nav.Link>
						)}

						{/* When the hamburger is true or when the search component is false then show the navigation dropdowns. */}
						{(isHamburger || !showSearch) && (
							<React.Fragment>
								<NavDropdown
									id="dashboardDropdown"
									// When we hover over the navigation Dashboard, dropdown items show the dropdown and when we leave do not show them.
									onMouseEnter={(e) =>
										handleDropdownHover(() => setShowDashboardItems(true), e)
									}
									onMouseLeave={(e) =>
										handleDropdownHover(() => setShowDashboardItems(false), e)
									}
									show={showDashboardItems}
									title={
										<div className="d-flex align-items-center">
											<Link className="navDropdownHeading" to="/">
												Dashboard
											</Link>
											<button
												title="Expand dashboard menu"
												onClick={handleDashboardDropdownToggle}
												onKeyDown={(event) =>
													handleDropdownIconKeyPress(
														event,
														handleDashboardDropdownToggle
													)
												}
												className="icon-button"
												aria-label="Toggle Dashboard Dropdown"
												tabIndex={0}
											>
												<img
													src={dropdown_icon}
													alt="navigation dropdown icon"
													className="dashboard-dropdown-icon"
												/>
											</button>
										</div>
									}
								>
									<div className="dropdownEffect">
										<ul className="dashboard-link-segments">
											<li>
												<Link to="/" id="activity-feed">
													Activity Feed
												</Link>
											</li>
											<li>
												<Link to="/segments">My Segments</Link>
											</li>
										</ul>

										<div className="dashboard-dropdown-subscription">
											<h6>SUBSCRIPTION</h6>
											<ul className="dashboard-goals-heatmaps">
												<li>
													<Link to="/goals">My Goals</Link>
												</li>
												<li>
													<Link to="/heatmaps">Heatmaps</Link>
												</li>
											</ul>
										</div>
									</div>
								</NavDropdown>

								<NavDropdown
									onMouseEnter={(e) =>
										handleDropdownHover(() => setTrainingItems(true), e)
									}
									onMouseLeave={(e) =>
										handleDropdownHover(() => setTrainingItems(false), e)
									}
									show={showTrainingItems}
									id="trainingDropdown"
									title={
										<div className="d-flex align-items-center nav-title">
											<Link className="navDropdownHeading" to="/training">
												Training
											</Link>
											<button
												title="Expand training menu"
												onClick={handleTrainingDropdownToggle}
												onKeyDown={(event) =>
													handleDropdownIconKeyPress(
														event,
														handleTrainingDropdownToggle
													)
												}
												className="icon-button"
												aria-label="Toggle Training Dropdown"
												tabIndex={0}
											>
												<img
													src={dropdown_icon}
													alt="navigation dropdown icon"
													className="dashboard-dropdown-icon"
												/>
											</button>
										</div>
									}
								>
									<div className="dropdownEffect" id="trainingDropdown">
										<ul className="dashboard-link-segments">
											<li>
												<Link to="/trainingCalendar">Training Calendar</Link>
											</li>
											<li>
												<Link to="/activities">My Activities</Link>
											</li>
										</ul>

										<div className="training-dropdown-subscription">
											<h6>SUBSCRIPTION</h6>
											<ul>
												<li>
													<Link to="/trainingLog">Training Log</Link>
												</li>
												<li>
													<Link to="/trainingPlans">Training Plans</Link>
												</li>
												<li>
													<Link to="/powerCurve">Power Curve</Link>
												</li>
												<li>
													<Link to="/fitnessAndFreshness">
														Fitness & Freshness
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</NavDropdown>

								<NavDropdown
									onMouseEnter={(e) =>
										handleDropdownHover(() => setExploreItems(true), e)
									}
									onMouseLeave={(e) =>
										handleDropdownHover(() => setExploreItems(false), e)
									}
									show={showExploreItems}
									id="exploreDropdown"
									title={
										<div className="d-flex align-items-center">
											<Link className="navDropdownHeading" to="/explore">
												Explore
											</Link>
											<button
												title="Expand explore menu"
												onClick={handleExploreDropdownToggle}
												onKeyDown={(event) =>
													handleDropdownIconKeyPress(
														event,
														handleExploreDropdownToggle
													)
												}
												className="icon-button"
												aria-label="Toggle Explore Dropdown"
												tabIndex={0}
											>
												<img
													src={dropdown_icon}
													alt="navigation dropdown icon"
													className="dashboard-dropdown-icon"
												/>
											</button>
										</div>
									}
								>
									<div className="dropdownEffect explore">
										<ul className="dashboard-link-segments">
											<li>
												<Link to="/segmentExplore">Segment Explore</Link>
											</li>
											<li>
												<Link to="/segmentSearch">Segment Search</Link>
											</li>
											<li>
												<Link to="/athleteSearch">Athlete Search</Link>
											</li>
											<li>
												<Link to="/fitnessAndFreshness">
													Fitness & Freshness
												</Link>
											</li>
											<li>
												<Link to="/clubs">Clubs</Link>
											</li>
											<li>
												<Link to="/apps">Apps</Link>
											</li>
										</ul>
										<div className="explore-dropdown-subscription">
											<h6>SUBSCRIPTION</h6>
											<ul>
												<li>
													<Link to="/createRoute">Create a Route</Link>
												</li>
												<li>
													<Link to="/subscriberPerks">Subscriber Perks</Link>
												</li>
											</ul>
										</div>
									</div>
								</NavDropdown>
								<Link
									id="challengesLink"
									className="d-flex align-items-center"
									to="/challenges"
								>
									Challenges
								</Link>
							</React.Fragment>
						)}
					</Nav>

					{/* Whenever we are in smaller screens align items at the start and whenever we are on large screens align items at the centre. */}
					<Nav
						className={`d-flex ${
							isHamburger ? "align-items-start" : "align-items-center"
						}`}
					>
						<div className="start-trial-btn">
							<Nav.Link
								href="#home"
								className="experiment btn btn-sm btn-primary d-flex align-items-center"
							>
								Start Trial
							</Nav.Link>
						</div>
						<div className="notifications-wrapper">
							<Nav.Link
								title="0 new notifications"
								href="#challenges"
								id="notifications"
								className="d-flex align-items-center"
							>
								{" "}
								<MdOutlineNotificationsNone className="mdOutlineNotificationsNone-icon" />{" "}
							</Nav.Link>
						</div>
						<div className="flex-fill" id="fullWidthUserAvatar">
							<NavDropdown
								onMouseEnter={(e) =>
									handleDropdownHover(() => setUserAvatar(true), e)
								}
								onMouseLeave={(e) =>
									handleDropdownHover(() => setUserAvatar(false), e)
								}
								show={showUserAvatar}
								id="userAvatar"
								className="flipped-dropdown-horizontal"
								title={
									// Whenever we hover over the icon we changes is color to orange.
									<div
										className={`d-flex align-items-center ${
											showUserAvatar ? "hovered" : ""
										}`}
									>
										<button
											title="Expand profile menu"
											onClick={handleUserAvatarDropdownToggle}
											onKeyDown={(event) =>
												handleDropdownIconKeyPress(
													event,
													handleUserAvatarDropdownToggle
												)
											}
											className="icon-button"
											aria-label="Toggle user avatar dropdown"
											tabIndex={0}
										>
											<img
												src={dropdown_icon}
												alt="navigation dropdown icon"
												className="dashboard-dropdown-icon"
											/>

											{userData.profileImageUrl ? (
												<img
													id="userProfileImg"
													src={userData.profileImageUrl}
													alt="user profile"
													width={32}
													height={32}
												></img>
											) : (
												<img
													id="userProfileImg"
													src={defaultUserProfile}
													alt="user profile"
													width={32}
													height={32}
												></img>
											)}
										</button>
									</div>
								}
							>
								<div className="dropdownEffect" id="userDropdownMenu">
									<ul className="user-dropdown-menu-wrapper">
										<li>
											<Link to="/findFriends">Find Friends</Link>
										</li>
										<li>
											<Link to="/profile">My Profile</Link>
										</li>
										<li>
											<Link to="/settings">Settings</Link>
										</li>
										<li>
											<Link to="/SignUp" onClick={handleSignOut}>
												Log Out
											</Link>
										</li>
									</ul>
								</div>
							</NavDropdown>
						</div>
						<div className="flex-fill" id="fullWidthUserUpload">
							<NavDropdown
								onMouseEnter={(e) =>
									handleDropdownHover(() => setUploadButton(true), e)
								}
								onMouseLeave={(e) =>
									handleDropdownHover(() => setUploadButton(false), e)
								}
								show={showUploadButton}
								id="userUpload"
								className="flipped-dropdown-horizontal"
								onClick={(e) =>
									handleDropdownHover(() => setUploadButton(true || false), e)
								}
								title={
									<div className="d-flex align-items-center">
										{/* Whenever we hover over the icon we want to change it to another icon. */}
										{showUploadButton ? (
											<button
												type="button"
												onClick={handleUserUploadDropdownToggle}
												onKeyDown={(event) =>
													handleDropdownIconKeyPress(
														event,
														handleUserUploadDropdownToggle
													)
												}
												className="icon-button color"
												aria-label="Toggle user upload dropdown"
												tabIndex={0}
											>
												<BsPlusCircleFill
													onClick={handleUserUploadDropdownToggle}
												/>
											</button>
										) : (
											<button
												type="button"
												onClick={handleUserUploadDropdownToggle}
												onKeyDown={(event) =>
													handleDropdownIconKeyPress(
														event,
														handleUserUploadDropdownToggle
													)
												}
												className="icon-button color"
												aria-label="Toggle user upload dropdown"
												tabIndex={0}
											>
												<BsPlusCircle
													onClick={handleUserUploadDropdownToggle}
												/>
											</button>
										)}
									</div>
								}
							>
								<div className="dropdownEffect" id="userUploadDropdownMenu">
									<ul className="user-dropdown-menu-wrapper">
										<li>
											<Link to="/file">
												<div className="upload-center-wrapper">
													<BsArrowUpCircle className="upload-icons" /> Upload
													activity
												</div>
											</Link>
										</li>
										<li>
											<Link to="/manual">
												<div className="upload-center-wrapper">
													<MdMonitorHeart className="upload-icons" /> Add manual
													entry
												</div>
											</Link>
										</li>
										<li>
											<Link to="/createRoute">
												<div className="upload-center-wrapper">
													<TbRoute className="upload-icons" /> Create route
												</div>
											</Link>
										</li>
										<li>
											<Link to="/createPost">
												<div className="upload-center-wrapper">
													<BsLayoutTextWindow className="upload-icons" /> Create
													post
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</NavDropdown>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
