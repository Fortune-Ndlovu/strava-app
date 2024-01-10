import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import ManualEntryForm from "../components/ManualEntryForm/ManualEntryForm";
import MyActivitiesTable from "../components/MyActivitiesTable/MyActivitiesTable";

const UserActivitiesManager = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createActivity = async (newActivity) => {
    await addDoc(usersCollectionRef, newActivity);
  };

  useEffect(() => {
   const getUsers = async () => {
     const data = await getDocs(usersCollectionRef);
     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   };

   const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
    // Update the state whenever there's a change in the collection
    setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });

  // Cleanup the listener when the component unmounts
    getUsers();
    return () => unsubscribe();
  }, []); // Empty dependency array to run the effect only once on mount


  return (
    <div>
      <ManualEntryForm onCreateActivity={createActivity} />
      <MyActivitiesTable activities={users} />
    </div>
  );
};

export default UserActivitiesManager;
