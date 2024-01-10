import React, {useState} from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import './MyActivitiesForm.css';
const MyActivitiesForm = () => {
    const [selectedOption, setSelectedOption] = useState("");
    // Applying the ability to select the items from the select options
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
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
                            <div className="select-input">
                                <select className="form-select"
                                    value={selectedOption}
                                    onChange={handleOptionChange}>
                                    <option value="All Sport Types">All Sport Types</option>
                                    <option value="Ride">Ride</option>
                                    <option value="Run">Run</option>
                                    <option value="Swim">Swim</option>
                                    <option value="Hike">Hike</option>
                                    <option value="Walk">Walk</option>
                                    <option value="AlpineSki">Alpine Ski</option>
                                    <option value="BackcountrySki">Backcountry Ski</option>
                                    <option value="Canoeing">Canoe</option>
                                    <option value="Crossfit">Crossfit</option>
                                    <option value="EBikeRide">E-Bike Ride</option>
                                    <option value="Elliptical">Elliptical</option>
                                    <option value="Golf">Golf</option>
                                    <option value="Handcycle">Handcycle</option>
                                    <option value="IceSkate">Ice Skate</option>
                                    <option value="InlineSkate">Inline Skate</option>
                                    <option value="Kayaking">Kayaking</option>
                                    <option value="Kitesurf">Kitesurf</option>
                                    <option value="NordicSki">Nordic Ski</option>
                                    <option value="RockClimbing">Rock Climb</option>
                                    <option value="RollerSki">Roller Ski</option>
                                    <option value="Rowing">Rowing</option>
                                    <option value="Sail">Sail</option>
                                    <option value="Skateboard">Skateboard</option>
                                    <option value="Snowboard">Snowboard</option>
                                    <option value="Snowshoe">Snowshoe</option>
                                    <option value="Soccer">Football (Soccer)</option>
                                    <option value="StairStepper">Stair-Stepper</option>
                                    <option value="StandUpPaddling">Stand Up Paddling</option>
                                    <option value="Surfing">Surfing</option>
                                    <option value="Velomobile">Velomobile</option>
                                    <option value="VirtualRide">Virtual Ride</option>
                                    <option value="VirtualRun">Virtual Run</option>
                                    <option value="WeightTraining">Weight Training</option>
                                    <option value="Wheelchair">Wheelchair</option>
                                    <option value="Windsurf">Windsurf</option>
                                    <option value="Workout">Workout</option>
                                    <option value="Yoga">Yoga</option>
                                </select>
                            </div>

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
