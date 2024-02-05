// Importing necessary React hooks and Firebase functions
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
	collection,
	addDoc,
	onSnapshot,
	doc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";

// Importing components used in this module
import ManualEntryForm from "../components/ManualEntryForm/ManualEntryForm";
import MyActivitiesTable from "../components/MyActivitiesTable/MyActivitiesTable";

// Defining the UserActivitiesManager component
const UserActivitiesManager = ({
	showForm,
	showSidebar,
	onCreateActivity,
	onEditActivity,
	onDeleteActivity,
}) => {
	// Creating state to hold user activities
	const [userActivities, setUserActivities] = useState([]);

	// Firestore collection reference
	const userActivitiesCollection = collection(db, "userActivities");

  // Function to create a new activity
  const createActivity = async (newActivity) => {
    // Adding a new document to the collection and getting its reference
    const docRef = await addDoc(userActivitiesCollection, newActivity);
    // Creating an object with the new activity details including its id
		// const createdActivity = { ...newActivity, id: docRef.id };

	  
	  // Add image field to the new activity
  const createdActivity = { ...newActivity, id: docRef.id, imageUrls: null };
	  
		// Log the created activity to ensure it contains the id
		console.log("Created Activity:", createdActivity);

    // Returning the created activity
		return createdActivity;
	};

const editActivity = async (index, updatedActivity) => {
  // Getting the document reference of the activity to be edited
  const userDoc = doc(db, "userActivities", userActivities[index].id);

  // Check if userActivities[index].imageUrl is defined
  const imageUrl = userActivities[index].imageUrl || null;

  // Update the document with the new activity details, including the image field
  await updateDoc(userDoc, { ...updatedActivity, imageUrl });
};

  // Function to delete an existing activity
  const deleteActivity = async (index) => {
    // Getting the document reference of the activity to be deleted
		const userDoc = doc(db, "userActivities", userActivities[index].id);
		// Delete the activity
    await deleteDoc(userDoc);
	};

  // Effect hook to subscribe to changes in the Firestore collection
  useEffect(() => {
    // Setting up a snapshot listener to track changes in the collection
		const unsubscribe = onSnapshot(userActivitiesCollection, (snapshot) => {
			// Update the state whenever there's a change in the collection
			setUserActivities(
				snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		});

		// Cleanup the listener when the component unmounts
		return () => unsubscribe();
	}, []);

  // Render the UserActivitiesManger component
	return (
    <div>
      {/* Conditional rendering of ManualEntryForm or MyActivitiesTable based on showForm prop */}
			{showForm && <ManualEntryForm onCreateActivity={createActivity} />}
			{!showForm && (
				<MyActivitiesTable
					activities={userActivities}
					onEditActivity={editActivity}
					onDeleteActivity={deleteActivity}
				/>
			)}
		</div>
	);
};

export default UserActivitiesManager;
