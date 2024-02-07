// MyActivities.js

import React from 'react';
import FilteringMyActivitiesForm from '../../components/FilteringMyActivitiesForm/FilteringMyActivitiesForm';
import UserActivitiesManager from '../../services/UserActivitiesManager';

const MyActivities = () => {
  return (
    <div className="dashboard-container">
      <div className="mt-5 container">
        <h1>MyActivities</h1>
        <FilteringMyActivitiesForm />
        {/* Render the table only */}
        <UserActivitiesManager showForm={false}/>
      </div>
    </div>
  );
};

export default MyActivities;
