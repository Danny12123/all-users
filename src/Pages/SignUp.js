import React, {useState} from 'react';
import "./styles.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/configuer";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const registerHandler = async(e) => {
    e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			console.log(user);
			navigate("/login", { replace: true });
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
  }
  
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
        </form>
      </div>
    </div>
  )
}

export default SignUp
