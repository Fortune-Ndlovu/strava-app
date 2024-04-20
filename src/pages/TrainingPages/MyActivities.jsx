// MyActivities.js

import React, { useState } from "react";
import FilteringMyActivitiesForm from "../../components/FilteringMyActivitiesForm/FilteringMyActivitiesForm";
import UserActivitiesManager from "../../services/UserActivitiesManager";

const MyActivities = () => {
	const [filters, setFilters] = useState({});

	const handleFilterChange = (newFilters) => {
		setFilters(newFilters);
	};

	return (
		<div className="dashboard-container">
			<div className="mt-5 container" id="myActivitiesContainer">
				<h1>My Activities</h1>
				<FilteringMyActivitiesForm onFilterChange={handleFilterChange} />
				{/* Pass filters to UserActivitiesManager */}
				<UserActivitiesManager showForm={false} filters={filters} />
			</div>
		</div>
	);
};

export default MyActivities;
