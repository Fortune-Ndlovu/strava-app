import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
	query,
	collection,
	onSnapshot,
	updateDoc,
	getDoc,
	doc,
	where,
	getDocs,
} from "firebase/firestore";
import { db, getCurrentUserId } from "../../firebase/firebase";
import CommentSection from "../CreateCommentsAndGiveKudos/CommentSection";
import CreateCommentsAndGiveKudos from "../CreateCommentsAndGiveKudos/CreateCommentsAndGiveKudos";
import defaultUserProfile from "../../images/defaultUserProfile.png";
import "./sidebarStyles/CenterDashboardAthleteSidebar.css";
import PostsDashboard from "./PostsDashboard";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function CenterDashboardAthleteSidebar({ athlete }) {
	const [activities, setActivities] = useState([]);
	const [comments, setComments] = useState([]);
	const [showCommentsForActivity, setShowCommentsForActivity] = useState(null);
	const [commentLikes, setCommentLikes] = useState({});
	const [showCommentsAndGiveKudos, setShowCommentsAndGiveKudos] =
		useState(false);
	const [userData, setUserData] = useState({});
	const [followingUsersData, setFollowingUsersData] = useState({});
	const [commentUsersData, setCommentUsersData] = useState({});

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

	useEffect(() => {
		// Setting up a snapshot listener to track changes in the collection
		const unsubscribeActivitiesCollection = onSnapshot(
			collection(db, "userActivities"),
			(snapshot) => {
				// Update the state whenever there's a change in the collection
				// Filtering activities to show only those created by the current user
				const userActivities = snapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }))
					.filter((activity) => activity.userId === getCurrentUserId())
					.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis());

				// Clone the userActivities array
				const clonedUserActivities = [...userActivities];

				setActivities(clonedUserActivities);

				// Fetch comments for each activity and update the comments state
				clonedUserActivities.forEach(async (activity) => {
					const activityId = activity.id;
					const userDoc = doc(db, "userActivities", activityId);
					const existingComments =
						(await getDoc(userDoc)).data().comments || [];
					setComments((prevComments) => ({
						...prevComments,
						[activityId]: existingComments,
					}));

					const existingCommentLikes =
						(await getDoc(userDoc)).data().commentLikes || {};
					setCommentLikes((prevCommentLikes) => ({
						...prevCommentLikes,
						[activityId]: existingCommentLikes,
					}));
				});
			}
		);

		// Cleanup the listener when the component unmounts
		return () => unsubscribeActivitiesCollection();
	}, []);

	/////////////////////////////////////////// Fetch user data based on user IDs in comments ///////////////////////////////////////////
	useEffect(() => {
		const fetchCommentUsersData = async () => {
			try {
				// Get unique user IDs from comments
				const userIds = Object.values(comments).flatMap((commentList) =>
					commentList.map((comment) => comment.userId)
				);
				const uniqueUserIds = Array.from(new Set(userIds));

				// Fetch user data for each unique user ID
				const userDataPromises = uniqueUserIds.map(async (userId) => {
					const userQuery = query(
						collection(db, "users"),
						where("uid", "==", userId)
					);
					const userSnapshot = await getDocs(userQuery);
					if (!userSnapshot.empty) {
						const userData = userSnapshot.docs[0].data();
						return { userId, userData };
					}
					return null;
				});

				// Resolve all promises
				const resolvedUserData = await Promise.all(userDataPromises);

				// Convert user data to an object with userId as key
				const userDataObject = resolvedUserData.reduce(
					(acc, { userId, userData }) => {
						if (userData) {
							acc[userId] = userData;
						}
						return acc;
					},
					{}
				);

				// Set state with the fetched user data
				setCommentUsersData(userDataObject);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchCommentUsersData();
	}, [comments]); // Trigger fetch on changes in comments

	// ///////////////////////////////

	///////////////
	// fetch the users data that the current user is following and correspond them with their activities
	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const currentUser = getCurrentUserId();
				if (currentUser) {
					const userQuery = query(
						collection(db, "users"),
						where("uid", "==", currentUser)
					);
					const userSnapshot = await getDocs(userQuery);

					if (!userSnapshot.empty) {
						const userData = userSnapshot.docs[0].data();
						const followingIds = userData.following || []; // Assuming following is an array of user IDs

						// Fetch data of the users the current user is following
						const followingUsersDataPromises = followingIds.map(
							async (userId) => {
								const followingUserQuery = query(
									collection(db, "users"),
									where("uid", "==", userId)
								);
								const followingUserSnapshot = await getDocs(followingUserQuery);
								if (!followingUserSnapshot.empty) {
									const followingUserData =
										followingUserSnapshot.docs[0].data();
									return followingUserData;
								}
								return null;
							}
						);

						// Resolve all promises
						const followingUsersDataArray = await Promise.all(
							followingUsersDataPromises
						);

						// Filter out null values (failed fetches) and create an object with userId as key
						const filteredFollowingUsersData = followingUsersDataArray.reduce(
							(acc, user) => {
								if (user) {
									acc[user.uid] = user;
								}
								return acc;
							},
							{}
						);

						// Set state with the fetched user data
						setFollowingUsersData(filteredFollowingUsersData);
					}
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, []);

	// fetching user data that the current user is following

	useEffect(() => {
		const fetchActivities = async () => {
			try {
				const currentUser = getCurrentUserId();
				if (currentUser) {
					// Fetch activities of the current user
					const currentUserActivitiesRef = collection(db, "userActivities");
					const currentUserActivitiesQuery = query(
						currentUserActivitiesRef,
						where("userId", "==", currentUser)
					);
					const currentUserActivitiesSnapshot = await getDocs(
						currentUserActivitiesQuery
					);
					let currentUserActivities = currentUserActivitiesSnapshot.docs.map(
						(doc) => ({
							id: doc.id,
							...doc.data(),
						})
					);

					// Fetch data of the users the current user is following
					const followingRef = collection(db, "users");
					const followingQuery = query(
						followingRef,
						where("uid", "==", currentUser)
					);
					const followingSnapshot = await getDocs(followingQuery);

					if (!followingSnapshot.empty) {
						const followingData = followingSnapshot.docs[0].data();

						if (followingData.following && followingData.following.length > 0) {
							for (const followingUserId of followingData.following) {
								// Fetch activities of followed users
								const followingActivitiesQuery = query(
									currentUserActivitiesRef,
									where("userId", "==", followingUserId)
								);
								const followingActivitiesSnapshot = await getDocs(
									followingActivitiesQuery
								);
								const followingUserActivities =
									followingActivitiesSnapshot.docs.map((doc) => ({
										id: doc.id,
										...doc.data(),
									}));
								console.log("followingUserActivities", followingUserActivities);

								// Merge followed user activities with current user activities
								currentUserActivities = currentUserActivities.concat(
									followingUserActivities
								);
							}
						}
					}

					// Remove duplicates by using a Set to maintain uniqueness
					const uniqueActivities = Array.from(
						new Set(currentUserActivities.map((activity) => activity.id))
					).map((id) =>
						currentUserActivities.find((activity) => activity.id === id)
					);

					// Sort all activities by createdAt timestamp
					const sortedActivities = uniqueActivities.sort(
						(a, b) => b.createdAt.toMillis() - a.createdAt.toMillis()
					);

					// Clone the activities array
					const updatedActivities = [...sortedActivities];

					// Set activities state
					setActivities(updatedActivities);
				}
			} catch (error) {
				console.error("Error fetching activities:", error);
			}
		};

		fetchActivities();
	}, []);

	/////////////////////////////////
	const handleCommentPost = async (comment, activityId) => {
		try {
			const currentUser = getCurrentUserId();
			const userDoc = doc(db, "userActivities", activityId);

			// Get the existing comments for the activity
			const existingComments = (await getDoc(userDoc)).data().comments || [];

			// Construct the new comment object with userId and text
			const newComment = {
				userId: currentUser, // Include userId of the current user
				text: comment, // Comment text
			};

			// Update the comments state with the new comment for the specific activity
			setComments((prevComments) => ({
				...prevComments,
				[activityId]: [...(prevComments[activityId] || []), newComment],
			}));

			// Update the document with the new comments
			await updateDoc(userDoc, { comments: [...existingComments, newComment] });

			// Clone the activities array
			const clonedActivities = [...activities];
			setActivities(clonedActivities);
		} catch (error) {
			console.error("Error saving comment:", error);
		}
	};

	const handleCommentDelete = async (commentIndex, activityId) => {
		try {
			// Get the document reference for the specific activity
			const userDoc = doc(db, "userActivities", activityId);

			// Get the existing comments for the activity
			const existingComments = (await getDoc(userDoc)).data().comments || [];

			// Remove the comment at the specified index
			const updatedComments = existingComments.filter(
				(_, index) => index !== commentIndex
			);

			// Update the document with the new comments (excluding the deleted comment)
			await updateDoc(userDoc, { comments: updatedComments });

			// Update the state to reflect the deleted comment
			setComments((prevComments) => ({
				...prevComments,
				[activityId]: updatedComments,
			}));

			// Clone the activities array
			const clonedActivities = [...activities];
			setActivities(clonedActivities);
		} catch (error) {
			console.error("Error deleting comment:", error);
		}
	};

	const handleCommentLikeToggle = async (activityId, commentIndex) => {
		try {
			const userDoc = doc(db, "userActivities", activityId);
			const existingCommentLikes = commentLikes[activityId] || {};

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
				[activityId]: updatedCommentLikes,
			}));

			// Clone the activities array
			const clonedActivities = [...activities];
			setActivities(clonedActivities);
		} catch (error) {
			console.error("Error toggling comment like:", error);
		}
	};

	/////////////////////////////// Activity Like ///////////////////////////////

	const handleLikeActivity = async (activityId) => {
		try {
			const currentUser = getCurrentUserId();

			// Clone the activities array
			const updatedActivities = [...activities];

			// Get the index of the activity in the cloned array
			const activityIndex = updatedActivities.findIndex(
				(activity) => activity.id === activityId
			);

			if (activityIndex !== -1) {
				// Check if the current user has already liked the activity
				const alreadyLiked =
					updatedActivities[activityIndex].activityLikes.includes(currentUser);

				if (!alreadyLiked) {
					// Like the activity
					const updatedLikes = [
						...updatedActivities[activityIndex].activityLikes,
						currentUser,
					];
					updatedActivities[activityIndex] = {
						...updatedActivities[activityIndex],
						activityLikes: updatedLikes,
					};

					// Update activity likes in the database
					await updateActivityLikesInDatabase(activityId, updatedLikes);

					// Update the state with the cloned activities array
					setActivities(updatedActivities);
				} else {
					// Show the modal if the activity is already liked
					setShowCommentsAndGiveKudos((prev) =>
						prev === activityId ? true : activityId
					);
				}
			}
		} catch (error) {
			console.error("Error handling like activity:", error);
		}
	};

	const updateActivityLikesInDatabase = async (activityId, updatedLikes) => {
		try {
			// Reference to the activity document in the Firestore database
			const activityRef = doc(db, "userActivities", activityId);

			// Update the activityLikes field in the activity document
			await updateDoc(activityRef, { activityLikes: updatedLikes });

			console.log("Activity likes updated in the database successfully.");
		} catch (error) {
			console.error("Error updating activity likes in the database:", error);
		}
	};

	return (
		<div id="homeDashboardFeedUI" className="center-sidebar-container">
			<Container>
				<PostsDashboard athlete={athlete} />
				{activities.map((activity) => (
					<Card
						key={activity.id}
						style={{ width: "auto", marginBottom: "14px" }}
					>
						<Card.Body>
							<div>
								<Row>
									<div className="feed-ui-card">
										<Col>
											<Row>
												<Col
													sm={3}
													className="feed-ui-user-image-col"
													style={{ width: "15%" }}
												>
													<div className="feed-ui-user-image-wrapper">
														{activity.userId === getCurrentUserId() ? (
															// Display the current user's profile image
															userData.profileImageUrl ? (
																<Card.Img
																	variant="top"
																	id="feed-ui-user-image"
																	src={userData.profileImageUrl}
																	width={44}
																	height={44}
																/>
															) : (
																<Card.Img
																	variant="top"
																	id="feed-ui-user-image"
																	src={defaultUserProfile}
																	width={44}
																	height={44}
																/>
															)
														) : // Display the profile image of the user who created the activity
														followingUsersData[activity.userId]
																?.profileImageUrl ? (
															<Card.Img
																variant="top"
																id="feed-ui-user-image"
																src={
																	followingUsersData[activity.userId]
																		?.profileImageUrl
																}
																width={44}
																height={44}
															/>
														) : (
															<Card.Img
																variant="top"
																id="feed-ui-user-image"
																src={defaultUserProfile}
																width={44}
																height={44}
															/>
														)}
													</div>
												</Col>

												<Col sm={9}>
													<div className="feed-ui-user-info">
														<p className="feed-ui-user-name">
															{activity.userId === getCurrentUserId()
																? // Display current user's name if the activity was created by the current user
																  userData.name
																: // Display the name of the user they follow if the activity was created by a user they follow
																  followingUsersData &&
																  followingUsersData[activity.userId]?.name}
														</p>
														<p className="feed-ui-user-location">
															<time data-test id="date_at_time">
																{activity.createdAt &&
																	new Date(
																		activity.createdAt.toDate()
																	).toLocaleDateString("en-US", {
																		day: "numeric",
																		month: "long",
																		year: "numeric",
																	})}{" "}
																at{" "}
																{activity.createdAt &&
																	new Date(
																		activity.createdAt.toDate()
																	).toLocaleTimeString("en-US", {
																		hour: "numeric",
																		minute: "numeric",
																	})}
															</time>
															<br />
														</p>
													</div>
												</Col>
											</Row>
										</Col>
										<Col sm={4}>
											<div className="feed-ui-card-external-socialsBtn-wrapper">
												<Dropdown id="uiSocialsBtn">
													<Dropdown.Toggle
														variant="success"
														id="uiSocialsBtn-dropdownBtn-list"
													>
														<RiArrowDropDownLine className="uiSocialsBtn-dropdownUp-icon" />
													</Dropdown.Toggle>
													<Dropdown.Menu id="module-btn-list-dropdown">
														<Dropdown.Item
															href="#Facebook"
															className="uiSocialsBtn-dropDown-link"
														>
															Facebook
														</Dropdown.Item>
														<Dropdown.Item
															href="#Twitter"
															className="uiSocialsBtn-dropDown-link"
														>
															Twitter
														</Dropdown.Item>
														<Dropdown.Item
															href="#Get Embed Code"
															className="uiSocialsBtn-dropDown-link"
														>
															Get Embed Code
														</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
											</div>
										</Col>
									</div>
								</Row>
							</div>
							<div id="feedUIPackages">
								<div className="feed-ui-media">
									<div className="feed-ui-run-icon">
										<svg
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
										>
											<title>Run</title>
											<path
												d="M21.3 18.12L14.98 6.28a2.6 2.6 0 00-4.63.07l-.46.93a.585.585 0 01-.21-.45V3.17A2.452 2.452 0 007.24.72a2.172 2.172 0 00-2.01 1.4L2.91 6.84 1.39 7.96a2.768 2.768 0 00-1.06 2.06 2.96 2.96 0 00.9 2.32l7.76 7.9a11.62 11.62 0 008.22 3.43h3.65a2.757 2.757 0 002.41-1.4l.05-.09a2.7 2.7 0 00-.01-2.73 2.665 2.665 0 00-2.01-1.33zm.85 3.39l-.05.09a1.425 1.425 0 01-1.24.73h-3.65a10.257 10.257 0 01-7.26-3.04l-7.78-7.92a1.566 1.566 0 01-.49-1.27 1.426 1.426 0 01.5-1.05l.71-.53 8.6 8.48h1.64v-.28L3.98 7.7l2.48-5.02a.848.848 0 01.78-.61 1.1 1.1 0 011.09 1.1v3.66a1.92 1.92 0 001.92 1.92h.43l.88-1.8a1.24 1.24 0 011.12-.7 1.257 1.257 0 011.11.67l1.04 1.94L12.69 10v1.52l2.77-1.47.77 1.42v.01l-2.63 1.39v1.53l3.26-1.73.74 1.37-3.02 1.6v1.53l3.65-1.94 2.06 3.85.25.36h.4a1.376 1.376 0 011.2.69 1.34 1.34 0 01.01 1.38z"
												fill=""
											></path>
										</svg>
									</div>
									<div className="feed-ui-media-activity">
										<h4>
											<Link to={`/strava-app/home/activity/${activity.id}`}>
												{activity.name}
											</Link>
										</h4>
										<p>{activity.description}</p>
										<div className="feed-ui-media-stats">
											<div className="media-stats-wrapper">
												<div>
													<p className="media-stats-para">Distance</p>
													<p className="media-stats-para-numbers">
														{activity.distance} Km
													</p>
												</div>

												<div>
													<p className="media-stats-para">Elev Gain</p>
													<p className="media-stats-para-numbers">
														{activity.elevation} m
													</p>
												</div>

												<div>
													<p className="media-stats-para">Time</p>
													<p className="media-stats-para-numbers">
														{activity.hour}h {activity.minute}m{" "}
														{activity.second}s
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="feed-ui-activity-container">
								<div
									className={`feed-ui-activity-images ${
										activity.imageUrls.length === 1 ? "single-image" : ""
									}`}
								>
									{activity.imageUrls && activity.imageUrls.length > 0 && (
										<>
											{activity.imageUrls.map((imageUrl, index) => (
												<div className="feed-ui-activity-imageLeft" key={index}>
													<Link to={`/strava-app/home/activity/${activity.id}`}>
														<Card.Img
															variant="top"
															src={imageUrl}
															width={
																activity.imageUrls.length === 1 ? 574 : 287
															}
															height={287}
														/>
														{index === 0 && (
															<>
																<Button
																	title="View all kudos"
																	id="start-and-end-hidden-btn"
																>
																	Start and end hidden
																</Button>
																<Button
																	title="View all kudos"
																	id="saveRouteBtn"
																>
																	Save Route
																</Button>
															</>
														)}
													</Link>
												</div>
											))}
										</>
									)}
								</div>
								<div className="activity-kudos-reactions">
									<p>
										{activity.activityLikes
											? `${activity.activityLikes.length} Likes`
											: ""}
									</p>

									<Button
										title="View all kudos"
										id="activityKudosLikeBtn"
										onClick={() => handleLikeActivity(activity.id)}
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
									<Button
										title="Comments"
										id="activityKudosCommentBtn"
										// Using the previous state to toggle the activity, if the prev state is the same as the current activity id, set the state to null (closing the comments),
										// otherwise, we set it to the current activity id (opening the comments)
										onClick={() =>
											setShowCommentsForActivity((prev) =>
												prev === activity.id ? null : activity.id
											)
										}
									>
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
								{comments[activity.id]?.reverse().map((comment, index) => (
									<div
										key={`${comment.id}_${index}`}
										className="comment-display-container"
									>
										<div className="comment-display-wrapper">
											<div className="commenter-info-wrapper">
												<img
													src={
														commentUsersData[comment.userId]?.profileImageUrl ||
														defaultUserProfile
													}
													alt="User Profile"
													width={44}
													height={44}
													className="commenter-info-img"
												/>
												<div className="commenterNameTextWrapper">
													<p className="commenterName">
														{commentUsersData[comment.userId]?.name}
													</p>
													<p className="commenterText">{comment.text}</p>
												</div>
											</div>
											<div className="comment-btn-wrapper">
												<span>
													{" "}
													{commentLikes[activity.id]?.[index] ? "1 Like" : ""}
												</span>
												<div id="commentsBtnsWrapper">
													{commentLikes[activity.id]?.[index] ? (
														<FaHeart
															id="heartTheComment"
															onClick={() =>
																handleCommentLikeToggle(activity.id, index)
															}
														/>
													) : (
														<FaRegHeart
															id="heartTheComment"
															onClick={() =>
																handleCommentLikeToggle(activity.id, index)
															}
														/>
													)}
													<Button
														variant="link"
														size="sm"
														id="deTheComment"
														onClick={() =>
															handleCommentDelete(index, activity.id)
														}
													>
														Delete
													</Button>
												</div>
											</div>
										</div>
									</div>
								))}

								{/* Include the CommentSection component */}
								<CommentSection
									showComments={showCommentsForActivity === activity.id}
									onCommentPost={(comment) =>
										handleCommentPost(comment, activity.id)
									}
								/>
								{/* Conditionally render CreateCommentsAndGiveKudos component */}
								{showCommentsAndGiveKudos === activity.id && (
									<CreateCommentsAndGiveKudos
										show={showCommentsAndGiveKudos === activity.id}
										handleClose={() => setShowCommentsAndGiveKudos(false)}
										activity={activity}
										commentUserData={commentUsersData}
										onDeleteComment={(commentIndex) =>
											handleCommentDelete(commentIndex, activity.id)
										}
										onLikeComment={(commentIndex) =>
											handleCommentLikeToggle(activity.id, commentIndex)
										}
										handleCommentPost={(comment) =>
											handleCommentPost(comment, activity.id)
										}
									/>
								)}
							</div>
						</Card.Body>
					</Card>
				))}
				<div className="feed-end">
					<p>Update your profile settings if you have not done so already for a personalized experience - visit your <Link to={"/strava-app/home/settings"}>Settings</Link>.</p>
					<p>
						No more recent activity available. <br></br>To create new
						activities, visit the{" "}
						<Link to={"/strava-app/home/manual"}>Manual Entry Form</Link>.
					</p>
				</div>
			</Container>
		</div>
	);
}
CenterDashboardAthleteSidebar.propTypes = {
	athlete: PropTypes.shape({
		firstname: PropTypes.string,
		lastname: PropTypes.string,
	}),
};

export default CenterDashboardAthleteSidebar;
