// Importing necessary React hooks and Firebase functions
import React, { useState, useEffect } from "react";
import { db, getCurrentUserId } from "../firebase/firebase";
import {
	collection,
	addDoc,
	onSnapshot,
	doc,
	writeBatch,
	serverTimestamp,
	query,
	where,
} from "firebase/firestore";
import ManualEntryForm from "../components/ManualEntryForm/ManualEntryForm";
import MyActivitiesTable from "../components/MyActivitiesTable/MyActivitiesTable";

const UserActivitiesManager = ({ showForm, filters }) => {
	const [userActivities, setUserActivities] = useState([]);
	const userActivitiesCollection = collection(db, "userActivities");

	const currentUserId = getCurrentUserId();

	// Construct filtered query based on user ID and additional filters
  let userActivitiesQuery = collection(db, 'userActivities');
  if (currentUserId) {
    userActivitiesQuery = query(userActivitiesCollection, where('userId', '==', currentUserId));

    if (filters?.sport) {
      userActivitiesQuery = query(userActivitiesQuery, where('sport', '==', filters.sport));
    }

    if (filters?.keywords) {
      userActivitiesQuery = query(userActivitiesQuery, where('name', '==', filters.keywords));
    }
  }
	// Listening for changes to the filtered collection and get real-time updates
	useEffect(() => {
		if (!currentUserId) return;

		const unsubscribe = onSnapshot(userActivitiesQuery, (snapshot) => {
			const sortedActivities = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setUserActivities(sortedActivities);
		});

		return () => unsubscribe();
	}, [currentUserId, userActivitiesQuery]);

	const createActivity = async (newActivity) => {
		// Adding the creation date and time to the new activity object
		const currentTimestamp = serverTimestamp(); // Import serverTimestamp from 'firebase/firestore'
		newActivity.createdAt = currentTimestamp;

		// Adding a field for comments to the new activity
		newActivity.comments = [];
		newActivity.activityLikes = [];

		// Add the user's ID to the activity document
		const userId = getCurrentUserId();
		const docRef = await addDoc(userActivitiesCollection, {
			...newActivity,
			userId,
		});

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

	// Listening for changes to the collection and get real-time updates
	useEffect(() => {
		if (!currentUserId) return;

		const userActivitiesQuery = query(
			userActivitiesCollection,
			where("userId", "==", currentUserId)
		);

		const unsubscribe = onSnapshot(userActivitiesQuery, (snapshot) => {
			const sortedActivities = snapshot.docs
				.map((doc) => ({ ...doc.data(), id: doc.id }))
				.sort((a, b) => new Date(b.date) - new Date(a.date));

			setUserActivities(sortedActivities);
		});

		return () => unsubscribe();
	}, [currentUserId]);

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
