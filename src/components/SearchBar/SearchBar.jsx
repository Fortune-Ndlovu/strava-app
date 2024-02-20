import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineX } from 'react-icons/hi';
import './SearchBar.css';

// We are using the single prop called onCancel to show or hide this searchBar component.
const SearchBar = ({ onCancel }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    // using setSearchQuery function to update the searchQuery state with the new value of the input field
    const handleSearchChange = (event) => { 
        setSearchQuery(event.target.value);
    }

    // Applying the ability to select the items from the select options
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    // It clears the searchQuery state by setting it to empty string and then calls the onCancel function that was passed as a prop
    const handleCancel = () => { 
        setSearchQuery("");
        onCancel();
    }

    return (
        <div className="search-bar d-flex align-items-center">
            <div className="input-group">
                <div className="select-input">
                    <select className="form-select" id="searchSelectInput" value={selectedOption} onChange={handleOptionChange}>
                        <option value="Activities">Activities</option>
                        <option value="Athletes">Athletes</option>
                        <option value="Clubs">Clubs</option>
                        <option value="Segments">Segments</option>
                    </select>
                </div>
                <input type="text" className="form-control" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
                <button type="button" title="Search" className="btn"><FiSearch className="open-search-icon" /></button>
            </div>
            <button type="button" title="Cancel" onClick={handleCancel} className="cancel-search-btn"><HiOutlineX className="cancel-search-icon" /></button>
        </div>
    );
}

export default SearchBar;