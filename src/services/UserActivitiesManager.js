import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";
import ManualEntryForm from "../components/ManualEntryForm/ManualEntryForm";
import MyActivitiesTable from "../components/MyActivitiesTable/MyActivitiesTable";

const UserActivitiesManager = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createActivity = async (newActivity) => {
    await addDoc(usersCollectionRef, newActivity);
  };

   const editActivity = async (index, updatedActivity) => {
    const userDoc = doc(db, "users", users[index].id);
    await updateDoc(userDoc, updatedActivity);
  };


  useEffect(() => {
   const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
    // Update the state whenever there's a change in the collection
    setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });

  // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array to run the effect only once on mount


  return (
    <div>
      <ManualEntryForm onCreateActivity={createActivity} />
      <MyActivitiesTable activities={users} onEditActivity={editActivity}/>
    </div>
  );
};

export default UserActivitiesManager;
