import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function PostsCreateCommentsAndGiveKudos({ show, handleClose, posts }) {
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
							This entry has no comments yet.
						</Tab>
					</Tabs>
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
		</div>
	);
}

export default PostsCreateCommentsAndGiveKudos;
