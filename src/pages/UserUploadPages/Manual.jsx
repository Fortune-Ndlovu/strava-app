// Manual.js

import React from 'react';
import UploadActivitiesSideBar from '../../components/UploadActivitiesSideBar/UploadActivitiesSideBar';
import UserActivitiesManager from '../../services/UserActivitiesManager';

const Manual = () => {
  return (
    <div className="user-upload-container">
      <UploadActivitiesSideBar />
      {/* Render the form only */}
      <UserActivitiesManager showForm={true} />
    </div>
  );
};

export default Manual;
