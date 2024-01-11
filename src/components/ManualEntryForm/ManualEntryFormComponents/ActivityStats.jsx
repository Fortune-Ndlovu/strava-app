import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ActivityStats = ({distanceValue, distanceOnChange}) => {
  return (
    <div>
        <Form.Label>Distance</Form.Label>
        <InputGroup className="mb-3">
            <Form.Control
                aria-label="Text input with dropdown button"
                type="number"
                value={distanceValue}
                onChange={distanceOnChange}
            />
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Kilometers</Dropdown.Item>
          <Dropdown.Item href="#">Meters</Dropdown.Item>
          <Dropdown.Item href="#">miles</Dropdown.Item>
          <Dropdown.Item href="#">yards</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </div >
  )
}

export default ActivityStats