import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./edit.css";
import {EDITUSER} from "./Action/Eidtuser";


import { useDispatch } from "react-redux";

const EditUser = (props) => {
     const dispatch = useDispatch();
    const [name, setName] = useState(props.userContact.name);
	const [contact, setContact] = useState(props.userContact.contact);
	const [location, setLocation] = useState(props.userContact.location);

	const handleSubmit = (e) => {
		e.preventDefault();
         dispatch(EDITUSER({ id: props.userContact.id, name, contact, location }));
		// props.EDITUSER( props.userContact.id, { name, contact, location });
		setName("");
		setContact("");
		setLocation("");
	};
  return (
    <div>
      
      <Form>
            
            <input  className="edit_input"  
                    type="Name"
                    value={name}
                     placeholder="Name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                
            		
            <input  className="edit_input"
                    type="text"
                    placeholder="Contacct"
                    value={contact}
                    onChange={(e) => {
                        setContact(e.target.value);
                    }}/>

            
            <input  className="edit_input"
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }} />
                

            <button onClick={handleSubmit} className="btnn" type="submit">
                Add Contact
            </button>
        </Form>
    </div>
  )
}
// const mapDispatch = {
//     EDITUSER,
// }

export default  EditUser;
// connect(null, mapDispatch)(