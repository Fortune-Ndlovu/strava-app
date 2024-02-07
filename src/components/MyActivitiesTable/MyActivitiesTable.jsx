import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import EditableRow from "./EditableRow";
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

	const handleSportChange = (sport) => {
    setEditedActivity((prev) => ({ ...prev, sport }));
  };

	return (
		<div style={{ overflowX: "auto" }}>
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
							<React.Fragment key={index}>
								<tr>
									{/* Your normal row content */}
									<td>{activity.sport}</td>
									<td>{activity.date}</td>
									<td>{activity.name}</td>
									<td>{activity.time}</td>
									<td>{activity.distance}</td>
									<td>{activity.elevation}</td>
									{/* Add other cells */}
									<td className="activities-table-buttons">
										{editIndex === index ? (
											<></>
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
								{editIndex === index && (
									<EditableRow
										editedActivity={editedActivity}
										onSaveClick={() => handleSaveClick(index)}
										onCancelClick={handleCancelClick}
										handleInputChange={handleInputChange}
										 handleSportChange={handleSportChange} 
									/>
								)}
							</React.Fragment>
						))
					) : (
						<tr>
							<td colSpan="3">No activities found</td>
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	);
};
export default MyActivitiesTable;
