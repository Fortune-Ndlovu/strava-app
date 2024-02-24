import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import fortunendlovu from "../../images/fortunendlovu.jpg";
import "./EditPostForm.css";

const EditPostForm = () => {
	return (
		<div>
			<Container className="post-details-container">
				<div className="edit-post-form-header">
					<Breadcrumb>
						<Breadcrumb.Item href="/athleteSearch">Athletes</Breadcrumb.Item>
						<Breadcrumb.Item href="/profile">Fortune Ndlovu</Breadcrumb.Item>
						<Breadcrumb.Item active>Post name</Breadcrumb.Item>
						<Breadcrumb.Item active>Editing a Post</Breadcrumb.Item>
					</Breadcrumb>
					<div className="edit-post-details-form-inner-header">
						<div className="edit-post-details-form-user-identity">
							<img
								src={fortunendlovu}
								alt="user profile"
								width={64}
								height={64}
								id="editPostFormUserImg"
							/>
							<h4>Fortune Ndlovu</h4>
						</div>
						<div className="edit-post-details-form-user-interactions">
							<Button type="button">Delete</Button>
							<Button type="button">Update</Button>
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
								name="name"
								// value={editedActivity.name}
								// onChange={handleInputChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3" id="editPostFormDescriptionGroup">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								className="edit-activity-form-input-style"
								placeholder="How'd it go?"
								rows={3}
								id="description"
								name="description"
								// value={editedActivity.description}
								// onChange={handleInputChange}
							/>
						</Form.Group>
					</Form>
				</div>
			</Container>
		</div>
	);
};

export default EditPostForm;
