import React from 'react';
import Table from 'react-bootstrap/Table';
import './MyActivitiesTable.css';

const MyActivitiesTable = () => {
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
                <tr>
                    <td>Run</td>
                    <td>Tue, 9/19/2023</td>
                    <td>Morning Run</td>
                    <td>10:30</td>
                    <td>1.93</td>
                    <td>31 m</td>
                    <td className="activities-table-buttons">
                        <a href='#home'>Edit</a>
                        <a href='#home'>Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>Run</td>
                    <td>Mon, 9/18/2023</td>
                    <td>Morning Run</td>
                    <td>3:54</td>
                    <td>0.66 km</td>
                    <td>12 m</td>
                    <td className="activities-table-buttons">
                        <a href='#home'>Edit</a>
                        <a href='#home'>Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>Workout</td>
                    <td>Wed, 8/16/2023</td>
                    <td>Morning Workout</td>
                    <td>3:36</td>
                    <td>0 km</td>
                    <td>0 m</td>
                    <td className="activities-table-buttons">
                        <a href='#home'>Edit</a>
                        <a href='#home'>Delete</a>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default MyActivitiesTable
