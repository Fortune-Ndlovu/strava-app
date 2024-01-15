import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import './UserActivitiesDropdownToggle.css';

const UserActivitiesDropdownToggle = () => {
	const [selectedUserActivityUI, setSelectedUserActivityUI] =
		useState("Following");

	const handleSelectedActivityUIChange = (value) => {
		setSelectedUserActivityUI(value);
	};
	return (
		<div>
			<Dropdown id="userActivities">
				<Dropdown.Toggle variant="success" id="userActivities-dropdownBtn-list">
					{selectedUserActivityUI}
                    {/* <img src={dropdown_icon} alt="user activities dropdown toggle dropdown icon" className="feedUI-dropdownUp-icon" /> */}
                        <svg className="feedUI-dropdownUp-icon" height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
				</Dropdown.Toggle>
				<Dropdown.Menu id="userActivities-btn-list-dropdown">
					<Dropdown.Item
						href="#/action-1"
						className="userActivities-dropDown-link"
						onClick={() => handleSelectedActivityUIChange("Following")}
						value="Following"
					>
						Following
					</Dropdown.Item>
					<Dropdown.Item
						href="#/action-1"
						className="userActivities-dropDown-link"
						onClick={() =>
							handleSelectedActivityUIChange("Waterford Viking Marathon")
						}
						value="Waterford Viking Marathon"
					>
						Waterford Viking Marathon
					</Dropdown.Item>
					<Dropdown.Item
						href="#/action-2"
						className="userActivities-dropDown-link"
						onClick={() => handleSelectedActivityUIChange("WIT Arena")}
						value="WIT Arena"
					>
						WIT Arena
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default UserActivitiesDropdownToggle;
