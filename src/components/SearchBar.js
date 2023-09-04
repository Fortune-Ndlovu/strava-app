import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineX } from 'react-icons/hi';

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
         <div className="search-bar d-flex align-items-center">
            <div className="input-group">
                <div className="select-input">
                    <select className="form-select" value={selectedOption} onChange={handleOptionChange}>
                        <option value="Activities">Activities</option>
                        <option value="Athletes">Athletes</option>
                        <option value="Clubs">Clubs</option>
                        <option value="Segments">Segments</option>
                    </select>
                </div>
                <input type="text" className="form-control" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
                <button type="button" className="btn"><FiSearch className="open-search-icon" /></button>
            </div>
            <button onClick={handleCancel} className="cancel-search-btn"><HiOutlineX className="cancel-search-icon"/></button>
        </div>
    )
}

export default SearchBar;