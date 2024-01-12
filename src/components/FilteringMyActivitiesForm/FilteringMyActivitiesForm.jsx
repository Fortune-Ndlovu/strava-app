import React, {useState} from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import SportSelection from './SportSelection';
import './FilteringMyActivitiesForm.css';
const MyActivitiesForm = () => {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div>
            <h5>Filtering Activities form</h5>
            <Form className="my-activities-form">
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formBasicKeywords">
                            <Form.Label>Keywords</Form.Label>
                            <div className="keyword-form-group">
                                <Form.Control type="text" placeholder="My Morning Workout"/>
                                <Button variant="primary" type="submit">
                                    Search
                                </Button>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formBasicSport">
                            <Form.Label>Sport</Form.Label>
                           <SportSelection
                                selectedOption={selectedOption}
                                handleOptionChange={(e) => setSelectedOption(e.target.value)}
                            />

                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formBasicCheckboxes">
                            <Form.Check type="checkbox" label="Commute" className="mb-2"/>
                            <Form.Check type="checkbox" label="Private"/>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default MyActivitiesForm
