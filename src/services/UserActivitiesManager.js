// Importing necessary React hooks and Firebase functions
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  writeBatch,
} from "firebase/firestore";

// Importing components used in this module
import ManualEntryForm from "../components/ManualEntryForm/ManualEntryForm";
import MyActivitiesTable from "../components/MyActivitiesTable/MyActivitiesTable";

// Defining the UserActivitiesManager component
const UserActivitiesManager = ({
  showForm
}) => {
  const [userActivities, setUserActivities] = useState([]);
  const userActivitiesCollection = collection(db, "userActivities");

  const createActivity = async (newActivity) => {
    // Adding a new doc to the firebase collection, and returning a doc reference object representing the newly created doc
    const docRef = await addDoc(userActivitiesCollection, newActivity);

    // Creating a new object by spreading the properties of the doc id
    // Ensuring the returned object includes both the original activity data and Id assigned by Firestore
    const createdActivity = { ...newActivity, id: docRef.id };
    
    console.log("Created Activity:", createdActivity);
    
    return createdActivity;
  };

  const editActivity = async (index, updatedActivity) => {
    // Obtaining the id of doc in Firestore that corresponds to the activity being edited
    const userDoc = doc(db, "userActivities", userActivities[index].id);

    const batch = writeBatch(db); // Initializes a batch to write multiple operations together
    // A writeBatch is a set of operations that are performed atomically(all or none)

    // Check if userActivities[index].imageUrl is defined
    const imageUrl = userActivities[index].imageUrl || null;

    // Update the document with the new activity details, including the image field
    batch.update(userDoc, { ...updatedActivity, imageUrl });

    // Commit the batch to Firestore, this ensures that all the updates in the batch are applied automatically maintaining data consistency 
    await batch.commit();
  };

  const deleteActivity = async (index) => {
    // Obtaining the id of the doc in the Firestore that corresponds to the activity being deleted
    const userDoc = doc(db, "userActivities", userActivities[index].id);
    const batch = writeBatch(db); // Initialize a WriteBatch

    // Delete the activity
    batch.delete(userDoc);

    // Commit the batch
    await batch.commit();
  };

  // Listening for changes to the collection and get real time updates
  useEffect(() => {
    const unsubscribe = onSnapshot(userActivitiesCollection, (snapshot) => {
    // calling with the updated data obtained from the snapshot
      setUserActivities(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });

    return () => unsubscribe();
  });

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