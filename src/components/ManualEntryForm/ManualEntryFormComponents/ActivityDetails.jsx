import React from 'react';
import Form from 'react-bootstrap/Form';

const ActivityDetails = ({ titleValue, titleOnChange, descriptionValue, descriptionOnChange }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Night Run"
          value={titleValue}
          onChange={titleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="How'd it go?"
          rows={3}
          value={descriptionValue}
          onChange={descriptionOnChange}
        />
      </Form.Group>
    </div>
  );
}

export default ActivityDetails;
