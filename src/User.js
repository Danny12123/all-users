import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Card, Col } from "react-bootstrap";
import EditUser from './EditUser';
import {DELETEUSER} from "./Action/UserAction";
import { connect } from 'react-redux';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/configuer";

function User(props) {
	const headleEdit = async() => {
		await deleteDoc(doc(db, "users", props.userContact.id));
		// props.DELETEUSER(props.userContact.id);
	}
		// props.DELETEUSER(props.userContact.id);
	
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>  <h4 className="h4">Add a new contact</h4></Modal.Title>
				</Modal.Header>
				<EditUser editUser={props.editUser} userContact={props.userContact}  />
				
			</Modal>
			<Col  style={{ width: "22rem", marginBottom: "10px" }}>
				<Card className="card">
					<Card.Body>
						<Card.Title><h5 className="h5">Name:{props.userContact.name}</h5></Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							<h6>Email:{props.userContact.contact}</h6>
						</Card.Subtitle>
						<Card.Text><h6>Gen:{props.userContact.location}</h6></Card.Text>
						<button href="#" className="btnn-1" variant="primary" onClick={handleShow} >
							Edit
						</button>
						<button href="#" className="btnn-2" variant="danger" onClick={headleEdit}>
							Delete
						</button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}


export default User;