import React from "react";
import User from "./User";
import { Row, Container } from "react-bootstrap";
import { connect, useSelector } from "react-redux";

function Contact(props) {
    const {users} =  useSelector((state) => {
        return state
    }) 
	return (
        <div>
            <Container>
                <Row>
                    {users.map((item, index) => {
                        return <User 
                            key={index} 
                            userContact={item} 
                            delete={props.delete}
                            editUser={ props.editUser}
                            />
                    })}
                </Row>
            </Container>

        </div>
	);
}

// const mapstate = (state) => {
//     return (
//         users: state.users,
//     )
// }

// export default connect(mapstate) (Contact);
export default Contact;