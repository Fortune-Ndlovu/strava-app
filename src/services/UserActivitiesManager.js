import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
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
    getUsers();
  }, []);

  return (
    <div>
      <h1>Hello users</h1>

      <ManualEntryForm onCreateActivity={createActivity} />
      <MyActivitiesTable activities={users} />
    </div>
  );
};

export default UserActivitiesManager;
