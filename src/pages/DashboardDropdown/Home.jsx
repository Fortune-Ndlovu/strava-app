// Fundamental for creating components, managing state, and handling side effects.
import React, {useState, useEffect} from 'react';

// Destructuring the getActivities and getAthleteData: Functions for fetching data from the Strava API.
import {getActivities, getAthleteData} from '../../services/stravaApi';

// Configuration data required for Strava API authentication and access.
import config from '../../data/config.json';
import {LeftDashboardAthleteSidebar, CenterDashboardAthleteSidebar, RightDashboardAthleteSidebar} from '../../components/SideBar';
import {Container, Row, Col} from "react-bootstrap";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [activities, setActivities] = useState([]);
    const [athlete, setAthlete] = useState({});

    // Destructuring these properties so that we have access to their values.
    const {clientID, clientSecret, refreshToken} = config.strava;

    useEffect(() => { // fetching data from the Strava API.
        async function fetchData() {
            try { // Constructing a URL using the API credentials to obtain an access token via a POST request.
                const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

                // Constructing the 'callRefresh' constant url using the Strava API credentials to obtain the access token by making a POST request.
                const responseToken = await fetch(callRefresh, {method: 'POST'});

                // Handling the response token if it is not ok throw an error
                if (! responseToken.ok) {
                    throw new Error('Failed to obtain access token');
                }

                // Parsing the responseToken to json so we can access the access_token using dot notation passing it to the,
                // getActivities and getAthleteData functions that receive it as an argument as uses the accessToken to fetch for relevant data and brings it back.
                const result = await responseToken.json();
                const activitiesData = await getActivities(result.access_token);
                const athleteData = await getAthleteData(result.access_token);

                // Once we have the received the data back from the server we plug it into the useState functions that pass it to the state variable for later use.
                setActivities(activitiesData);
                setAthlete(athleteData);
                setIsLoading(false);
            } catch (error) { // if there is an error catch it and log it out into the console
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        }

        // kick off the data-fetching process whenever any of the specified dependencies (clientID, clientSecret, or refreshToken) change.
        // This ensures that the data is fetched and updated whenever these important parameters change.
        fetchData();

    }, [clientID, clientSecret, refreshToken]);
    // When any of these dependencies change, the useEffect hook will re-run.

    // function deleteActivity = (activityID) => {
    //     const newActivityArray = activities.filter(activity => activity.id !== activityID);
    //     setActivities(newActivityArray);
    // }
    return (
        <div className="App">
            <div className="dashboard-container">
                <Container className="mt-5">
                    <div id="text">
                        <Row className="justify-content-center">
                            <Col xs={12}
                                md={6}
                                lg={3}
                                className="LeftDashboardAthleteSidebar-Col">

                                <div className="LeftDashboardAthleteSidebar">
                                    <LeftDashboardAthleteSidebar athlete={athlete}
                                        activities={activities}
                                        isLoading={isLoading}/>
                                </div>
                            </Col>
                            <Col xs={12}
                                md={12}
                                lg={6}
                                className="centerResize">
                                <div className="CenterDashboardAthleteSidebar">
                                    <CenterDashboardAthleteSidebar athlete={athlete}
                                        activities={activities}
                                        isLoading={isLoading}/>
                                </div>
                            </Col>
                            <Col xs={12}
                                md={6}
                                lg={3}
                                className="RightDashboardAthleteSidebar-Col">
                                <div className="RightDashboardAthleteSidebar">
                                    <RightDashboardAthleteSidebar athlete={athlete}
                                        activities={activities}
                                        isLoading={isLoading}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Home
