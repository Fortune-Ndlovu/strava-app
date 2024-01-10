import React from 'react';
import MyActivitiesForm from '../../components/FilteringMyActivitiesForm/FilteringMyActivitiesForm';
// import MyActivitiesTable from '../../components/MyActivitiesTable/MyActivitiesTable';
import UserActivitiesManager    from '../../services/UserActivitiesManager';

const MyActivities = () => {
    return (
        <div className="dashboard-container">
            <div className="mt-5 container">
                <h1>
                    MyActivities
                </h1>
                <MyActivitiesForm />
                <h4>10 Activities</h4>
                {/* <MyActivitiesTable /> */}
                <UserActivitiesManager/>
            </div>
        </div>
    )
}

export default MyActivities
