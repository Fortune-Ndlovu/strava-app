import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import fortunendlovu from "../../images/fortunendlovu.jpg";
import "./EditPostForm.css";

const EditPostForm = () => {
  const {postId } = useParams(); //extract from the URL
	const navigate = useNavigate(); //programmatic navigation
  const [postDetails, setPostDetails] = useState(null);
	const [editedPost, setEditedPost] = useState({
		post: "",
		message: "",
  });

  useEffect(() => {
		// Fetch the activity details when the component mounts based on id
		const fetchPostDetails = async () => {
			// Generating a ref to the Firestore doc for the specified activityId
			const postDoc = doc(db, "userPosts", postId);
			// Retrieving the doc snapshot for the specified doc ref
			const postSnapshot = await getDoc(postDoc);

			// if the activity doc exists update the state by creating an object by copying properties of an existing object 
			if (postSnapshot.exists()) {
				setPostDetails({
					...postSnapshot.data(),
					id: postSnapshot.id,
				});
				setEditedPost({
					...postSnapshot.data(),
				});
			}
		};

		fetchPostDetails();
  }, [postId]);

  	// Handling input changes, connected to input fields through the onChange event
	const handleInputChange = (e) => {
		// Destructuring the properties name and value from the event object
		const { name, value } = e.target;

		// Creating a shallow copy of the existing editedActivity state to ensure immutability
		// Dynamically updating the property specified by name with the new value
		setEditedPost({
			...editedPost,
			[name]: value,
		});
	};
  
  const handleDeletePost = async () => {
    const userDoc = doc(db, "userPosts", postId);
    await deleteDoc(userDoc);
    navigate("/profile");
  }

  const handleSaveChanges = async () => { 
    const userDoc = doc(db, "userPosts", postId);
		await updateDoc(userDoc, editedPost);

		navigate(`/post/${postId}`);
  }
  
	return (
    <div>
      {postDetails && (
        <Container className="post-details-container">
				<div className="edit-post-form-header">
					<Breadcrumb>
						<Breadcrumb.Item href="/athleteSearch">Athletes</Breadcrumb.Item>
						<Breadcrumb.Item href="/profile">Fortune Ndlovu</Breadcrumb.Item>
              <Breadcrumb.Item href={`/post/${postId}`}>{postDetails.post}</Breadcrumb.Item>
						<Breadcrumb.Item active>Editing a Post</Breadcrumb.Item>
					</Breadcrumb>
					<div className="edit-post-details-form-inner-header">
						<div className="edit-post-details-form-user-identity">
							<img
								src={fortunendlovu}
								alt="user profile"
								width={48}
								height={48}
								id="editPostFormUserImg"
                />
							<h4>Fortune Ndlovu</h4>
						</div>
						<div className="edit-post-details-form-user-interactions">
							<Button type="button" onClick={handleDeletePost}>Delete</Button>
                <Button type="button" onClick={handleSaveChanges}>Update</Button>
						</div>
					</div>
				</div>
				<div className="edit-post-form-body">
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
                  className="edit-activity-form-input-style"
                  placeholder="Add a title (optional)"
								name="post"
								value={editedPost.post}
								onChange={handleInputChange}
              />
						</Form.Group>
						<Form.Group className="mb-3" id="editPostFormDescriptionGroup">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								className="edit-activity-form-input-style"
								placeholder="What's going on?"
								rows={3}
								id="description"
								name="message"
								value={editedPost.message}
								onChange={handleInputChange}
                />
						</Form.Group>
					</Form>
				</div>
			</Container>
    )}
		</div>
	);
};

export default EditPostForm;
