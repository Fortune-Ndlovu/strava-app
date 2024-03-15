import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SportSelection from "../FilteringMyActivitiesForm/SportSelection";

const EditableRow = ({
	editedActivity,
	onSaveClick,
	onCancelClick,
	handleInputChange,
	handleSportChange,
}) => {
	return (
		<tr>
			<td colSpan="7">
				<div className="editable-row">
					<Row>
						<Col>
							<div className="editable-input">
								<Form.Group>
									<Form.Label>Title</Form.Label>
									<Form.Control
										type="text"
										value={editedActivity.name}
										onChange={(e) => handleInputChange("name", e.target.value)}
									/>
								</Form.Group>
							</div>

							<div className="editable-input">
								<Form.Group>
									<Form.Label>Sport</Form.Label>
								</Form.Group>
								<SportSelection
									className="edit-activity-form-input-style"
									selectedOption={editedActivity.sport}
									handleOptionChange={handleSportChange}
								/>
							</div>
						</Col>
						<Col>
							<div className="editable-input">
								<Form.Group>
									<Form.Label>Description</Form.Label>
									<Form.Control
										type="text"
										as="textarea"
										placeholder="How'd it go?"
										rows={3}
										value={editedActivity.description}
										onChange={(e) =>
											handleInputChange("description", e.target.value)
										}
									/>
								</Form.Group>
							</div>
						</Col>
						<Col>
							<div>
								<p>{editedActivity.date}</p>
								<p>{editedActivity.distance}</p>
								<p>{editedActivity.time}</p>
								<p>{editedActivity.elevation}</p>
							</div>
						</Col>
						<Col>
							<div className="editable-buttons">
								<Button variant="success" onClick={onSaveClick}>
									Save
								</Button>

								<Button variant="link"
									className="link-of-unique-activity"
									onClick={onCancelClick}
								>
									Cancel
								</Button>
								<br></br>
								<Link
									to={`/home/activity/${editedActivity.id}/edit`}
									className="link-of-unique-activity"
								>
									Edit more options
								</Link>
							</div>
						</Col>
					</Row>
				</div>
			</td>
		</tr>
	);
};

export default EditableRow;
