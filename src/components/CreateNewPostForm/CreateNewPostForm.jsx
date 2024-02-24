import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const CreateNewPostForm = ({ onCreatePost }) => {
	const [newPost, setNewPost] = useState("");
	const [newPostMessage, setNewPostMessage] = useState("");
	const navigate = useNavigate();

	const handleCreatePost = () => {
		onCreatePost({
			post: newPost,
			message: newPostMessage,
		});
	};

	const handleDiscard = () => {
		// Clear the form fields or perform other actions as needed
		setNewPost("");
		setNewPostMessage("");
		navigate("/profile");
	};

	return (
		<div>
			<Form id="createPostForm">
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Control
						type="text"
						placeholder="Add a title (optional)"
						value={newPost}
						onChange={(e) => setNewPost(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="What's going on?"
						value={newPostMessage}
						onChange={(e) => setNewPostMessage(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="button" onClick={handleCreatePost}>
					Publish
				</Button>
				<Button variant="danger" type="button" onClick={handleDiscard}>
					Discard
				</Button>
			</Form>
		</div>
	);
};

export default CreateNewPostForm;
