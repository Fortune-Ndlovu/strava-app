import React, { useState } from 'react';

// functional component that takes a single prop called onCancel
const SearchBar = ({ onCancel }) => {

    // creating a piece of state with its initial value being an empty string
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedOption, setSelectedOption] = useState(""); // New state for the selected option

    // Called whenever the value of the input field changes
    // using setSearchQuery function to update the searchQuery state with the new value of the input field
    const handleSearchChange = (event) => { 
        setSearchQuery(event.target.value);
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }


    // Called whenever the Cancel button is clicked
    // It clears the searchQuery state by setting it to empty string and then calls the onCancel function that was passed as a prop
    const handleCancel = () => { 
        setSearchQuery("");
        onCancel();
    }

    return (
         <div className="search-bar">
            <div className="input-group">
                {/* Select dropdown for search options */}
                <select className="form-select" value={selectedOption} onChange={handleOptionChange}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    {/* Add more option elements here */}
                </select>
                {/* Search input */}
                <input type="text" className="form-control" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
                <button type="button" className="btn btn-primary">S</button>
            </div>
            <button onClick={handleCancel} className="btn btn-danger">X</button>
        </div>
    )
}

export default SearchBar;