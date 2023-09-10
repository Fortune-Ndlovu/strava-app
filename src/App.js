import React, { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [activities, setActivities] = useState({})

  //Strava Credentials
  let clientID = "113235";
  let clientSecret = "4069d12e70c672a834bf7161d0652abd413c92d6";

  // refresh token and call address
  const refreshToken = "a93df7afd0f962f71ed0ec01948c9ece96ff1a72";
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`
  
  // endpoint for read-all activities. temporary token is added in getActivities()
  const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(callRefresh, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(result => getActivities(result.access_token))
  }, [callRefresh])

  // use current access token to call all activities
  function getActivities(access){
      // console.log(callActivities + access)
        fetch(callActivities + access)
        .then(res => res.json())
        .then(data => {
          setActivities(data); // set the data first
          setIsLoading(prev => !prev); // then change the loading state
        })
        .catch(e => console.log(e))
  }


  function showActivities(){
    if(isLoading) return <>LOADING</>
    if(!isLoading) {
      console.log(activities)
      return activities.length
    }
  }

  return (
    <div className="App">
      <Header />
        {showActivities()}
    </div>
  );
}

export default App;
