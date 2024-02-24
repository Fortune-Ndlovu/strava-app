// CreateCommentsAndGiveKudosModal.js
import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CommentSection from "./CommentSection";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./CreateCommentsAndGiveKudos.css";
function CreateCommentsAndGiveKudos({
	show,
	handleClose,
	activity,
	onDeleteComment,
	onLikeComment,
}) {
	const [key, setKey] = useState("Kudos");
	const [comments, setComments] = useState([]); // New state to store comments

	const handleCommentPost = async (comment, activityId) => {
		console.log("Comment posted:", comment);
		try {
			// Update the comments state with the new comment for the specific activity
			setComments((prevComments) => ({
				...prevComments,
				[activityId]: [...(prevComments[activityId] || []), comment],
			}));

			// Obtain the document reference for the specific activity
			const userDoc = doc(db, "userActivities", activityId);

			// Get the existing comments for the activity
			const existingComments = (await getDoc(userDoc)).data().comments || [];

			// Update the document with the new comments
			await updateDoc(userDoc, { comments: [...existingComments, comment] });
		} catch (error) {
			console.error("Error saving comment:", error);
		}
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{activity.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{" "}
				<Tabs
					id="controlled-tab-example"
					activeKey={key}
					onSelect={(k) => setKey(k)}
					className="mb-3"
				>
					<Tab eventKey="Kudos" title={`Kudos (0)`}>
						This entry has no kudos yet.
					</Tab>
					<Tab
						eventKey="Comments"
						title={`Comments (${activity.comments.length})`}
					>
						{activity.comments.length > 0
							? activity.comments.map((comment, index) => (
									<div key={index}>
										<p>
											{comment}{" "}
											<Button
												variant="success"
												size="sm"
												onClick={() => onDeleteComment(index)}
											>
												Delete
											</Button>{" "}
											<Button
												variant="danger"
												size="sm"
												onClick={() => onLikeComment(index)}
											>
												Like
											</Button>
											<p>{activity.commentLikes?.[index] ? "1 Like" : ""}</p>
										</p>
									</div>
							  ))
							: "This entry has no comments yet."}
					</Tab>
				</Tabs>
				<CommentSection
					className="comment-section visible"
					showComments={key === "Comments"}
					onCommentPost={(comment) => handleCommentPost(comment, activity.id)}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default CreateCommentsAndGiveKudos;
