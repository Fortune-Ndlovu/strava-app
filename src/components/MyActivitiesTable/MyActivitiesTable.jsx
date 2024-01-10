import React from 'react';
import Table from 'react-bootstrap/Table';
import './MyActivitiesTable.css';

const MyActivitiesTable = ({ activities }) => {
 return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Activity</th>
          <th>Distance</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {activities && activities.length > 0 ? (
          activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.Activity}</td>
              <td>{activity.Distance}</td>
              <td className="activities-table-buttons">
                <a href={`#edit-${index}`}>Edit</a>
                <a href={`#delete-${index}`}>Delete</a>
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
