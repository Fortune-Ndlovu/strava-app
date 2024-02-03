import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import ActivityDetails from "./ManualEntryFormComponents/ActivityDetails";
import ActivityStats from "./ManualEntryFormComponents/ActivityStats";
import "./ManualEntryForm.css";

const ManualEntryForm = ({ onCreateActivity }) => {
	const navigate = useNavigate(); // Hook to navigate between pages

	const [newDistance, setNewDistance] = useState(0);
	const [newHour, setNewHour] = useState(0);
	const [newMinute, setNewMinute] = useState(0);
	const [newSecond, setNewSecond] = useState(0);
	const [newElevation, setNewElevation] = useState(0);

	const [newSportSelection, setNewSportSelection] = useState("");
	const [newDateValue, setNewDateValue] = useState("");
	const [newTimeValue, setNewTimeValue] = useState("");
	const [newActivity, setNewActivity] = useState("");
	const [newDescription, setNewDescription] = useState("");

	const handleCreateActivity = async () => {
  try {
    const createdActivity = await onCreateActivity({
      distance: newDistance,
      hour: newHour,
      minute: newMinute,
      second: newSecond,
      elevation: newElevation,
      sport: newSportSelection,
      date: newDateValue,
      time: newTimeValue,
      name: newActivity,
      description: newDescription,
    });

    console.log("Created Activity:", createdActivity);

    // Redirect to the new activity details page using the id from the created activity
    if (createdActivity && createdActivity.id) {
      navigate(`/activity/${createdActivity.id}`);
    }
  } catch (error) {
    console.error("Error creating activity:", error);
  }
};


	return (
		<div>
			<Container>
				<h1>Manual Entry</h1>
				<Form id="manualEntryForm">
					<ActivityStats
						distanceValue={newDistance}
						distanceOnChange={(e) => setNewDistance(e.target.value)}
						hourValue={newHour}
						hourOnChange={(e) => setNewHour(e.target.value)}
						minuteValue={newMinute}
						minuteOnChange={(e) => setNewMinute(e.target.value)}
						secondValue={newSecond}
						secondOnChange={(e) => setNewSecond(e.target.value)}
						elevationValue={newElevation}
						elevationOnChange={(e) => setNewElevation(e.target.value)}
					/>
					<hr></hr>
					<ActivityDetails
						sportSelectionValue={newSportSelection}
						sportSelectionOnChange={(e) => setNewSportSelection(e.target.value)}
						dateValue={newDateValue}
						dateOnChange={(e) => setNewDateValue(e.target.value)}
						timeValue={newTimeValue}
						timeOnChange={(e) => setNewTimeValue(e.target.value)}
						titleValue={newActivity}
						titleOnChange={(e) => setNewActivity(e.target.value)}
						descriptionValue={newDescription}
						descriptionOnChange={(e) => setNewDescription(e.target.value)}
					/>

					<Button
						variant="primary"
						type="button"
						onClick={handleCreateActivity}
					>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default ManualEntryForm;
