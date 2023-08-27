import React, { useState } from 'react';

// functional component that takes a single prop called onCancel
const SearchBar = ({ onCancel }) => {

    // creating a piece of state with its initial value being an empty string
    const [searchQuery, setSearchQuery] = useState("");

    // Called whenever the value of the input field changes
    // using setSearchQuery function to update the searchQuery state with the new value of the input field
    const handleSearchChange = (event) => { 
        setSearchQuery(event.target.value);
    }

    // Called whenever the Cancel button is clicked
    // It clears the searchQuery state by setting it to empty string and then calls the onCancel function that was passed as a prop
    const handleCancel = () => { 
        setSearchQuery("");
        onCancel();
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )

}

export default SearchBar;