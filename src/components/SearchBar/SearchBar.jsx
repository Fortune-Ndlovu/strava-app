import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom'; // Import Navigate for navigation
import { db } from "../../firebase/firebase";
import { collection, query, where, getDocs } from 'firebase/firestore'; // Import Firestore utilities
import './SearchBar.css';

const SearchBar = ({ onCancel }) => { // Pass users collection reference as prop
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate(); // Get history object for navigation

    const handleSearchChange = (event) => { 
        setSearchQuery(event.target.value);
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const handleCancel = () => { 
        setSearchQuery("");
        onCancel();
    }

    const handleSearch = async () => {
        try {
            const userQuery = query(collection(db, "users"), where("name", "==", searchQuery)); // Assuming 'name' is the field where user's name is stored
            const userSnapshot = await getDocs(userQuery);
            if (!userSnapshot.empty) {
                const userDoc = userSnapshot.docs[0];
                const userId = userDoc.data().uid;
                navigate(`/home/search/${userId}`); // Navigate to profile component with user's id
            } else {
                console.log('User not found');
            }
        } catch (error) {
            console.error('Error searching for user:', error);
        }
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
                <button type="button" title="Search" className="btn" onClick={handleSearch}><FiSearch className="open-search-icon" /></button>
            </div>
            <button type="button" title="Cancel" onClick={handleCancel} className="cancel-search-btn"><HiOutlineX className="cancel-search-icon" /></button>
        </div>
    );
}

export default SearchBar;