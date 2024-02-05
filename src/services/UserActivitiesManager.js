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
  writeBatch, // Add this import
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
  const [userActivities, setUserActivities] = useState([]);
  const userActivitiesCollection = collection(db, "userActivities");

  const createActivity = async (newActivity) => {
    const docRef = await addDoc(userActivitiesCollection, newActivity);
    const createdActivity = { ...newActivity, id: docRef.id };
    
    console.log("Created Activity:", createdActivity);
    
    return createdActivity;
  };

  const editActivity = async (index, updatedActivity) => {
    const userDoc = doc(db, "userActivities", userActivities[index].id);
    const batch = writeBatch(db); // Initialize a WriteBatch

    // Check if userActivities[index].imageUrl is defined
    const imageUrl = userActivities[index].imageUrl || null;

    // Update the document with the new activity details, including the image field
    batch.update(userDoc, { ...updatedActivity, imageUrl });

    // Commit the batch
    await batch.commit();
  };

  const deleteActivity = async (index) => {
    const userDoc = doc(db, "userActivities", userActivities[index].id);
    const batch = writeBatch(db); // Initialize a WriteBatch

    // Delete the activity
    batch.delete(userDoc);

    // Commit the batch
    await batch.commit();
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(userActivitiesCollection, (snapshot) => {
      setUserActivities(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
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