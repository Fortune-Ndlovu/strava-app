import {React, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './MyActivitiesTable.css';

const MyActivitiesTable = ({ activities, onEditActivity }) => {
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

  return (
    <Table striped bordered hover>
      <tbody>
        {activities && activities.length > 0 ? (
          activities.map((activity, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedActivity.Activity}
                    onChange={(e) => handleInputChange("Activity", e.target.value)}
                  />
                ) : (
                  activity.Activity
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedActivity.Distance}
                    onChange={(e) => handleInputChange("Distance", e.target.value)}
                  />
                ) : (
                  activity.Distance
                )}
              </td>
              <td className="activities-table-buttons">
                {editIndex === index ? (
                  <>
                    <Button variant="success" onClick={() => handleSaveClick(index)}>Save</Button>
                    <Button variant="danger" onClick={handleCancelClick}>Cancel</Button>
                  </>
                ) : (
                  <Button variant="primary" onClick={() => handleEditClick(index)}>Edit</Button>
                )}
                {/* Add a "Delete" button as well */}
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