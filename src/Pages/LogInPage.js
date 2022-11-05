import React, {useState} from 'react';
import "./styles.css";
import {
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/configuer";
import { useNavigate } from "react-router-dom";
import { async } from '@firebase/util';
const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
	const navigate = useNavigate();
  const loginHandler = async(e) => {
    e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate("/home", { replace: true });
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
  }
  const google = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithPopup(auth, provider);
			console.log(user);
			navigate("/home", { replace: true });
		} catch (e) {
			console.log(e);
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
