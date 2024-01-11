import { React, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./MyActivitiesTable.css";

const MyActivitiesTable = ({
	activities,
	onEditActivity,
	onDeleteActivity,
}) => {
	const [editIndex, setEditIndex] = useState(null);
	const [editedActivity, setEditedActivity] = useState({});

	const handleEditClick = (index) => {
		setEditIndex(index);
		setEditedActivity({ ...activities[index] });
	};

	const handleSaveClick = (index) => {
		onEditActivity(index, editedActivity);
		setEditIndex(null);
		setEditedActivity({});
	};

	const handleCancelClick = () => {
		setEditIndex(null);
		setEditedActivity({});
	};

	const handleInputChange = (key, value) => {
		setEditedActivity((prev) => ({ ...prev, [key]: value }));
	};

	const handleDeleteClick = (index) => {
		onDeleteActivity(index);
	};

	// Function to format time values with leading zeros
	const formatTimeValue = (value) => {
		// Ensure the value is a valid number and within a reasonable range
		const numericValue = parseInt(value, 10);
		if (!isNaN(numericValue) && numericValue >= 0) {
			// Pad with leading zero if necessary
			return numericValue < 10 ? `0${numericValue}` : `${numericValue}`;
		}
		// Return an empty string for invalid values
		return "";
	};

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Sport</th>
					<th>Date</th>
					<th>Title</th>
					<th>Time</th>
					<th>Distance</th>
					<th>Elevation</th>
				</tr>
			</thead>
			<tbody>
				{activities && activities.length > 0 ? (
					activities.map((activity, index) => (
						<tr key={index}>
							{/* Placeholder cell */}
							<td></td>

							{/* Placeholder cell */}
							<td></td>

							{/* Name cell */}
							<td>
								{editIndex === index ? (
									<input
										type="text"
										value={editedActivity.name}
										onChange={(e) => handleInputChange("name", e.target.value)}
									/>
								) : (
									activity.name
								)}
							</td>

							{/* Time cell */}
							<td>
								{editIndex === index ? (
									<>
										{editedActivity.hour && (
											<>
												<input
													type="text"
													value={formatTimeValue(editedActivity.hour)}
													onChange={(e) =>
														handleInputChange("hour", e.target.value)
													}
												/>
												:
											</>
										)}
										<input
											type="text"
											value={formatTimeValue(editedActivity.minute)}
											onChange={(e) =>
												handleInputChange("minute", e.target.value)
											}
										/>
										:
										<input
											type="text"
											value={formatTimeValue(editedActivity.second)}
											onChange={(e) =>
												handleInputChange("second", e.target.value)
											}
										/>
									</>
								) : (
									<>
										{activity.hour && <>{formatTimeValue(activity.hour)}:</>}
										{formatTimeValue(activity.minute)}:
										{formatTimeValue(activity.second) || "00"}
									</>
								)}
							</td>

							{/* Distance cell */}
							<td>
								{editIndex === index ? (
									<input
										type="text"
										value={editedActivity.distance}
										onChange={(e) =>
											handleInputChange("distance", e.target.value)
										}
									/>
								) : (
									activity.distance
								)}
							</td>

							{/* Elevation cell */}
							<td>
								{" "}
								{editIndex === index ? (
									<input
										type="text"
										value={editedActivity.elevation}
										onChange={(e) =>
											handleInputChange("elevation", e.target.value)
										}
									/>
								) : (
									activity.elevation
								)}
							</td>
							{/* Description cell */}
							<td>
								{editIndex === index ? (
									<input
										type="text"
										value={editedActivity.description}
										onChange={(e) =>
											handleInputChange("description", e.target.value)
										}
									/>
								) : (
									activity.description
								)}
							</td>

							{/* Button cell */}
							<td className="activities-table-buttons">
								{editIndex === index ? (
									<>
										<Button
											variant="success"
											onClick={() => handleSaveClick(index)}
										>
											Save
										</Button>
										<Button variant="danger" onClick={handleCancelClick}>
											Cancel
										</Button>
									</>
								) : (
									<>
										<Button
											variant="primary"
											onClick={() => handleEditClick(index)}
										>
											Edit
										</Button>
										<Button
											variant="danger"
											onClick={() => handleDeleteClick(index)}
										>
											Delete
										</Button>
									</>
								)}
							</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan="3">No activities found</td>
					</tr>
				)}
			</tbody>
		</Table>
	);
};

export default MyActivitiesTable;
