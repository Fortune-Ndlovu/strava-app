import { React, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import PostsCreateCommentsAndGiveKudos from "../components/CreateCommentsAndGiveKudos/PostsCreateCommentsAndGiveKudos";
import PostCommentsSection from "../components/CreateCommentsAndGiveKudos/PostCommentsSection";
import defaultUserProfile from "../images/defaultUserProfile.png";
import "../styles/PostDetailsPage.css";

const PostDetailsPage = () => {
	const { postId } = useParams();
	const navigate = useNavigate();
	const [postDetails, setPostDetails] = useState(null);
	const [
		showPostsCreateCommentsAndGiveKudos,
		setShowPostsCreateCommentsAndGiveKudos,
	] = useState(false);

	const [comments, setComments] = useState([]); // New state to store comments
	// const [showCommentsForActivity, setShowCommentsForActivity] = useState(null);
	const [commentLikes, setCommentLikes] = useState({}); // State to track likes for each comment

	useEffect(() => {
		// fetch the post details
		const fetchPostDetails = async () => {
			const postDoc = doc(db, "userPosts", postId);
			const postSnapshot = await getDoc(postDoc);

			if (postSnapshot.exists()) {
				setPostDetails({
					...postSnapshot.data(),
					id: postSnapshot.id,
				});
			}
		};
		fetchPostDetails();
	});

	const handleCommentPost = async (comment, postId) => {
		try {
			// Update the comments state with the new comment for the specific activity
			setComments((prevComments) => ({
				...prevComments,
				[postId]: [...(prevComments[postId] || []), comment],
			}));

			// Obtain the document reference for the specific activity
			const userDoc = doc(db, "userPosts", postId);

			// Get the existing comments for the activity
			const existingComments = (await getDoc(userDoc)).data().comments || [];

			// Update the document with the new comments
			await updateDoc(userDoc, { comments: [...existingComments, comment] });
		} catch (error) {
			console.error("Error saving comment:", error);
		}
	};

	const handleCommentDelete = async (commentIndex, postId) => {
		try {
			// Get the document reference for the specific post
			const userDoc = doc(db, "userPosts", postId);

			// Get the existing comments for the activity
			const existingComments = (await getDoc(userDoc)).data().comments || [];

			// Remove the comment at the specified index
			const updatedComments = [...existingComments];
			updatedComments.splice(commentIndex, 1);

			// Update the document with the new comments (excluding the deleted comment)
			await updateDoc(userDoc, { comments: updatedComments });

			// Update the state to reflect the deleted comment
			setComments((prevComments) => ({
				...prevComments,
				[postId]: updatedComments,
			}));
		} catch (error) {
			console.error("Error deleting comment:", error);
		}
	};

	const handleCommentLikeToggle = async (postId, commentIndex) => {
		try {
			const userDoc = doc(db, "userPosts", postId);
			const existingCommentLikes = commentLikes[postId] || {};

			const isLiked = existingCommentLikes[commentIndex];

			const updatedCommentLikes = {
				...existingCommentLikes,
				[commentIndex]: !isLiked,
			};

			// Update the document with the new comment likes
			await updateDoc(userDoc, { commentLikes: updatedCommentLikes });

			// Update the state to reflect the updated comment like status
			setCommentLikes((prevCommentLikes) => ({
				...prevCommentLikes,
				[postId]: updatedCommentLikes,
			}));
		} catch (error) {
			console.error("Error toggling comment like:", error);
		}
	};

	const handleDeletePost = async () => {
		const userDoc = doc(db, "userPosts", postId);
		await deleteDoc(userDoc);
		navigate("/strava-app/profile");
	};

	return (
		<div>
			<Container className="post-details-container">
				{postDetails && (
					<div className="post-details-wrapper">
						<Breadcrumb>
							<Breadcrumb.Item href="/strava-app/athleteSearch">Athletes</Breadcrumb.Item>
							<Breadcrumb.Item href="/strava-app/profile">Fortune Ndlovu</Breadcrumb.Item>
							<Breadcrumb.Item active>{postDetails.post}</Breadcrumb.Item>
						</Breadcrumb>
						<div className="post-details-data">
							<div className="post-details-data-user-header">
								<div className="post-details-data-user">
									<Link to={"/strava-app/home/profile"}>
										<img
											src={defaultUserProfile}
											alt="user profile"
											width={64}
											height={64}
											id="postDetailsUserProfileImg"
										/>
									</Link>
									<div>
										<Link to={"/strava-app/home/profile"}>
											<p className="post-details-user-name">Fortune Ndlovu</p>
										</Link>
										<p>Saturday, 24 February 2024 at 15:31</p>
									</div>
								</div>
								<div className="post-details-data-post-interactions-header">
									<Button
										id="postDetailsLikeBtn"
										onClick={() => setShowPostsCreateCommentsAndGiveKudos(true)}
									>
										<svg
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											width="16"
											height="16"
											data-testid="unfilled_kudos"
										>
											<path
												d="M15.243 7.182a1.907 1.907 0 00-.532-1.423 2.069 2.069 0 00-1.493-.641H9.863l.454-1.812A2.426 2.426 0 008.064.514h-.513l-.718 2.807L4.97 6.915.412 9.34l2.472 6.424 4.278-2.28h4.785a2.142 2.142 0 002.127-1.976l.084-1.177a1.962 1.962 0 00.712-2.097 1.93 1.93 0 00.373-1.052zM1.664 9.807l2.06-1.1 1.748 4.542-2.061 1.1-1.747-4.542zm12.289-2.038l-.268.254.165.331a.942.942 0 01-.044.903.965.965 0 01-.369.352l-.237.131-.122 1.7a1.123 1.123 0 01-1.129 1.049H6.914l-.552.295-1.748-4.547 1.1-.586 2.033-3.92.567-2.166a1.427 1.427 0 011.032 1.371c0 .071 0 .139-.007.167l-.758 3.016h4.64a1.059 1.059 0 01.764.328.917.917 0 01.26.683.942.942 0 01-.292.639z"
												fill=""
											></path>
										</svg>
									</Button>
									<Button id="postDetailsCommentsBtn">
										<svg
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 16 16"
											width="16"
											height="16"
										>
											<path
												d="M.5 1.5v11h2v3.21l6.06-3.21h6.94v-11H.5zm14 10H8.31L3.5 14.05V11.5h-2v-9h13v9z"
												fill=""
											></path>
											<path
												d="M12.96 4.5H3v1h9.43l.53-1zm-1.59 3H3v1h7.84l.53-1z"
												fill=""
											></path>
										</svg>
									</Button>
									<Dropdown id="postDetailsDropdownBtn">
										<Dropdown.Toggle
											variant="success"
											id="postDetailsDropdownBtn-dropdownBtn-list"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												fill="none"
											>
												<path
													d="M3.5 15.175a3.175 3.175 0 1 1 0-6.35 3.175 3.175 0 0 1 0 6.35zm0-5a1.824 1.824 0 1 0 0 3.649 1.824 1.824 0 0 0 0-3.649zm17 5a3.175 3.175 0 1 1 0-6.35 3.175 3.175 0 0 1 0 6.35zm0-5a1.825 1.825 0 1 0 0 3.65 1.825 1.825 0 0 0 0-3.65zm-8.5 5a3.175 3.175 0 1 1 0-6.35 3.175 3.175 0 0 1 0 6.35zm0-5a1.825 1.825 0 1 0 0 3.65 1.825 1.825 0 0 0 0-3.65z"
													fill="#000"
												/>
											</svg>
										</Dropdown.Toggle>
										<Dropdown.Menu id="module-btn-list-dropdown">
											{/* <Dropdown.Item */}
											<Link
												to={`/strava-app/home/post/${postId}/edit`}
												className="uiSocialsBtn-dropDown-link"
											>
												Edit
											</Link>
											{/* </Dropdown.Item> */}
											<Dropdown.Item
												href="#Delete"
												className="uiSocialsBtn-dropDown-link"
												onClick={handleDeletePost}
											>
												Delete
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							</div>
							<div className="post-details-data-user-inputs">
								<h1>{postDetails.post}</h1>
								<p>{postDetails.message}</p>
								{postDetails.imageUrls && postDetails.imageUrls.length > 0 && (
									<div className="posts-details-added-image">
										{postDetails.imageUrls.map((imageUrl, index) => (
											<img
												key={index}
												src={imageUrl}
												alt={`Post ${index + 1}`}
												width={70}
												height={70}
												loading="lazy"
												style={{objectFit: "cover"}}
											/>
										))}
									</div>
								)}
							</div>
							<div className="post-details-data-post-interactions-footer">
								<Button>
									<svg
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										width="16"
										height="16"
										data-testid="unfilled_kudos"
									>
										<path
											d="M15.243 7.182a1.907 1.907 0 00-.532-1.423 2.069 2.069 0 00-1.493-.641H9.863l.454-1.812A2.426 2.426 0 008.064.514h-.513l-.718 2.807L4.97 6.915.412 9.34l2.472 6.424 4.278-2.28h4.785a2.142 2.142 0 002.127-1.976l.084-1.177a1.962 1.962 0 00.712-2.097 1.93 1.93 0 00.373-1.052zM1.664 9.807l2.06-1.1 1.748 4.542-2.061 1.1-1.747-4.542zm12.289-2.038l-.268.254.165.331a.942.942 0 01-.044.903.965.965 0 01-.369.352l-.237.131-.122 1.7a1.123 1.123 0 01-1.129 1.049H6.914l-.552.295-1.748-4.547 1.1-.586 2.033-3.92.567-2.166a1.427 1.427 0 011.032 1.371c0 .071 0 .139-.007.167l-.758 3.016h4.64a1.059 1.059 0 01.764.328.917.917 0 01.26.683.942.942 0 01-.292.639z"
											fill=""
										></path>
									</svg>
								</Button>
								<Button>
									<svg
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										width="16"
										height="16"
									>
										<path
											d="M.5 1.5v11h2v3.21l6.06-3.21h6.94v-11H.5zm14 10H8.31L3.5 14.05V11.5h-2v-9h13v9z"
											fill=""
										></path>
										<path
											d="M12.96 4.5H3v1h9.43l.53-1zm-1.59 3H3v1h7.84l.53-1z"
											fill=""
										></path>
									</svg>
								</Button>
							</div>
						</div>
						<PostCommentsSection
							showComments={
								showPostsCreateCommentsAndGiveKudos === postDetails.id
							}
							onCommentPost={(comment) =>
								handleCommentPost(comment, postDetails.id)
							}
						/>

						<PostsCreateCommentsAndGiveKudos id="comments-post-block"
							show={showPostsCreateCommentsAndGiveKudos}
							handleClose={() => setShowPostsCreateCommentsAndGiveKudos(false)}
							post={postDetails}
							onDeleteComment={(commentIndex) =>
								handleCommentDelete(commentIndex, postDetails.id)
							}
							onLikeComment={(commentIndex) =>
								handleCommentLikeToggle(postDetails.id, commentIndex)
							}
						/>
						<div>
							{postDetails.comments.length > 0
								? postDetails.comments.map((comment, index) => (
										<div key={index}>
											<p>
												{comment}{" "}
												<Button
													variant="success"
													size="sm"
													onClick={() =>
														handleCommentDelete(index, postDetails.id)
													}
												>
													Delete
												</Button>{" "}
												<Button
													variant="danger"
													size="sm"
													onClick={() =>
														handleCommentLikeToggle(postDetails.id, index)
													}
												>
													Like
												</Button>
												<p>
													{postDetails.commentLikes?.[index] ? "1 Like" : ""}
												</p>
											</p>
										</div>
								  ))
								: "This entry has no comments yet."}
						</div>
					</div>
				)}
			</Container>
		</div>
	);
};

export default PostDetailsPage;
