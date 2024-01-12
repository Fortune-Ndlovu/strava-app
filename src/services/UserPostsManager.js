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
import CreateNewPostForm from "../components/CreateNewPostForm/CreateNewPostForm";
import CreatePostsTable from "../components/CreatePostsTable/CreatePostsTable";

const UserPostsManager = () => {
	const [userPosts, setUserPosts] = useState([]);
	const userPostsCollection = collection(db, "userPosts");
	

	const createPost = async (newPost) => {
		await addDoc(userPostsCollection, newPost);
	};


	const editPost = async (index, updatedPost) => {
		const userDoc = doc(db, "userPosts", userPosts[index].id);
		await updateDoc(userDoc, updatedPost);
	};

	const deletePost = async (index) => {
		const userDoc = doc(db, "userPosts", userPosts[index].id);
		await deleteDoc(userDoc);
	};

	useEffect(() => {
		const unsubscribe = onSnapshot(userPostsCollection, (snapshot) => {
			// Update the state whenever there's a change in the collection
			setUserPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});

		// Cleanup the listener when the component unmounts
		return () => unsubscribe();
	}, []); // Empty dependency array to run the effect only once on mount

	return (
		<div>
			<CreateNewPostForm onCreatePost={createPost} />

			<CreatePostsTable
				posts={userPosts}
				onEditPost={editPost}
				onDeletePost={deletePost}
			/>
		</div>
	);
};

export default UserPostsManager;
