import { React, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const CreatePostsTable = ({ posts, onEditPost, onDeletePost }) => {
	const [editIndex, setEditIndex] = useState(null);
	const [editedPost, setEditedPost] = useState({});

	const handleEditClick = (index) => {
		setEditIndex(index);
		setEditedPost({ ...posts[index] });
	};

	const handleSaveClick = (index) => {
		onEditPost(index, editedPost);
		setEditIndex(null);
		setEditedPost({});
	};

	const handleCancelClick = () => {
		setEditIndex(null);
		setEditedPost({});
	};

	const handleInputChange = (key, value) => {
		setEditedPost((prev) => ({ ...prev, [key]: value }));
	};

	const handleDeleteClick = (index) => {
		onDeletePost(index);
	};

	return (
		<div>
			Create Posts Table
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Post</th>
						<th>Message</th>
					</tr>
				</thead>
				<tbody>
					{posts && posts.length > 0 ? (
						posts.map((post, index) => (
							<tr key={index}>
								<td>
									{editIndex === index ? (
										<input
											type="text"
											value={editedPost.post}
											onChange={(e) =>
												handleInputChange("post", e.target.value)
											}
										/>
									) : (
										post.post
									)}
								</td>

								<td>
									{editIndex === index ? (
										<input
											type="text"
											value={editedPost.message}
											onChange={(e) =>
												handleInputChange("message", e.target.value)
											}
										/>
									) : (
										post.message
									)}
								</td>

								{/* Button cell */}
								<td className="activities-table-buttons">
									{editIndex === index ? (
										<>
											<Button
												variant="success"
												onClick={() => handleSaveClick(index)}
											>
												Save
											</Button>
											<Button variant="danger" onClick={handleCancelClick}>
												Cancel
											</Button>
										</>
									) : (
										<>
											<Button
												variant="primary"
												onClick={() => handleEditClick(index)}
											>
												Edit
											</Button>
											<Button
												variant="danger"
												onClick={() => handleDeleteClick(index)}
											>
												Delete
											</Button>
										</>
									)}
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="3">No posts found</td>
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	);
};

export default CreatePostsTable;
