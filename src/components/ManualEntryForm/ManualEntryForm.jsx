import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './ManualEntryForm.css';

const ManualEntryForm = ({ onCreateActivity }) => {
  const [newActivity, setNewActivity] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleCreateActivity = () => {
    onCreateActivity({ name: newActivity, description: newDescription });
    setNewActivity("");
    setNewDescription("");
  };

  return (
    <div>
      <h1>Manual Entry</h1>
      <Form id="manualEntryForm">


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Night Run"
            value={newActivity}
            onChange={(e) => setNewActivity(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="How'd it go?"
            rows={3}
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleCreateActivity}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ManualEntryForm;
