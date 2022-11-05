import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container } from 'react-bootstrap';
import FormCom from './FormCom';
import Contact from './Contact';
import "./holder.css";
import {ADDNEW_USER} from './Action/UserAction'
import { collection, query, onSnapshot,  orderBy } from "firebase/firestore";
import { db } from "./firebase/configuer";
import { useDispatch } from "react-redux";

const Holder = () => {
  const dispatch = useDispatch();
  useEffect(()=>{

    const readdata =  async() => {
      const q = query(collection(db, "users"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const cities = [];
        querySnapshot.forEach((doc) => {
            cities.push(doc.data());
        });
        dispatch(ADDNEW_USER(cities))
        console.log(cities);
});
    }
    readdata()
  },[])

  //  const addContact = (user) => {
	// 	setUsersContact([...usersContact, user])
	// };
  // const deleteUser = (id) => {
  //   setUsersContact(
  //     usersContact.filter((usersContact) => {
  //       if (usersContact.id !== id) {
  //         return usersContact;
  //       }
  //     })
  //   )
  // }
  // const Edituser = (id, newData) => {
  //   setUsersContact(
  //     usersContact.map((user) => {
  //       if (user.id === id) {
  //         return newData
  //       }
  //       return user;
  //     })
  //   )
  // }

  return (
    <div id='main-holder'>
      <div className='holder'>
          <Container>
              <FormCom 
              //  newContact={addContact} 
              />
              <Contact 
              // contactData={usersContact} delete={deleteUser} editUser={Edituser}
              />
          </Container>
      </div>
    </div>
  )
}

export default Holder
