import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { db } from "../../firebase/firebase";
import { query, collection, getDocs } from "firebase/firestore";
import { where, doc, updateDoc } from "firebase/firestore";

import { getCurrentUserId } from "../../firebase/firebase";

const UserProfileForm = () => {
    const [userData, setUserData] = useState({
        name: "",
        birthday: "",
        location: "",
        primaryClub: "",
        weight: "",
        profileBio: ""
    });
    const [editMode, setEditMode] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = getCurrentUserId();
                if (userId) {
                    const usersQuery = query(collection(db, "users"), where("uid", "==", userId));
                    const userSnapshot = await getDocs(usersQuery);
                    if (!userSnapshot.empty) {
                        const userDataFromFirestore = userSnapshot.docs[0].data();
                        setUserData(userDataFromFirestore);
                    } else {
                        console.error("User document not found for current user.");
                    }
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleEdit = (field) => {
        setEditMode(prevState => ({
            ...prevState,
            [field]: true
        }));
    };

const handleSave = async () => {
    try {
        // Retrieve the user document
        const usersQuery = query(collection(db, "users"), where("uid", "==", getCurrentUserId()));
        const userSnapshot = await getDocs(usersQuery);

        if (!userSnapshot.empty) {
            // Get the document ID from the first document in the snapshot
            const userId = userSnapshot.docs[0].id;

            // Update the user document
            await updateDoc(doc(db, "users", userId), {
                ...userData
            });
            alert("Profile updated successfully!");
        } else {
            console.error("User document not found for current user.");
        }
    } catch (error) {
        console.error("Error updating profile:", error);
    }
};


    const handleChange = (field, value) => {
        setUserData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    return (
        <Table striped bordered hover>
            <tbody>
                {Object.entries(userData).map(([field, value]) => (
                    <tr key={field}>
                        <td>{field}</td>
                        <td>
                            {editMode[field] ? (
                                <input
                                    type="text"
                                    value={value}
                                    onChange={(e) => handleChange(field, e.target.value)}
                                />
                            ) : (
                                <input
                                    type="text"
                                    value={value}
                                    readOnly
                                />
                            )}
                        </td>
                        <td>
                            {editMode[field] ? (
                                <Button variant="primary" onClick={handleSave}>Save</Button>
                            ) : (
                                <Button variant="primary" onClick={() => handleEdit(field)}>Edit</Button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default UserProfileForm;
