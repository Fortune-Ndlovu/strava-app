import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import SportSelection from "../../FilteringMyActivitiesForm/SportSelection";

const ActivityDetails = ({
	titleValue,
	titleOnChange,
	descriptionValue,
	descriptionOnChange,
	sportSelectionValue,
	sportSelectionOnChange,
	dateValue,
	dateOnChange,
	timeValue,
	timeOnChange,
}) => {
	return (
		<div>
			<Row>
				<Col sm={4}>
				<Form.Group className="mb-3" id="sportSelectionInput" controlId="exampleForm.ControlInput1">
					<Form.Label>Sport</Form.Label>
					<SportSelection
						selectedOption={sportSelectionValue}
						handleOptionChange={sportSelectionOnChange}
					/>
				</Form.Group>
				</Col>
				<Col>
					<Form.Group>
					<Form.Label>Date & Time</Form.Label>
						<InputGroup className="mb-3">
						<Form.Control
							aria-label="date"
							type="date"
							placeholder="hr"
							value={dateValue}
								onChange={dateOnChange}
								id="dateInput"
						/>
						<Form.Control
							aria-label="time"
							type="time"
							placeholder="min"
							value={timeValue}
								onChange={timeOnChange}
								id="timeInput"
						/>
						</InputGroup>
						</Form.Group>
				</Col>
			</Row>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Night Run"
					value={titleValue}
					onChange={titleOnChange}
					id="titleInput"
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
					id="descriptionInput"
				/>
			</Form.Group>
		</div>
	);
};

export default ActivityDetails;
