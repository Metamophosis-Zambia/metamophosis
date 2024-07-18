import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import  isAuthenticated from '../../App';
import './Signin.css';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Oohoo Im In!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
      alert("Wrong password");
    }
  };

  return (
    <div className="auth-container">
      <div className="card2 padding-20">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <button type="submit" className="auth-button">Sign In</button>
          </div>
          <p className="auth-text">Don't have an account? <NavLink to='/signup' className="auth-link">Sign Up</NavLink></p>
          <p className="auth-text">Forgot Password? <NavLink to='/resetpassword' className="auth-link">Reset Password</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
