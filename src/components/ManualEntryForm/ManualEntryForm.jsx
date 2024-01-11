import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ActivityDetails from './ManualEntryFormComponents/ActivityDetails';
import ActivityStats from './ManualEntryFormComponents/ActivityStats';
import './ManualEntryForm.css';

const ManualEntryForm = ({ onCreateActivity }) => {
  const [newDistance, setNewDistance] = useState(0)

  const [newActivity, setNewActivity] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleCreateActivity = () => {
    onCreateActivity({distance: newDistance, name: newActivity, description: newDescription });
    setNewDistance(0)
    setNewActivity("");
    setNewDescription("");
  };

  return (
    <div>
      <h1>Manual Entry</h1>
      <Form id="manualEntryForm">

        <ActivityStats
          distanceValue={newDistance}
          distanceOnChange={(e) => setNewDistance(e.target.value)}
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
