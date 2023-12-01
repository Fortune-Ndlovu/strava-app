import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {MdDoubleArrow} from "react-icons/md";
import {IoIosInformationCircleOutline} from "react-icons/io";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import fortunendlovu from '../images/fortunendlovu.jpg';
import recoveryweek from '../images/recoveryweek.png';

function LeftDashboardAthleteSidebar({athlete, activities}) {
    return (
        <div>
            <Card className="athlete-stats-card">
                <Card.Img variant="top"
                    src={fortunendlovu}
                    className="mx-auto d-block"
                    id="athleteStatsCardImg"/>
                <Card.Body>
                    <Card.Title> {
                        athlete.firstname
                    }
                        {" "}
                        {
                        athlete.lastname
                    } </Card.Title>
                    <Card.Text>
                        <ul className="dashboard-stats">
                            <li className="following-stat">
                                <a href="home">
                                    <span>Following</span>
                                    <p> {
                                        activities.length
                                    }</p>
                                </a>
                            </li>
                            <li className="followers-stat">
                                <a href="home">
                                    <span>Followers</span>
                                    <p> {
                                        activities.length
                                    }</p>
                                </a>
                            </li>
                            <li className="activities-stat">
                                <a href="home">
                                    <span>Activities</span>
                                    <p> {
                                        activities.length
                                    }</p>
                                </a>
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><span className="latestActivityText">Latest Activity</span>
                        <br></br>
                        <a href="home">
                            <strong>Morning run
                            </strong>
                            <span className="dotSpan">
                                •
                            </span>
                            <time dateTime="Sep 22, 2023">Sep 22, 2023</time>
                        </a>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body className="training-log">
                    <Card.Link href="home" id="training-log-link">Your Training Log
                        <RiArrowDropDownLine className="trainingLogIcon"/></Card.Link>
                </Card.Body>
            </Card>

            <Tabs style={
                    {width: '18rem'}
                }
                defaultActiveKey="profile"
                id="fill-tab-recoveryWeek"
                className="mb-3 recoveryWeek"
                fill>
                <Tab eventKey="home"
                    title={<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g fill=""><path d="M17.66 2.33a2.162 2.162 0 00-2.16-2h-7a2.162 2.162 0 00-2.16 2H2.33v21.34h19.34V2.33zm-9.99.17a.985.985 0 01.02-.17.818.818 0 01.81-.66h7a.818.818 0 01.81.66.982.982 0 01.02.17v1.83H7.67zm12.66 19.83H3.67V3.67h2.66v2h11.34v-2h2.66z"></path><path d="M8.675 16h-1.35v4h1.35zm4-4h-1.35v8h1.35zm4-4h-1.35v12h1.35z"></path></g></svg>}>
                    <div className="relativeEffortTitleStyle">
                        <MdDoubleArrow className="arrowIcon"/>
                        <p>RELATIVE EFFORT</p>
                        <IoIosInformationCircleOutline className="informationIcon"/>
                    </div>
                    <Card style={
                        {width: '18rem'}
                    } id="recoveryWeek-cardStyle">

                        <Card.Body>
                            <Card.Text className="recoveryLastWeekText">
                                LAST WEEK
                            </Card.Text>
                            <Card.Title className="recoveryLastWeekTitle">Recovery Week</Card.Title>
                            <Card.Text>
                                Based on your heart rate data, your training last week was less intense than usual. Way to recover intelligently.
                            </Card.Text>
                            <Card.Img variant="top" id="recoveryWeekImg"
                                src={recoveryweek}/>
                            <Card.Text>
                                To get current insights and analysis from features like Relative Effort, try a subscription for free.
                            </Card.Text>
                            <Button variant="primary" id="startFreeTrialBtn">Start Free Trial</Button>
                        </Card.Body>
                        <Card.Body className="training-log">

                            <Card.Link href="home" id="goals-log-link">Manage Your Goals
                                <RiArrowDropDownLine className="trainingLogIcon"/>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="profile"
                    title={<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M21.3 18.12L14.98 6.28a2.6 2.6 0 00-4.63.07l-.46.93a.585.585 0 01-.21-.45V3.17A2.452 2.452 0 007.24.72a2.172 2.172 0 00-2.01 1.4L2.91 6.84 1.39 7.96a2.768 2.768 0 00-1.06 2.06 2.96 2.96 0 00.9 2.32l7.76 7.9a11.62 11.62 0 008.22 3.43h3.65a2.757 2.757 0 002.41-1.4l.05-.09a2.7 2.7 0 00-.01-2.73 2.665 2.665 0 00-2.01-1.33zm.85 3.39l-.05.09a1.425 1.425 0 01-1.24.73h-3.65a10.257 10.257 0 01-7.26-3.04l-7.78-7.92a1.566 1.566 0 01-.49-1.27 1.426 1.426 0 01.5-1.05l.71-.53 8.6 8.48h1.64v-.28L3.98 7.7l2.48-5.02a.848.848 0 01.78-.61 1.1 1.1 0 011.09 1.1v3.66a1.92 1.92 0 001.92 1.92h.43l.88-1.8a1.24 1.24 0 011.12-.7 1.257 1.257 0 011.11.67l1.04 1.94L12.69 10v1.52l2.77-1.47.77 1.42v.01l-2.63 1.39v1.53l3.26-1.73.74 1.37-3.02 1.6v1.53l3.65-1.94 2.06 3.85.25.36h.4a1.376 1.376 0 011.2.69 1.34 1.34 0 01.01 1.38z" fill=""></path></svg>}>
                    <div className="relativeEffortTitleStyle">
                        <MdDoubleArrow className="arrowIcon"/>
                        <p>GOALS</p>
                    </div>
                    <Card style={
                        {width: '18rem'}
                    } id="recoveryWeek-cardStyle">
                        <Card.Body>
                            <Card.Text className="goals-tab-cardText">
                                <div className="goals-tab-text">
                                   <p>Subscribe to stay motivated with custom progress, segment and power goals. <a href="home">Upgrade</a></p>
                                </div>
                            </Card.Text>
                            <Card.Text className="weekStats-cardText">
                                <div className="goals-tab-stats">
                                    <p className="thisWeek-para">THIS WEEK</p>
                                    <p className="thisWeek-numbers">0/0 km</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div>
                                    <svg className="recharts-surface" width="150" height="100" viewBox="0 0 150 100"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="60" width="140"></rect></clipPath></defs><g className="recharts-layer recharts-bar"><g className="recharts-layer recharts-bar-rectangles"><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="7" y="63" radius="0" className="recharts-rectangle" d="M 7,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="27" y="63" radius="0" className="recharts-rectangle" d="M 27,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="47" y="63" radius="0" className="recharts-rectangle" d="M 47,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="67" y="63" radius="0" className="recharts-rectangle" d="M 67,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="87" y="63" radius="0" className="recharts-rectangle" d="M 87,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="107" y="63" radius="0" className="recharts-rectangle" d="M 107,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="127" y="63" radius="0" className="recharts-rectangle" d="M 127,63 h 16 v 2 h -16 Z"></path></g></g><g className="recharts-layer"></g></g><g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(15,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">M</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(35,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">T</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(55,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">W</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(75,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="800">T</text><svg x="-5" y="15" width="10" height="10"><polygon points="5,0 0,10 10,10" fill="#fc5200"></polygon></svg></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(95,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">F</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(115,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">S</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(135,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">S</text></g></g></g></g></svg>                
                                    <svg className="runningIcon" width="80" height="80" viewBox="-3.8000000000000003 -3.8000000000000003 83.60000000000001 83.60000000000001"><circle cx="38" cy="38" r="38" stroke="none" strokeWidth="1" fill="#44b6c2" opacity="0"></circle><circle cx="38" cy="38" r="38" stroke="#d3d1cd" strokeWidth="5" fill="none"></circle><circle cx="38" cy="38" r="38" stroke="#44b6c2" strokeWidth="5" fill="none" strokeDasharray="0px 1px" strokeDashoffset="0px" transform="rotate(-90,38,38)" pathLength="1"></circle><svg x="22.8" y="22.8" width="30.400000000000002" height="30.400000000000002" aria-hidden="true"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30.400000000000002" height="30.400000000000002"><path d="M21.3 18.12L14.98 6.28a2.6 2.6 0 00-4.63.07l-.46.93a.585.585 0 01-.21-.45V3.17A2.452 2.452 0 007.24.72a2.172 2.172 0 00-2.01 1.4L2.91 6.84 1.39 7.96a2.768 2.768 0 00-1.06 2.06 2.96 2.96 0 00.9 2.32l7.76 7.9a11.62 11.62 0 008.22 3.43h3.65a2.757 2.757 0 002.41-1.4l.05-.09a2.7 2.7 0 00-.01-2.73 2.665 2.665 0 00-2.01-1.33zm.85 3.39l-.05.09a1.425 1.425 0 01-1.24.73h-3.65a10.257 10.257 0 01-7.26-3.04l-7.78-7.92a1.566 1.566 0 01-.49-1.27 1.426 1.426 0 01.5-1.05l.71-.53 8.6 8.48h1.64v-.28L3.98 7.7l2.48-5.02a.848.848 0 01.78-.61 1.1 1.1 0 011.09 1.1v3.66a1.92 1.92 0 001.92 1.92h.43l.88-1.8a1.24 1.24 0 011.12-.7 1.257 1.257 0 011.11.67l1.04 1.94L12.69 10v1.52l2.77-1.47.77 1.42v.01l-2.63 1.39v1.53l3.26-1.73.74 1.37-3.02 1.6v1.53l3.65-1.94 2.06 3.85.25.36h.4a1.376 1.376 0 011.2.69 1.34 1.34 0 01.01 1.38z" fill=""></path></svg></svg></svg>
                                </div>
                            </Card.Text>
                            <Card.Text className="weekStats-cardText">
                                <div className="goals-tab-progress">
                                    <span id="rangeSpan">--:--</span>
                                    <span id="mileSpan">0 m</span>
                                </div>
                            </Card.Text>
                            <Card.Text className="weekStats-cardText-second">
                                <div className="goals-tab-stats">
                                    <p className="thisWeek-para">THIS WEEK</p>
                                    <p className="thisWeek-numbers">0/0 km</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="training-log">

                            <Card.Link href="home" id="goals-log-link">Manage Your Goals
                                <RiArrowDropDownLine className="trainingLogIcon"/>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="cycleBike"
                    title={<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M5.5 19.675a5.166 5.166 0 005.105-4.485h1.105l3.28-6.52.76 1.46a5.044 5.044 0 101.22-.57l-2.03-3.89H17a.333.333 0 01.33.33v.57h1.34V6A1.674 1.674 0 0017 4.32h-4.29l1.57 3.01H8.542L7.66 5.67h1.45l-.72-1.35H4.17l.72 1.35h1.241l1.26 2.37v.01l-.76 1.41a5.2 5.2 0 00-1.13-.135 5.175 5.175 0 100 10.35zm12.79-4.695h1.52l-2.2-4.2c.291-.073.59-.11.89-.11a3.83 3.83 0 11-3.83 3.83 3.877 3.877 0 011.7-3.19l1.92 3.67zm-4.82-6.31l-2.046 4.082-2.17-4.082h4.216zm-5.32.8l2.323 4.371H5.8l2.35-4.37zM5.5 10.675c.151.005.302.019.451.041l-1.58 2.944.79 1.53h4.1a3.822 3.822 0 11-3.76-4.515z" fill=""></path></svg>}>
                    <div className="relativeEffortTitleStyle">
                        <MdDoubleArrow className="arrowIcon"/>
                        <p>GOALS</p>
                    </div>
                    <Card style={
                        {width: '18rem'}
                    } id="recoveryWeek-cardStyle">
                        <Card.Body>
                            <Card.Text className="goals-tab-cardText">
                                <div className="goals-tab-text">
                                   <p>Subscribe to stay motivated with custom progress, segment and power goals. <a href="home">Upgrade</a></p>
                                </div>
                            </Card.Text>
                            <Card.Text className="weekStats-cardText">
                                <div className="goals-tab-stats">
                                    <p className="thisWeek-para">THIS WEEK</p>
                                    <p className="thisWeek-numbers">0/0 km</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div>
                                    <svg className="recharts-surface" width="150" height="100" viewBox="0 0 150 100"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="60" width="140"></rect></clipPath></defs><g className="recharts-layer recharts-bar"><g className="recharts-layer recharts-bar-rectangles"><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="7" y="63" radius="0" className="recharts-rectangle" d="M 7,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="27" y="63" radius="0" className="recharts-rectangle" d="M 27,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="47" y="63" radius="0" className="recharts-rectangle" d="M 47,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="67" y="63" radius="0" className="recharts-rectangle" d="M 67,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="87" y="63" radius="0" className="recharts-rectangle" d="M 87,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="107" y="63" radius="0" className="recharts-rectangle" d="M 107,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="127" y="63" radius="0" className="recharts-rectangle" d="M 127,63 h 16 v 2 h -16 Z"></path></g></g><g className="recharts-layer"></g></g><g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(15,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">M</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(35,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">T</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(55,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">W</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(75,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="800">T</text><svg x="-5" y="15" width="10" height="10"><polygon points="5,0 0,10 10,10" fill="#fc5200"></polygon></svg></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(95,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">F</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(115,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">S</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(135,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">S</text></g></g></g></g></svg>                
                                   <svg className="bikingIcon" width="80" height="80" viewBox="-3.8000000000000003 -3.8000000000000003 83.60000000000001 83.60000000000001"><circle cx="38" cy="38" r="38" stroke="none" strokeWidth="1" fill="#44b6c2" opacity="0"></circle><circle cx="38" cy="38" r="38" stroke="#d3d1cd" strokeWidth="5" fill="none"></circle><circle cx="38" cy="38" r="38" stroke="#44b6c2" strokeWidth="5" fill="none" strokeDasharray="0px 1px" strokeDashoffset="0px" transform="rotate(-90,38,38)" pathLength="1"></circle><svg x="22.8" y="22.8" width="30.400000000000002" height="30.400000000000002" aria-hidden="true"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30.400000000000002" height="30.400000000000002"><path d="M5.5 19.675a5.166 5.166 0 005.105-4.485h1.105l3.28-6.52.76 1.46a5.044 5.044 0 101.22-.57l-2.03-3.89H17a.333.333 0 01.33.33v.57h1.34V6A1.674 1.674 0 0017 4.32h-4.29l1.57 3.01H8.542L7.66 5.67h1.45l-.72-1.35H4.17l.72 1.35h1.241l1.26 2.37v.01l-.76 1.41a5.2 5.2 0 00-1.13-.135 5.175 5.175 0 100 10.35zm12.79-4.695h1.52l-2.2-4.2c.291-.073.59-.11.89-.11a3.83 3.83 0 11-3.83 3.83 3.877 3.877 0 011.7-3.19l1.92 3.67zm-4.82-6.31l-2.046 4.082-2.17-4.082h4.216zm-5.32.8l2.323 4.371H5.8l2.35-4.37zM5.5 10.675c.151.005.302.019.451.041l-1.58 2.944.79 1.53h4.1a3.822 3.822 0 11-3.76-4.515z" fill=""></path></svg></svg></svg></div>
                            </Card.Text>
                            <Card.Text className="weekStats-cardText">
                                <div className="goals-tab-progress">
                                    <span id="rangeSpan">--:--</span>
                                    <span id="mileSpan">0 m</span>
                                </div>
                            </Card.Text>
                            <Card.Text className="weekStats-cardText-second">
                                <div className="goals-tab-stats">
                                    <p className="thisWeek-para">THIS WEEK</p>
                                    <p className="thisWeek-numbers">0/0 km</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="training-log">

                            <Card.Link href="home" id="goals-log-link">Manage Your Goals
                                <RiArrowDropDownLine className="trainingLogIcon"/>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="swimWave"
                    title={<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M19.99 13.33a3.7 3.7 0 01-3.32-2l-.17-.32h-1.01l-.17.32a3.763 3.763 0 01-6.65 0l-.17-.32H7.49l-.17.32a3.72 3.72 0 01-3.32 2 3.7 3.7 0 01-3.01-1.51v1.88a5.02 5.02 0 003.01.98 5.054 5.054 0 004-1.92 5.116 5.116 0 007.99 0 5.122 5.122 0 007.01.94v-1.88a3.71 3.71 0 01-3.01 1.51zm-7.99 8a3.725 3.725 0 01-3.33-2L8.49 19H7.5l-.18.33a3.7 3.7 0 01-3.32 2 3.7 3.7 0 01-3.01-1.51v1.89c.873.64 1.929.98 3.01.97a5.054 5.054 0 004-1.92 5.054 5.054 0 004 1.92 4.947 4.947 0 003-.98v-1.87a3.654 3.654 0 01-3 1.5zm8-16.02a3.735 3.735 0 01-3.33-2L16.51 3h-1.02l-.16.31a3.724 3.724 0 01-3.33 2 3.681 3.681 0 01-3-1.5V5.7a5.04 5.04 0 003 .96 5.024 5.024 0 004-1.92 5.023 5.023 0 004 1.92 5.124 5.124 0 003-.95v-1.9a3.654 3.654 0 01-3 1.5z" fill=""></path></svg>}>
                    <div className="relativeEffortTitleStyle">
                        <MdDoubleArrow className="arrowIcon"/>
                        <p>GOALS</p>
                    </div>
                    <Card style={
                        {width: '18rem'}
                    } id="recoveryWeek-cardStyle">
                        <Card.Body>
                            <Card.Text className="goals-tab-cardText">
                                <div className="goals-tab-text">
                                   <p>Subscribe to stay motivated with custom progress, segment and power goals. <a href="home">Upgrade</a></p>
                                </div>
                            </Card.Text>
                            <Card.Text className="weekStats-cardText">
                                <div className="goals-tab-stats">
                                    <p className="thisWeek-para">THIS WEEK</p>
                                    <p className="thisWeek-numbers">0/0 km</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div>
                                    <svg className="recharts-surface" width="150" height="100" viewBox="0 0 150 100"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="60" width="140"></rect></clipPath></defs><g className="recharts-layer recharts-bar"><g className="recharts-layer recharts-bar-rectangles"><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="7" y="63" radius="0" className="recharts-rectangle" d="M 7,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="27" y="63" radius="0" className="recharts-rectangle" d="M 27,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="47" y="63" radius="0" className="recharts-rectangle" d="M 47,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="67" y="63" radius="0" className="recharts-rectangle" d="M 67,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="87" y="63" radius="0" className="recharts-rectangle" d="M 87,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="107" y="63" radius="0" className="recharts-rectangle" d="M 107,63 h 16 v 2 h -16 Z"></path></g><g className="recharts-layer recharts-bar-rectangle"><path fill="#d3d1cd" width="16" height="2" x="127" y="63" radius="0" className="recharts-rectangle" d="M 127,63 h 16 v 2 h -16 Z"></path></g></g><g className="recharts-layer"></g></g><g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g className="recharts-cartesian-axis-ticks"><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(15,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">M</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(35,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">T</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(55,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">W</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(75,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="800">T</text><svg x="-5" y="15" width="10" height="10"><polygon points="5,0 0,10 10,10" fill="#fc5200"></polygon></svg></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(95,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">F</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(115,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">S</text></g></g><g className="recharts-layer recharts-cartesian-axis-tick"><g transform="translate(135,73)"><text x="0" y="10" fill="#2b2b2b" textAnchor="middle" fontWeight="400">S</text></g></g></g></g></svg>                
                                    <svg className="swimmingWaveIcon" width="80" height="80" viewBox="-3.8000000000000003 -3.8000000000000003 83.60000000000001 83.60000000000001"><circle cx="38" cy="38" r="38" stroke="none" strokeWidth="1" fill="#44b6c2" opacity="0"></circle><circle cx="38" cy="38" r="38" stroke="#d3d1cd" strokeWidth="5" fill="none"></circle><circle cx="38" cy="38" r="38" stroke="#44b6c2" strokeWidth="5" fill="none" strokeDasharray="0px 1px" strokeDashoffset="0px" transform="rotate(-90,38,38)" pathLength="1"></circle><svg x="22.8" y="22.8" width="30.400000000000002" height="30.400000000000002" aria-hidden="true"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30.400000000000002" height="30.400000000000002"><path d="M19.99 13.33a3.7 3.7 0 01-3.32-2l-.17-.32h-1.01l-.17.32a3.763 3.763 0 01-6.65 0l-.17-.32H7.49l-.17.32a3.72 3.72 0 01-3.32 2 3.7 3.7 0 01-3.01-1.51v1.88a5.02 5.02 0 003.01.98 5.054 5.054 0 004-1.92 5.116 5.116 0 007.99 0 5.122 5.122 0 007.01.94v-1.88a3.71 3.71 0 01-3.01 1.51zm-7.99 8a3.725 3.725 0 01-3.33-2L8.49 19H7.5l-.18.33a3.7 3.7 0 01-3.32 2 3.7 3.7 0 01-3.01-1.51v1.89c.873.64 1.929.98 3.01.97a5.054 5.054 0 004-1.92 5.054 5.054 0 004 1.92 4.947 4.947 0 003-.98v-1.87a3.654 3.654 0 01-3 1.5zm8-16.02a3.735 3.735 0 01-3.33-2L16.51 3h-1.02l-.16.31a3.724 3.724 0 01-3.33 2 3.681 3.681 0 01-3-1.5V5.7a5.04 5.04 0 003 .96 5.024 5.024 0 004-1.92 5.023 5.023 0 004 1.92 5.124 5.124 0 003-.95v-1.9a3.654 3.654 0 01-3 1.5z" fill=""></path></svg></svg></svg>
                                </div>
                            </Card.Text>
                            <Card.Text className="weekStats-cardText">
                                <div className="goals-tab-progress">
                                    <span id="rangeSpan">--:--</span>
                                    <span id="mileSpan">0 m</span>
                                </div>
                            </Card.Text>
                            <Card.Text className="weekStats-cardText-second">
                                <div className="goals-tab-stats">
                                    <p className="thisWeek-para">THIS WEEK</p>
                                    <p className="thisWeek-numbers">0/0 km</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="training-log">

                            <Card.Link href="home" id="goals-log-link">Manage Your Goals
                                <RiArrowDropDownLine className="trainingLogIcon"/>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    );
}

LeftDashboardAthleteSidebar.propTypes = {
    athlete: PropTypes.shape(
        {
            firstname: PropTypes.string,
            lastname: PropTypes.string,
            bio: PropTypes.string,
            city: PropTypes.string,
            // Add other properties as needed
        }
    ).isRequired,
    activities: PropTypes.array.isRequired
};

export default LeftDashboardAthleteSidebar;
