// Endpoints URLs:
// Defining two constant variables which hold the URLs for the Strava API endpoints to fetch activities and athlete data.
const callActivities = "https://www.strava.com/api/v3/athlete/activities";
const callAthlete = "https://www.strava.com/api/v3/athlete";

// Fetching our activities data and parsing it into json format
export async function getActivities(accessToken) {
  const response = await fetch(`${callActivities}?access_token=${accessToken}`);
  const data = await response.json();
  return data;
}

// Fetching our athlete data and parsing it into json format
export async function getAthleteData(accessToken) {
  const response = await fetch(`${callAthlete}?access_token=${accessToken}`);
  const data = await response.json();
  return data;
}
