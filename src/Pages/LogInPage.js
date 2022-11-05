import React, {useState,useEffect} from 'react';
import { useSelector } from "react-redux";
import "./styles.css";
import {
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/configuer";
import { useNavigate } from "react-router-dom";
const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const  users = useSelector((state) => {
    return state.usersReducer.user
  });
  useEffect(() => {
    if (users) {
      navigate("/home");
    }
  }, [users, navigate]);
  const loginHandler = async(e) => {
    e.preventDefault();
		try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
		setEmail("");
		setPassword("");
  }
  const google = async (e) => {
		e.preventDefault();
		 try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
		setEmail("");
		setPassword("");
	};
  return (
    <div id='holder'>
      <div className='login'>
        <h2>LogIn</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
          <button className='btn-login' onClick={loginHandler}>Login</button>
          <button className='btn-login' onClick={google}>Sign in with google</button>
        </form>
      </div>
    </div>
  )
}

export default LogInPage
