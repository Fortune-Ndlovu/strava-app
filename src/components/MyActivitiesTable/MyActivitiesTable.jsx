import React, { useState } from "react";
import Table from "react-bootstrap/Table";
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
		<div  className="table-responsive">
			<h4>{activities.length} Activities </h4>
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
									<td>{activity.sport}</td>
									<td>{activity.date}</td>
									<td><a href={`/activity/${activity.id}`} className="link-of-unique-activity">{activity.name}</a></td>
									<td>{activity.time}</td>
									<td>{activity.distance}</td>
									<td>{activity.elevation}</td>
									<td className="activities-table-buttons">
										{editIndex === index ? (
											<></>
										) : (
											<>
													<a href="#" className="link-of-unique-activity" onClick={() => handleEditClick(index)}>Edit</a>
													<a href="#" className="link-of-unique-activity" onClick={() => handleDeleteClick(index)}>Delete</a>

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
