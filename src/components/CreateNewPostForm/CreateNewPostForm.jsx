import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import fortunendlovu from "../../images/fortunendlovu.jpg";

const CreateNewPostForm = ({ onCreatePost }) => {
	const [newPost, setNewPost] = useState("");
	const [newPostMessage, setNewPostMessage] = useState("");
	const navigate = useNavigate();

	const handleCreatePost = async () => {
		try {
			const createdPost = await onCreatePost({
				post: newPost,
				message: newPostMessage,
			});

			console.log("createdPost!!: ", createdPost);

			if (createdPost && createdPost.id) {
				navigate(`/post/${createdPost.id}`);
			}

		} catch (error) { 
			console.error("Error creating post!:", error);
		}		
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
				<div>
					<div>
						<img
							src={fortunendlovu}
							alt="user profile"
							width={48}
							height={48}
							id="createPostFormUserProfileImg"
						/>
						<h4>Fortune Ndlovu</h4>
					</div>
					<div>
						<Button variant="primary" type="button" onClick={handleCreatePost}>
							Publish
						</Button>
						<Button variant="danger" type="button" onClick={handleDiscard}>
							Discard
						</Button>
					</div>
				</div>
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
			</Form>
		</div>
	);
};

export default CreateNewPostForm;
