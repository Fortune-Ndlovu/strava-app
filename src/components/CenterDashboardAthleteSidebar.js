import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import {RiArrowDropDownLine} from 'react-icons/ri';
import fortunendlovu from '../images/fortunendlovu.jpg';

function CenterDashboardAthleteSidebar({athlete, activities}) {

    const [selectedUserActivityUI, setSelectedUserActivityUI] = useState('Following');

    const handleSelectedActivityUIChange = (value) => {
        setSelectedUserActivityUI(value);
    };

    return (
        <div id="homeDashboardFeedUI">
            <Dropdown id="userActivities">
                <Dropdown.Toggle variant="success" id="userActivities-dropdownBtn-list">
                    {selectedUserActivityUI}
                    <RiArrowDropDownLine className="feedUI-dropdownUp-icon"/>
                </Dropdown.Toggle>
                <Dropdown.Menu id="userActivities-btn-list-dropdown">
                    <Dropdown.Item href="#/action-1" className="userActivities-dropDown-link"
                        onClick={
                            () => handleSelectedActivityUIChange('Following')
                        }
                        value="Following">Following</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" className="userActivities-dropDown-link"
                        onClick={
                            () => handleSelectedActivityUIChange('Waterford Viking Marathon')
                        }
                        value="Waterford Viking Marathon">Waterford Viking Marathon</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className="userActivities-dropDown-link"
                        onClick={
                            () => handleSelectedActivityUIChange('WIT Arena')
                        }
                        value="WIT Arena">WIT Arena</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Card style={
                {width: 'auto'}
            }>
                <Card.Body>
                    <Card.Text>
                        <div className="feed-ui-card">
                            <div className="feed-ui-user-image-wrapper">
                                <Card.Img variant="top" id="feed-ui-user-image"
                                    src={fortunendlovu}/>
                            </div>
                            <div className="feed-ui-user-info">
                                <p className="feed-ui-user-name">{
                                    athlete.firstname
                                }{" "}
                                    {
                                    athlete.lastname
                                }</p>
                                <p className="feed-ui-user-location">
                                    <time data-test id="date_at_time">22 September 2023 at 09:09</time><br></br>
                                    <span>
                                        · The Borough District of Clonmel, County Tipperary
                                    </span>
                                </p>
                            </div>
                            <div>
                                <div className="feed-ui-card-external-socialsBtn-wrapper">
                                    <Dropdown id="uiSocialsBtn">
                                        <Dropdown.Toggle variant="success" id="uiSocialsBtn-dropdownBtn-list">
                                            <RiArrowDropDownLine className="dropdownUp-icon"/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu id="module-btn-list-dropdown">
                                            <Dropdown.Item href="#/action-1" className="uiSocialsBtn-dropDown-link">Facebook</Dropdown.Item>
                                            <Dropdown.Divider/>
                                            <Dropdown.Item href="#/action-1" className="uiSocialsBtn-dropDown-link">Twitter</Dropdown.Item>
                                            <Dropdown.Divider/>
                                            <Dropdown.Item href="#/action-2" className="uiSocialsBtn-dropDown-link">Get Embed Code</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <p>Number of Activities: {
                            activities.length
                        }</p>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                    </Card.Text>
                    <Button title="View all kudos" variant="primary">Like</Button>
                    <Button title="Comments" variant="primary">Comments</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

CenterDashboardAthleteSidebar.propTypes = {
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

export default CenterDashboardAthleteSidebar;
