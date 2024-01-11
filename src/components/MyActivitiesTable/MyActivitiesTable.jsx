import {React, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './MyActivitiesTable.css';

const MyActivitiesTable = ({ activities, onEditActivity,  onDeleteActivity }) => {
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
                    value={editedActivity.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                ) : (
                  activity.name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedActivity.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                ) : (
                  activity.description
                )}
              </td>
              <td className="activities-table-buttons">
                {editIndex === index ? (
                  <>
                    <Button variant="success" onClick={() => handleSaveClick(index)}>Save</Button>
                    <Button variant="danger" onClick={handleCancelClick}>Cancel</Button>
                  </>
                ) : (
                    <>
                      <Button variant="primary" onClick={() => handleEditClick(index)}>Edit</Button>
                      <Button variant="danger" onClick={() => handleDeleteClick(index)}>Delete</Button>
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