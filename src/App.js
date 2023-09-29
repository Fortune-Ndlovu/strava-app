import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { getActivities, getAthleteData } from './stravaApi';
import config from './config.json';

function App() {
  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState([]);
  const [athlete, setAthlete] = useState({});

  // Destructuring these properties so that we have access to their values.
  const { clientID, clientSecret, refreshToken } = config.strava;

  useEffect(() => {
    // fetching data from the Strava API.
    async function fetchData() {
      try {
        const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

        // Constructing the 'callRefresh' constant url using the Strava API credentials to obtain the access token by making a POST request.
        const responseToken = await fetch(callRefresh, { method: 'POST' });

        if (!responseToken.ok) {
          throw new Error('Failed to obtain access token');
        }

        const result = await responseToken.json();

        const activitiesData = await getActivities(result.access_token);
        const athleteData = await getAthleteData(result.access_token);

        setActivities(activitiesData);
        setAthlete(athleteData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [clientID, clientSecret, refreshToken]);

  function showActivities() {
    if (isLoading) return <p>LOADING...</p>;
    return <p>Number of Activities: {activities.length}</p>;
  }

  function showAthleteData() {
    if (isLoading) return <p>LOADING...</p>;
    return (
      <div>
        <p>Name: {athlete.firstname} {athlete.lastname}</p>
        <p>Bio: {athlete.bio}</p>
        <p>City: {athlete.city}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div>
        <h2>Your Activities</h2>
        {showActivities()}
      </div>
      <div>
        <h2>Your Profile</h2>
        {showAthleteData()}
      </div>
    </div>
  );
}

export default App;
