import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import fortunendlovu from '../images/fortunendlovu.jpg';

function LeftDashboardAthleteSidebar({ athlete, activities, isLoading }) {
  return (
    <div >
      {isLoading ? (
        <p>LOADING...</p>
      ) : (
        <div>            
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={fortunendlovu} className="mx-auto d-block" />
              <Card.Body>
                <Card.Title>{athlete.firstname} {athlete.lastname}</Card.Title>
                <Card.Text>
                  {activities.length}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Latest Activity</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Your Training Log</Card.Link>
              </Card.Body>
            </Card>
        </div>
      )}
    </div>
  );
}

LeftDashboardAthleteSidebar.propTypes = {
  athlete: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    bio: PropTypes.string,
    city: PropTypes.string,
    // Add other properties as needed
  }).isRequired,
  activities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LeftDashboardAthleteSidebar;
