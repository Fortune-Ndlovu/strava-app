import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CreateCommentsAndGiveKudos.css";
import "../../styles/common/buttons.css";
import fortunendlovu from "../../images/fortunendlovu.jpg";

const PostCommentsSection = ({ showComments, onCommentPost }) => {
	const [comment, setComment] = useState("");
	const handleCommentPost = () => {
		// Call the parent component's onCommentPost callback with the new comment
		onCommentPost(comment);
		// Clear the textarea after posting the comment
		setComment("");
	};

	return (
		<div
			className={`comment-section ${showComments ? "visible" : "hidden"}`}
			id="activityCommentsWrapper"
		>
			<img
				src={fortunendlovu}
				alt="user profile"
				width={24}
				height={24}
				id="userProfileCommentsImg"
			/>
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

export default PostCommentsSection;
