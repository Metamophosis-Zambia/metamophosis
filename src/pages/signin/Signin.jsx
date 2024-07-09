import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { signIn } from "../../apicalls/authCalls";
import { useNavigate } from "react-router-dom";
// import { toast, Toaster } from 'react-hot-toast';
// import mixpanel from 'mixpanel-browser';
import './Signin.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        	
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
// console.log(user)
console.log("Oohoo Im In!");
navigate("/dashboard");

  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
console.log(error.message);
alert("wrong password")
});

    }


  return (
    <div className="auth-container">
      <div className="card2 padding-20">
      <form className="sign-form" onSubmit={(e) => handleSubmit(e)}>
            <h1>Sign In</h1>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <button type="submit">Sign In</button>
            </div>
            <p className="auth-p">Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></p>
            <p className="auth-p">Forgot Paasword? <NavLink to='/resetpassword'>reset password</NavLink></p>
            {/* <Toaster toastOptions={{
          style: {
            background: 'red',
            color: '#fff',
          },
        }}/> */}
        </form>
      </div>
    </div>
        
  );
};

export default Signin;
