import React, { useState } from "react";
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
	const [selectedDistanceUI, setSelectedUDistanceUI] = useState("Kilometers");
	const [selectedElevationUI, setSelectedElevationUI] = useState("Meters");

	const handleSelectedDistanceUI = (value) => {
		setSelectedUDistanceUI(value);
	};

	const handleSelectedElevationUI = (value) => {
		setSelectedElevationUI(value);
	};

	return (
		<div>
			<Row>
				<Col className="activity-stats-col">
					<Form.Label>Distance</Form.Label>
					<InputGroup id="distanceInputWrapper">
						<Form.Control
							aria-label="Text input with dropdown button"
							type="number"
							value={distanceValue}
							onChange={distanceOnChange}
							id="distanceInput"
						/>
						<DropdownButton
							variant="outline-secondary"
							title={selectedDistanceUI}
							id="distanceDropdown"
							align="end"
						>
							<Dropdown.Item
								onClick={() => handleSelectedDistanceUI("Kilometers")}
							>
								Kilometers
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSelectedDistanceUI("Meters")}>
								Meters
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSelectedDistanceUI("Miles")}>
								Miles
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSelectedDistanceUI("Yard")}>
								Yards
							</Dropdown.Item>
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
					<InputGroup className="mb-3" id="elevationInputWrapper">
						<Form.Control
							aria-label="Text input with dropdown button"
							type="number"
							value={elevationValue}
							onChange={elevationOnChange}
							id="elevation-input"
						/>
						<DropdownButton
							variant="outline-secondary"
							title={selectedElevationUI}
							id="elevationDropdown"
							align="end"
							className="duration-input"
						>
							<Dropdown.Item
								onClick={() => handleSelectedElevationUI("Meters")}
							>
								Meters
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSelectedElevationUI("Feet")}>
								Feet
							</Dropdown.Item>
						</DropdownButton>
					</InputGroup>
				</Col>
			</Row>
		</div>
	);
};

export default ActivityStats;
