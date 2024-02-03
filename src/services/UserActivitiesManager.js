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
import ManualEntryForm from "../components/ManualEntryForm/ManualEntryForm";
import MyActivitiesTable from "../components/MyActivitiesTable/MyActivitiesTable";

const UserActivitiesManager = ({ showForm, onCreateActivity, onEditActivity, onDeleteActivity }) => {
  const [userActivities, setUserActivities] = useState([]);
  const userActivitiesCollection = collection(db, "userActivities");

  const createActivity = async (newActivity) => {
    await addDoc(userActivitiesCollection, newActivity);
  };

  const editActivity = async (index, updatedActivity) => {
    const userDoc = doc(db, "userActivities", userActivities[index].id);
    await updateDoc(userDoc, updatedActivity);
  };

  const deleteActivity = async (index) => {
    const userDoc = doc(db, "userActivities", userActivities[index].id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(userActivitiesCollection, (snapshot) => {
      // Update the state whenever there's a change in the collection
      setUserActivities(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [userActivitiesCollection]);

  return (
    <div>
      {showForm && <ManualEntryForm onCreateActivity={createActivity} />}
      {!showForm && <MyActivitiesTable
        activities={userActivities}
        onEditActivity={editActivity}
        onDeleteActivity={deleteActivity}
      />}
    </div>
  );
};

export default UserActivitiesManager;
