import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import SportSelection from "./SportSelection";
import "./FilteringMyActivitiesForm.css";
import "../../styles/common/buttons.css";

const FilteringMyActivitiesForm = ({ onFilterChange }) => {
	const [selectedOption, setSelectedOption] = useState("");
	const [keywords, setKeywords] = useState("");

	const handleKeywordChange = (event) => {
		setKeywords(event.target.value);
	};

	const handleFilterSubmit = (event) => {
		event.preventDefault();
		// Prepare filters object
		const filters = {
			sport: selectedOption,
			keywords: keywords.trim(), // Remove leading/trailing whitespace
		};
		// Pass filters to parent component
		onFilterChange(filters);
	};

	return (
		<div>
			<Form className="my-activities-form" onSubmit={handleFilterSubmit}>
				<Row className="mb-3">
					<Col md={6}>
						<Form.Group id="formBasicKeywords">
							<Form.Label>Keywords</Form.Label>
							<div
								className="keyword-form-group"
								id="keywordsActivityInputContainer"
							>
								<Form.Control
									type="text"
									placeholder="My Morning Workout"
									id="keywordsActivityInput"
									value={keywords}
									onChange={handleKeywordChange}
								/>
								<Button
									variant="primary"
									type="button"
								id="filteringActivitiesBtn"
                                >
									Search
								</Button>
							</div>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group id="formBasicSport">
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
	);
};

export default FilteringMyActivitiesForm;
