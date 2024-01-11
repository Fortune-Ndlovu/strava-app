import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ActivityDetails from "./ManualEntryFormComponents/ActivityDetails";
import ActivityStats from "./ManualEntryFormComponents/ActivityStats";
import "./ManualEntryForm.css";

const ManualEntryForm = ({ onCreateActivity }) => {
  const [newDistance, setNewDistance] = useState(0);
  
  const [newHour, setNewHour] = useState(0);
  const [newMinute, setNewMinute] = useState(0);
  const [newSecond, setNewSecond] = useState(0);
	
  const [newActivity, setNewActivity] = useState("");
	const [newDescription, setNewDescription] = useState("");

	const handleCreateActivity = () => {
		onCreateActivity({
			distance: newDistance,
      hour: newHour,
      minute: newMinute,
      second: newSecond,
			name: newActivity,
			description: newDescription,
		});
	};

	return (
		<div>
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
				/>

				<ActivityDetails
					titleValue={newActivity}
					titleOnChange={(e) => setNewActivity(e.target.value)}
					descriptionValue={newDescription}
					descriptionOnChange={(e) => setNewDescription(e.target.value)}
				/>

				<Button variant="primary" type="button" onClick={handleCreateActivity}>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default ManualEntryForm;
