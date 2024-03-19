import React, { useState, useEffect } from "react";
import {
	query,
	collection,
	where,
	getDocs,
	updateDoc,
	getDoc,
	doc,
} from "firebase/firestore";
import { db, getCurrentUserId } from "../../firebase/firebase";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CommentSection from "./CommentSection";
import defaultUserProfile from "../../images/defaultUserProfile.png";
import "./CreateCommentsAndGiveKudos.css";

function CreateCommentsAndGiveKudos({
	show,
	handleClose,
	activity,
	commentUserData,
	onDeleteComment,
	onLikeComment,
}) {
	const [key, setKey] = useState("Kudos");
	const [comments, setComments] = useState([]);
	const [likers, setLikers] = useState([]);

	useEffect(() => {
		const fetchCommentsAndLikers = async () => {
			try {
				// Fetch comments for the activity
				const userDoc = doc(db, "userActivities", activity.id);
				const activityData = (await getDoc(userDoc)).data();
				const activityComments = activityData.comments || [];
				setComments(activityComments);

				// Fetch likers for the activity
				const likerIds = activityData.activityLikes || [];
				const likerPromises = likerIds.map(async (likerId) => {
					const likerDoc = query(
						collection(db, "users"),
						where("uid", "==", likerId)
					);
					const likerSnapshot = await getDocs(likerDoc);
					if (!likerSnapshot.empty) {
						const likerData = likerSnapshot.docs[0].data();
						return { id: likerId, ...likerData };
					}
				});
				const likerData = await Promise.all(likerPromises);
				setLikers(likerData);
			} catch (error) {
				console.error("Error fetching comments and likers:", error);
			}
		};

		if (show) {
			fetchCommentsAndLikers();
		}
	}, [show, activity.id]);

	const handleCommentPost = async (comment) => {
		try {
			const currentUser = getCurrentUserId();
			const userDoc = doc(db, "userActivities", activity.id);
			const existingComments = comments || [];

			const newComment = {
				userId: currentUser,
				text: comment,
			};

			// Update the comments state with the new comment
			setComments([...existingComments, newComment]);

			// Update the document with the new comments
			await updateDoc(userDoc, { comments: [...existingComments, newComment] });
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
				<Tabs
					id="controlled-tab-example"
					activeKey={key}
					onSelect={(k) => setKey(k)}
					className="mb-3"
				>
					<Tab eventKey="Kudos" title={`Kudos (${likers.length})`}>
						{likers.length > 0 ? (
							likers.map((liker) => (
								<div key={liker.id}>
									<img
										src={liker.profileImageUrl}
										alt={liker.name}
										width={50}
									/>
									<p>{liker.name}</p>
									<p>{liker.location}</p>
								</div>
							))
						) : (
							<p>This entry has no kudos yet.</p>
						)}
					</Tab>

					<Tab eventKey="Comments" title={`Comments (${comments.length})`}>
						{comments.length > 0 ? (
							comments.map((comment, index) => (
								<div key={index}>
									<div>
										<img
											src={
												commentUserData[comment.userId]?.profileImageUrl ||
												defaultUserProfile
											}
											alt="User Profile"
											width={44}
											height={44}
										/>
										<p>
											<strong>{commentUserData[comment.userId]?.name}</strong>
										</p>
									</div>
									<p>
										{comment.text}{" "}
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
						) : (
							<p>This entry has no comments yet.</p>
						)}
					</Tab>
				</Tabs>
				<CommentSection
					className="comment-section visible"
					showComments={key === "Comments"}
					onCommentPost={handleCommentPost}
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
