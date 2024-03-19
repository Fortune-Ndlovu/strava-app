import { React, useState, useEffect } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { getCurrentUserId } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CreateCommentsAndGiveKudos.css";
import "../../styles/common/buttons.css";
import defaultUserProfile from "../../images/defaultUserProfile.png";

const CommentSection = ({ showComments, onCommentPost }) => {
	const [comment, setComment] = useState("");
	const [userData, setUserData] = useState({});
	const handleCommentPost = () => {
		// Call the parent component's onCommentPost callback with the new comment
		onCommentPost(comment);
		// Clear the textarea after posting the comment
		setComment("");
	};

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userId = getCurrentUserId();
				if (userId) {
					const usersQuery = query(
						collection(db, "users"),
						where("uid", "==", userId)
					);
					const userSnapshot = await getDocs(usersQuery);
					if (!userSnapshot.empty) {
						const userDataFromFirestore = userSnapshot.docs[0].data();
						setUserData(userDataFromFirestore);
					} else {
						console.error("User document not found for current user.");
					}
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, []);

	return (
		<div
			className={`comment-section ${showComments ? "visible" : "hidden"}`}
			id="activityCommentsWrapper"
		>
			{userData.profileImageUrl ? (
				<img
					src={userData.profileImageUrl}
					alt="user profile"
					width={24}
					height={24}
					id="userProfileCommentsImg"
				/>
			) : (
				<img
					src={defaultUserProfile}
					alt="user profile"
					width={24}
					height={24}
					id="userProfileCommentsImg"
				/>
			)}
			<Form.Group className="mb-2 comments-textarea-wrapper">
				<Form.Control
					as="textarea"
					id="commentingTextAreaInput"
					placeholder="Add a comment, @ to mention"
					rows={2}
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
			</Form.Group>
			<Button
				variant="outline-primary"
				id="activityCommentPostBtn"
				onClick={handleCommentPost}
			>
				Post
			</Button>{" "}
		</div>
	);
};

export default CommentSection;
