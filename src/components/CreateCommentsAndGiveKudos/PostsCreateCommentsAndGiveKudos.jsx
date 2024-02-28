import { React, useState } from "react";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PostCommentsSection from "./PostCommentsSection";
function PostsCreateCommentsAndGiveKudos({ show, handleClose, posts }) {
    const [comments, setComments] = useState([]); // New state to store comments

    const handleCommentPost = async (comment, postsId) => {
		console.log("Comment posted:", comment);
		try {
			// Update the comments state with the new comment for the specific activity
			setComments((prevComments) => ({
				...prevComments,
				[postsId]: [...(prevComments[postsId] || []), comment],
			}));

			// Obtain the document reference for the specific activity
			const userDoc = doc(db, "userPosts", postsId);

			// Get the existing comments for the activity
			const existingComments = (await getDoc(userDoc)).data().comments || [];

			// Update the document with the new comments
			await updateDoc(userDoc, { comments: [...existingComments, comment] });
		} catch (error) {
			console.error("Error saving comment:", error);
		}
	};

	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{posts.post}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{posts.message}{" "}
					<Tabs
						defaultActiveKey="profile"
						id="uncontrolled-tab-example"
						className="mb-3"
					>
                        <Tab eventKey="home" title={`Kudos (${posts.kudos.length})`}>
							This entry has no kudos yet.{" "}
						</Tab>
						<Tab eventKey="profile" title={`Comments (${posts.comments.length})`}>
							{posts.comments.length > 0
							? posts.comments.map((comment, index) => (
									<div key={index}>
										<p>
											{comment}{" "}
											<Button
												variant="success"
												size="sm"
												// onClick={() => onDeleteComment(index)}
											>
												Delete
											</Button>{" "}
											<Button
												variant="danger"
												size="sm"
												// onClick={() => onLikeComment(index)}
											>
												Like
											</Button>
											<p>{posts.commentLikes?.[index] ? "1 Like" : ""}</p>
										</p>
									</div>
							  ))
							: "This entry has no comments yet."}
						</Tab>
					</Tabs>
				</Modal.Body>
                <Modal.Footer>
                    <PostCommentsSection onCommentPost={(comment) => handleCommentPost(comment, posts.id)}/>
					
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default PostsCreateCommentsAndGiveKudos;
