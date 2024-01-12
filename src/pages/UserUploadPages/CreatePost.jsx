import React from 'react';
import '../../components/CreateNewPostForm/CreateNewPostForm.css';
import UserPostsManger from '../../services/UserPostsManager';

const CreatePost = () => {
  return (
    <div id="createPostContainer">
      <h1>New Post</h1>
      <UserPostsManger />
    </div>
  )
}

export default CreatePost