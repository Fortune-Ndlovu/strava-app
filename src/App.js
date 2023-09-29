import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { getActivities, getAthleteData } from './stravaApi';

function App() {

  // State variables
  const [isLoading, setIsLoading] = useState(true) // Boolean flag that indicates whether the data is loading.
  const [activities, setActivities] = useState([]); // An array to store the retrieved activities data from Strava.
  const [athlete, setAthlete] = useState({}); // An object to store the retrieved athlete(profile) data from Strava.

  // Strava Credentials, These are necessary for authentication and accessing Strava data.
  const clientID = "113235";
  const clientSecret = "4069d12e70c672a834bf7161d0652abd413c92d6";
  const refreshToken = "a93df7afd0f962f71ed0ec01948c9ece96ff1a72";

  // API Endpoints for Strava.
  // `callRefresh`: This endpoint is used to refresh our access token. We provide our client ID, client secret, and refresh token as parameters.
  // `callActivities:` This is the endpoint for retrieving our activities. We will include the access token when making the actual request.
  // `callAthlete:` This is the endpoint for retrieving our athlete (profile) data.
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;
  
  // useEffect Hook: This hook is used to perform side effects in our component.
  // In this case, it's responsible for fetching data from the Strava API.
  useEffect(() => {
    fetch(callRefresh, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then(async (result) => {
        const activitiesData = await getActivities(result.access_token);
        const athleteData = await getAthleteData(result.access_token);
        setActivities(activitiesData);
        setAthlete(athleteData);
        setIsLoading(false);
      });
  }, [callRefresh]);
   
  /** Rendering two functions, `showActivities` and `showAthleteData`, to display the fetched data.
   * This function displays the number of activities if data is available,
   * or it shows "LOADING..." if data is still being fetched. It also logs the activities array to the console. 
  */ 
  function showActivities() {
    if (isLoading) return <p>LOADING...</p>;
    if (!isLoading) {
      console.log(activities);
      return activities.length;
    }
  }

  /** We will be showing athlete data in separate components e.g user profile.
   * This function displays various athlete (profile) data fields such as name, bio, and city.
   * Like showActivities, it also checks whether data is still loading and logs the athlete object to the console.
  */ 
  function showAthleteData() {
    if (isLoading) return <p>LOADING...</p>;
    if (!isLoading) {
      console.log(athlete);
      return (
        <div>
          <p>Name: {athlete.firstname} {athlete.lastname}</p>
          <p>Bio: {athlete.bio}</p>
          <p>City: {athlete.city}</p>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <Header />
      <div>
        <h2>Your Activities</h2>
        {/* displaying your activities using the showActivities function. */}
        {showActivities()}
      </div>
      <div>
        <h2>Your Profile</h2>
        {/*  displaying your athlete (profile) data using the showAthleteData function. */}
        {showAthleteData()}
      </div>
    </div>
  );
}

export default App;
