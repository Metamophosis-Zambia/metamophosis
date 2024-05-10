/* eslint-disable */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import {}
import { useNavigate } from "react-router-dom";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logos_Icon/nicetyfarmW.png'

function LoginForm() {
	const navigate = useNavigate()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	
	const handleSubmit = async (event) => {
		event.preventDefault();
	const auth = getAuth();
	
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
	};

	return (
		<div className="bg-green-600 h-screen flex flex-col items-center justify-center ">
			<div>
				<p className="text-white text-center text-l">Welcome back</p>    
				<img className="w-44" src={Logo} alt="Nicetyfarm logo" />
			</div>
		<form className="flex flex-col w-64 justify-center items-center bg-white rounded h-64" onSubmit={handleSubmit}>
		<h3 className="text-lg">Signin with email</h3>
			
			{error && <div>{error}</div>}
			<label className="flex flex-col ">
				Email:
				<input required className="border-2 border-gray-300 rounded" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</label>
			<label className="flex flex-col ">
				Password:
				<input required className="border-2 border-gray-300 rounded" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			<button className="bg-green-500 hover:bg-green-700 rounded px-4 py-2 mt-4 text-green-200" type="submit">Login</button>
			<p className="text-sm mt-4">Not a user yet?<Link to="/signup"> <span className="hover:cursor-pointer hover:underline text-blue-400">Create account</span></Link></p>
		</form>
		</div>
	);
}

export default LoginForm;
