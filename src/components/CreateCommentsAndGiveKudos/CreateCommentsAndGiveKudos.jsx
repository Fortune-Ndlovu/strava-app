// CreateCommentsAndGiveKudosModal.js
import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CommentSection from "./CommentSection";
function CreateCommentsAndGiveKudos({ show, handleClose, activity }) {
	const [key, setKey] = useState("Kudos");

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
											<Button variant="success" size="sm">
												Delete
											</Button>{" "}
											<Button variant="danger" size="sm">
												Like
											</Button>
										</p>
									</div>
							  ))
              : "This entry has no comments yet."}
					</Tab>
           
        </Tabs>
         <CommentSection />
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
