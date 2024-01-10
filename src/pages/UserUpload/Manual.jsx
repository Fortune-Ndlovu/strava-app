import React from 'react'
import UploadActivitiesSideBar from '../../components/UploadActivitiesSideBar/UploadActivitiesSideBar';
import '../../components/UploadActivitiesSideBar/UploadActivitiesSideBar.css';
import ManualEntryForm from '../../components/ManualEntryForm/ManualEntryForm';

const Manual = () => {
  return (
    <div className="user-upload-container">
      <UploadActivitiesSideBar />
     
     <ManualEntryForm/>
    </div>
  )
}

export default Manual
