import React from 'react';
import '../../components/CreateNewPostForm/CreateNewPostForm.css';
import UserPostsManger from '../../services/UserPostsManager';

const CreatePost = () => {
  return (
    <div id="createPostContainer">
      <UserPostsManger />
    </div>
  )
}

export default CreatePost