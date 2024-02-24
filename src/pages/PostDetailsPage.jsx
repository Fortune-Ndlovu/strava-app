import {React, useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { Container, Row, Col } from "react-bootstrap";
const PostDetailsPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    // fetch the post details
    const fetchPostDetails = async () => {
      const postDoc = doc(db, "userPosts", postId);
      const postSnapshot = await getDoc(postDoc);

      if (postSnapshot.exists()) {
        setPostDetails({
          ...postSnapshot.data(),
          id: postSnapshot.id,
        });
      }
    }
    fetchPostDetails();
  });

  return (
    <div>
      <Container className="activity-details-container">
        {postDetails && (
          <div>
            <h1>{postDetails.post}</h1>
            <p>{postDetails.message}</p>
          </div>          
        )}
      </Container>
    </div>
  )
}

export default PostDetailsPage