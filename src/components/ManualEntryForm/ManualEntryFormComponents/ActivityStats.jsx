import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ActivityStats = ({
	distanceValue,
	distanceOnChange,
	hourValue,
	hourOnChange,
	minuteValue,
	minuteOnChange,
	secondValue,
	secondOnChange,
	elevationValue,
	elevationOnChange,
}) => {
	return (
		<div>
				<Row>
					<Col className="activity-stats-col">
						<Form.Label>Distance</Form.Label>
						<InputGroup className="mb-3">
							<Form.Control
								aria-label="Text input with dropdown button"
								type="number"
								value={distanceValue}
							onChange={distanceOnChange}
							id="distanceInput"
							/>
							<DropdownButton
								variant="outline-secondary"
								title="Dropdown"
								id="input-group-dropdown-2"
								align="end"
							>
								<Dropdown.Item href="#">Kilometers</Dropdown.Item>
								<Dropdown.Item href="#">Meters</Dropdown.Item>
								<Dropdown.Item href="#">miles</Dropdown.Item>
								<Dropdown.Item href="#">yards</Dropdown.Item>
							</DropdownButton>
						</InputGroup>
					</Col>

					<Col className="activity-stats-col">
						<Form.Label>Duration</Form.Label>
						<InputGroup className="mb-3" type="number">
							<Form.Control
								aria-label="hour"
								type="number"
								placeholder="hr"
								value={hourValue}
							onChange={hourOnChange}
							id="duration-input-hr"
							/>
							<Form.Control
								aria-label="minute"
								type="number"
								placeholder="min"
								value={minuteValue}
							onChange={minuteOnChange}
							id="duration-input-min"
							/>
							<Form.Control
								aria-label="second"
								type="number"
								placeholder="s"
								value={secondValue}
							onChange={secondOnChange}
							id="duration-input-s"
							/>
						</InputGroup>
					</Col>
					<Col className="activity-stats-col">
						<Form.Label>Elevation</Form.Label>
						<InputGroup className="mb-3">
							<Form.Control
								aria-label="Text input with dropdown button"
								type="number"
								value={elevationValue}
							onChange={elevationOnChange}
							id="elevation-input"
							/>
							<DropdownButton
								variant="outline-secondary"
								title="Dropdown"
								id="input-group-dropdown-2"
							align="end"
							className="duration-input"
							>
								<Dropdown.Item href="#">Meters</Dropdown.Item>
								<Dropdown.Item href="#">feet</Dropdown.Item>
							</DropdownButton>
						</InputGroup>
					</Col>
				</Row>
		</div>
	);
};

export default ActivityStats;
