import React, {useEffect, useState} from 'react';
import "./styles.css";
import { createUserWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/configuer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignUp = () => {
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
  const registerHandler = async(e) => {
    e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate("/home");
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
  }
    const authenticateWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id='holder'>
      <div className='login'>
        <h2>Register</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder='password' onChange={(e)=>setEmail(e.target.value)} />
          <button className='btn-login' onClick={registerHandler}>Create Account</button>
          <button className='btn-login' onClick={authenticateWithGoogle}>Sign in with Google</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
