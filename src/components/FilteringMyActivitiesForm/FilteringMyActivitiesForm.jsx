import React, {useState} from "react";
import {Form, Button, Col, Row} from "react-bootstrap";
import SportSelection from "./SportSelection";
import "./FilteringMyActivitiesForm.css";
import "../../styles/common/buttons.css";
const MyActivitiesForm = () => {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div>
            <Form className="my-activities-form">
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formBasicKeywords">
                            <Form.Label>Keywords</Form.Label>
                            <div className="keyword-form-group" id="keywordsActivityInputContainer">
                                <Form.Control type="text" placeholder="My Morning Workout" id="keywordsActivityInput"/>
                                <Button variant="primary" type="submit" id="filteringActivitiesBtn">
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
                                handleOptionChange={(value) => setSelectedOption(value)}
                            />

                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default MyActivitiesForm
