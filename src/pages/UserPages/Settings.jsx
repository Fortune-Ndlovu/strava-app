import React from 'react';
import UserProfileForm from "../../components/UserProfileForm/UserProfileForm";
import "../../styles/UserPages/Settings.css";

const Settings = () => {
    return (
        <div className="settings-wrapper">
            <h1>My Profile</h1>
            <UserProfileForm />
        </div>
    )
}

export default Settings
