import { React, useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import {
	getStorage,
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from "firebase/storage";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import defaultUserProfile from "../../images/defaultUserProfile.png";
import "./EditPostForm.css";
import compressImage from "../../services/compressImage";

const EditPostForm = () => {
	const { postId } = useParams(); //extract from the URL
	const navigate = useNavigate(); //programmatic navigation
	const [postDetails, setPostDetails] = useState(null);
	const [editedPost, setEditedPost] = useState({
		post: "",
		message: "",
		imageUrls: [],
	});
	console.log("editedPost: ", editedPost);
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

	const handleFileInputChange = async (e) => {
		const file = e.target.files[0];
		if (file) {
			try {
				const compressedImage = await compressImage(file);

				// Upload the compressed image to Firebase Storage
				const storage = getStorage();
				const storageRef = ref(storage, `post_images/${file.name}`);
				await uploadBytes(storageRef, compressedImage);

				// Get the download URL of the uploaded image
				const imageUrl = await getDownloadURL(storageRef);

				// Update the state with the new image URL
				setEditedPost((prev) => ({
					...prev,
					imageUrls: [...prev.imageUrls, imageUrl],
				}));
			} catch (error) {
				console.error("Error handling file input change:", error);
			}
		}
	};

	const handleDeleteImage = async (index) => {
		console.log("handleDeleteImage", index);
		try {
			// Create a copy of the editedPost state
			const updatedEditedPost = { ...editedPost };

			// Remove the image URL at the specified index
			const deletedImageUrl = updatedEditedPost.imageUrls.splice(index, 1)[0];

			// Update the state with the modified image URLs
			setEditedPost(updatedEditedPost);

			// Create a storage reference to the image
			const storage = getStorage();
			const imageRef = ref(storage, `${deletedImageUrl}`);

			// Delete the image from storage
			await deleteObject(imageRef);

			console.log(`Image ${deletedImageUrl} deleted from storage.`);
		} catch (error) {
			console.error("Error deleting image from storage:", error);
		}
		console.log("editedPost: ", editedPost);
	};

	const handleDeletePost = async () => {
		const userDoc = doc(db, "userPosts", postId);
		await deleteDoc(userDoc);
		navigate("/profile");
	};

	const handleSaveChanges = async () => {
		const userDoc = doc(db, "userPosts", postId);
		await updateDoc(userDoc, editedPost);

		navigate(`/post/${postId}`);
	};

	return (
		<div>
			{postDetails && (
				<Container className="post-details-container">
					<div className="edit-post-form-header">
						<Breadcrumb>
							<Breadcrumb.Item href="/athleteSearch">Athletes</Breadcrumb.Item>
							<Breadcrumb.Item href="/profile">Fortune Ndlovu</Breadcrumb.Item>
							<Breadcrumb.Item href={`/post/${postId}`}>
								{postDetails.post}
							</Breadcrumb.Item>
							<Breadcrumb.Item active>Editing a Post</Breadcrumb.Item>
						</Breadcrumb>
						<div className="edit-post-details-form-inner-header">
							<div className="edit-post-details-form-user-identity">
								<img
									src={defaultUserProfile}
									alt="user profile"
									width={48}
									height={48}
									id="editPostFormUserImg"
								/>
								<h4>Fortune Ndlovu</h4>
							</div>
							<div className="edit-post-details-form-user-interactions">
								<Button type="button" onClick={handleDeletePost}>
									Delete
								</Button>
								<Button type="button" onClick={handleSaveChanges}>
									Update
								</Button>
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
							<Form.Group className="mb-3" id="editPostFormDescriptionGroup">
								<input type="file" onChange={handleFileInputChange} />
							</Form.Group>
							<Form.Group className="mb-3" id="editPostFormDescriptionGroup">
								{editedPost.imageUrls && editedPost.imageUrls.length > 0 && (
									<div className="edited-post-image-wrapper">
										{editedPost.imageUrls.map((imageUrl, index) => (
											<>
												<img
													key={index}
													src={imageUrl}
													width={100}
													height={100}
													alt={`Post ${index + 1}`}
													style={{ objectFit: "cover", marginRight: "10px" }}
												/>
												<Button type="button" onClick={() => handleDeleteImage(index)}>
													Delete Image
												</Button>
												<br></br>
											</>
										))}
									</div>
								)}
							</Form.Group>
						</Form>
					</div>
				</Container>
			)}
		</div>
	);
};

export default EditPostForm;
