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
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td className="activities-table-buttons">
                        <a href='#home'>Edit</a>
                        <a href='#home'>Delete</a>
                        <select name="share" id="shareTableBtn">
                            <option value="share">Share</option>
                            <option value="On Facebook">On Facebook</option>
                            <option value="On Twitter">On Twitter</option>
                            <option value="Embed on Blog">Embed on Blog</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td className="activities-table-buttons">
                        <a href='#home'>Edit</a>
                        <a href='#home'>Delete</a>
                        <select name="share" id="shareTableBtn">
                            <option value="share">Share</option>
                            <option value="On Facebook">On Facebook</option>
                            <option value="On Twitter">On Twitter</option>
                            <option value="Embed on Blog">Embed on Blog</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td className="activities-table-buttons">
                        <a href='#home'>Edit</a>
                        <a href='#home'>Delete</a>
                        <select name="share" id="shareTableBtn">
                            <option value="share">Share</option>
                            <option value="On Facebook">On Facebook</option>
                            <option value="On Twitter">On Twitter</option>
                            <option value="Embed on Blog">Embed on Blog</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>@twitter</td>
                    <td colSpan={1}>Larry the Bird</td>
                    <td>@mdo</td>
                    <td colSpan={1}>Larry the Bird</td>
                    <td>@mdo</td>
                    <td className="activities-table-buttons">
                        <a href='#home'>Edit</a>
                        <a href='#home'>Delete</a>
                        <select name="share" id="shareTableBtn">
                            <option value="share">Share</option>
                            <option value="On Facebook">On Facebook</option>
                            <option value="On Twitter">On Twitter</option>
                            <option value="Embed on Blog">Embed on Blog</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default MyActivitiesTable
