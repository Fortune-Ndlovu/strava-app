import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  writeBatch,
} from "firebase/firestore";
import CreateNewPostForm from "../components/CreateNewPostForm/CreateNewPostForm";
import CreatePostsTable from "../components/CreatePostsTable/CreatePostsTable";

const UserPostsManager = () => {
  const [userPosts, setUserPosts] = useState([]);
  const userPostsCollection = collection(db, "userPosts");

  const createPost = async (newPost) => {
   const docRef = await addDoc(userPostsCollection, newPost);

    const createdPost = {...newPost, id: docRef.id};
    console.log("created post: ", createdPost);
    return createdPost;
  };

  const editPost = async (index, updatedPost) => {
    const userDoc = doc(db, "userPosts", userPosts[index].id);
    const batch = writeBatch(db);

    batch.update(userDoc, updatedPost);

    await batch.commit();
  };

  const deletePost = async (index) => {
    const userDoc = doc(db, "userPosts", userPosts[index].id);
    const batch = writeBatch(db);

    batch.delete(userDoc);

    await batch.commit();
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(userPostsCollection, (snapshot) => {
      setUserPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => unsubscribe();
  }, []);

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
