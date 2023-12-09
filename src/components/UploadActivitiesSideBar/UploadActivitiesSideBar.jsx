import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

const UploadActivitiesSideBar = () => {
    return (
        <div className="upload-activities-sidebar-container">
            <Nav className="flex-column" variant="pills" defaultActiveKey="/file">
                <Nav.Item>
                    <Link to="/device" data-rr-ui-event-key="/device" className="nav-link">Device</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/file" data-rr-ui-event-key="/file" className="nav-link">File</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/manual" data-rr-ui-event-key="/manual" className="nav-link">Manual</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/mobile" data-rr-ui-event-key="/mobile" className="nav-link">Mobile</Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default UploadActivitiesSideBar
