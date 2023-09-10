import React, { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {

  // State variables
  const [isLoading, setIsLoading] = useState(true) // Boolean flag that indicates whether the data is loading
  const [activities, setActivities] = useState([]); // An array to store the retrieved activities data from strava
  const [athlete, setAthlete] = useState({}); // An object to store the retrieved athlete(profile) data from strava

  // Strava Credentials
  const clientID = "113235";
  const clientSecret = "4069d12e70c672a834bf7161d0652abd413c92d6";
  const refreshToken = "a93df7afd0f962f71ed0ec01948c9ece96ff1a72";

  // Endpoints for read-all activities and athlete data
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;
  const callActivities = "https://www.strava.com/api/v3/athlete/activities"; // Do not include access_token here
  const callAthlete = "https://www.strava.com/api/v3/athlete";

  useEffect(() => {
    function getActivities(access) {
      fetch(`${callActivities}?access_token=${access}`)
        .then((res) => res.json())
        .then((data) => setActivities(data))
        .catch((e) => console.log(e));
    }

    function getAthleteData(access) {
      fetch(`${callAthlete}?access_token=${access}`)
        .then((res) => res.json())
        .then((data) => setAthlete(data))
        .catch((e) => console.log(e));
    }

    fetch(callRefresh, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((result) => {
        getActivities(result.access_token);
        getAthleteData(result.access_token);
        setIsLoading(false);
      });
  }, [callRefresh]);

  function showActivities() {
    if (isLoading) return <p>LOADING...</p>;
    if (!isLoading) {
      console.log(activities);
      return activities.length;
    }
  }

  function showAthleteData() {
    if (isLoading) return <p>LOADING...</p>;
    if (!isLoading) {
      console.log(athlete);
      return (
        <div>
          <p>Name: {athlete.firstname} {athlete.lastname}</p>
          <p>Bio: {athlete.bio}</p>
          <p>City: {athlete.city}</p>
          {/* Add more athlete data as needed */}
        </div>
      );
    }
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
