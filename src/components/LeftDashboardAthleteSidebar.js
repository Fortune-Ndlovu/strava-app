import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {CgNotes} from "react-icons/cg";
import {GiRunningShoe} from "react-icons/gi";
import {GrBike} from "react-icons/gr";
import {LuWaves} from "react-icons/lu";
import {MdDoubleArrow} from "react-icons/md";
import {IoIosInformationCircleOutline} from "react-icons/io";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import fortunendlovu from '../images/fortunendlovu.jpg';
import recoveryweek from '../images/recoveryweek.png';

function LeftDashboardAthleteSidebar({athlete, activities, isLoading}) {
    return (<div> {
        isLoading ? (<p>LOADING...</p>) : (<div>
            <Card className="athlete-stats-card">
                <Card.Img variant="top"
                    src={fortunendlovu}
                    className="mx-auto d-block" id="athleteStatsCardImg"/>
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
                    <ListGroup.Item>Latest Activity
                        <br></br>
                        <a href="home">
                            <strong>Morning run
                            </strong>
                            <span>
                                •
                            </span>
                            <time dateTime="Sep 22, 2023">Sep 22, 2023</time>
                        </a>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body className="training-log">
                    <Card.Link href="#">Your Training Log
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
                    title={<CgNotes/>}>
                    <div className="relativeEffortTitleStyle">
                        <MdDoubleArrow className="arrowIcon"/>
                        Relative Effort
                        <IoIosInformationCircleOutline className="informationIcon"/>
                    </div>
                    <Card style={
                        {width: '18rem'}
                    }>

                        <Card.Body>
                            <Card.Text>
                                LAST WEEK
                            </Card.Text>
                            <Card.Title>Recovery Week</Card.Title>
                            <Card.Text>
                                Based on your heart rate data, your training last week was less intense than usual. Way to recover intelligently.
                            </Card.Text>
                            <Card.Img variant="top" id="recoveryWeekImg"
                                src={recoveryweek}/>
                            <Card.Text>
                                To get current insights and analysis from features like Relative Effort, try a subscription for free.
                            </Card.Text>
                            <Button variant="primary" id="startFreeTrialBtn">Go somewhere</Button>
                        </Card.Body>
                        <Card.Body className="training-log">

                            <Card.Link href="#">Your Training Log
                                <RiArrowDropDownLine className="trainingLogIcon"/>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Tab>
                <Tab eventKey="profile"
                    title={<GiRunningShoe/>}>
                    GOALS
                </Tab>
                <Tab eventKey="longer-tab"
                    title={<GrBike/>}>
                    GOALS
                </Tab>
                <Tab eventKey="contact"
                    title={<LuWaves/>}>
                    GOALS
                </Tab>
            </Tabs>
        </div>)
    } </div>);
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
    activities: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default LeftDashboardAthleteSidebar;
