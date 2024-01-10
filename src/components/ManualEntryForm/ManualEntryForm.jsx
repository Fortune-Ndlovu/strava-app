import React from 'react'
import Form from 'react-bootstrap/Form';
import './ManualEntryForm.css'

const ManualEntryForm = () => {
    return (
      <div>
        <h1>Manual Entry</h1>
        <Form id="manualEntryForm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Night Run" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="How'd it go?" rows={3} />
        </Form.Group>
        </Form>
    </div>
  )
}

export default ManualEntryForm