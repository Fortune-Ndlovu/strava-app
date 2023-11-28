import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CenterDashboardAthleteSidebar({athlete, activities, isLoading}) {
    return (
        <div> {
            isLoading ? (
                <p>LOADING...</p>
            ) : (
                <div>
                    <div className="languages-dropdown">
                        <select name="languages" id="languages-select">
                            <option value="English (US)">English (US)</option>
                            <option value="British English">British English</option>
                            <option value="Deutsch">Deutsch</option>
                            <option value="English (US)">English (US)</option>
                            <option value="español">español</option>
                            <option value="español latinoamericano">español latinoamericano</option>
                            <option value="français">français</option>
                            <option value="italiano">italiano</option>
                            <option value="Nederlands">Nederlands</option>
                            <option value="português">português</option>
                            <option value="português do Brasil">português do Brasil</option>
                            <option value="русский">русский</option>
                            <option value="日本語">日本語</option>
                            <option value="简体中文">简体中文</option>
                            <option value="繁體中文">繁體中文</option>
                        </select>
                    </div>
                    <Card style={
                        {width: '40rem'}
                    }>
                        <Card.Body>
                            <Card.Title>
                                <p>Name: {
                                    athlete.firstname
                                }
                                    {
                                    athlete.lastname
                                }</p>
                            </Card.Title>
                            <Card.Text>
                                <p>Number of Activities: {
                                    activities.length
                                }</p>
                                <Card.Img variant="top" src="holder.js/100px180"/>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        } </div>
    );
}

CenterDashboardAthleteSidebar.propTypes = {
    athlete: PropTypes.shape(
        {
            firstname: PropTypes.string,
            lastname: PropTypes.string,
            bio: PropTypes.string,
            city: PropTypes.string,
            // Add other properties as needed
        }
    ).isRequired,
    activities: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default CenterDashboardAthleteSidebar;
