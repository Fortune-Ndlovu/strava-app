import React from "react";
import Button from "react-bootstrap/Button";
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
					<div className="editable-input">
						Title:{" "}
						<input
							type="text"
							value={editedActivity.name}
							onChange={(e) => handleInputChange("name", e.target.value)}
						/>
					</div>
					<div className="editable-input">
						Sport:{" "}
						
						<SportSelection
							className="edit-activity-form-input-style"
							selectedOption={editedActivity.sport}
                            handleOptionChange={handleSportChange}
						/>
					</div>
					<div className="editable-input">
						Description:{" "}
						<input
							type="text"
							value={editedActivity.description}
							onChange={(e) => handleInputChange("description", e.target.value)}
						/>
					</div>
					<div>
						<p>{editedActivity.date}</p>
						<p>{editedActivity.distance}</p>
						<p>{editedActivity.time}</p>
						<p>{editedActivity.elevation}</p>
					</div>
					<div className="editable-buttons">
						<Button variant="success" onClick={onSaveClick}>
							Save
						</Button>
						<Button variant="danger" onClick={onCancelClick}>
							Cancel
						</Button>
						<a href="#home">Edit more options</a>
					</div>
				</div>
			</td>
		</tr>
	);
};

export default EditableRow;
