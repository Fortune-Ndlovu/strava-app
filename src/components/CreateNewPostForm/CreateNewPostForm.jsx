import React, { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import compressImage from "../../services/compressImage";
import defaultUserProfile from "../../images/defaultUserProfile.png";

const CreateNewPostForm = ({ onCreatePost }) => {
	const [newPost, setNewPost] = useState("");
	const [newPostMessage, setNewPostMessage] = useState("");
	const [imageFiles, setImageFiles] = useState([]);
	const navigate = useNavigate();

	const handleImagePost = async (e) => {
		const files = Array.from(e.target.files);
		const compressedImages = await Promise.all(
			files.map(async (file) => await compressImage(file))
		);
		setImageFiles([...imageFiles, ...compressedImages]);
	};

	const handleCreatePost = async () => {
		let imagesUrls = [];
		try {
			await Promise.all(
				imageFiles.map(async (file) => {
					const storage = getStorage();
					const storageRef = ref(storage, `post_images/${file.name}`);
					await uploadBytes(storageRef, file);
					console.log("uploaded a blog or a file");
					const imageUrlRef = await getDownloadURL(storageRef);
					imagesUrls.push(imageUrlRef);
				})
			);

			const createdPost = await onCreatePost({
				post: newPost,
				message: newPostMessage,
				imageUrls: imagesUrls,
			});
			console.log("createdPost!!: ", createdPost);

			if (createdPost && createdPost.id) {
				navigate(`/home/post/${createdPost.id}`);
			}
		} catch (error) {
			console.error("Error creating post!:", error);
		}
	};

	const handleDiscard = () => {
		// Clear the form fields or perform other actions as needed
		setNewPost("");
		setNewPostMessage("");
		navigate("/home/profile");
	};

	return (
		<div>
			<Form id="createPostForm">
				<div>
					<div>
						<img
							src={defaultUserProfile}
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
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<input type="file" onChange={handleImagePost}></input>

					{imageFiles.map((image, index) => (
						<img
							key={index}
							src={URL.createObjectURL(image)} //create temporary URL
							alt={`Selected ${index + 1}`}
							width={70}
							height={70}
							style={{
								objectFit: "cover",
								marginRight: "10px",
							}}
						/>
					))}
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
