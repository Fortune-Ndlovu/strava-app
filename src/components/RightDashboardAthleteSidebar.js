import React from 'react';
import PropTypes from 'prop-types';

function RightDashboardAthleteSidebar({ athlete, activities, isLoading }) {
  return (
    <div >
      {isLoading ? (
        <p>LOADING...</p>
      ) : (
        <div>
          <div>
            <p>Number of Activities: {activities.length}</p>
          </div>
          <p>Name: {athlete.firstname} {athlete.lastname}</p>
          <p>Bio: {athlete.bio}</p>
          <p>City: {athlete.city}</p>
        </div>
      )}
    </div>
  );
}

RightDashboardAthleteSidebar.propTypes = {
  athlete: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    bio: PropTypes.string,
    city: PropTypes.string,
    // Add other properties as needed
  }).isRequired,
  activities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RightDashboardAthleteSidebar;
