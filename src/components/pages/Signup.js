/* eslint-disable */
import useSignup from '../../hooks/useSignup';                  
import React, { useState } from 'react';
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logos_Icon/nicetyfarmW.png'

function Signup() {
	const navigate = useNavigate()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	// const [error, setError] = useState('');
	const {signup, error, loading} = useSignup()

	const handleSubmit = async (event) => {
		event.preventDefault();
		signup(email, password)
		navigate('/')
	};

	return (
		<div className="bg-green-600 h-screen flex flex-col items-center justify-center ">
			<div>
				<p className="text-white text-center text-l">Create an Acount</p>
				<img className="w-44" src={Logo} alt="Nicetyfarm logo" />
			</div>
		<form className="flex flex-col w-64 justify-center items-center bg-white rounded h-auto py-10 none" onSubmit={handleSubmit}>
            <h3 className="text-lg">Create an account</h3>
			{error && <div>{error}</div>}
			<label className="flex flex-col ">
				Email:
				<input required className="border-2 border-gray-300 rounded" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</label>
						<label className="flex flex-col ">
				Username:
				<input required className="border-2 border-gray-300 rounded" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
			</label>
			<label className="flex flex-col ">
				Password:
				<input required className="border-2 border-gray-300 rounded" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			{!loading && 
			<button className="bg-green-500 hover:bg-green-700 rounded px-4 py-2 mt-4 text-green-200" type="submit">Signup</button>
			
			}
			{loading && 
			<button disabled className="bg-green-500 hover:bg-green-700 rounded px-4 py-2 mt-4 text-green-200" type="submit">Loading</button>
			
			}
			<p className="text-sm mt-4">Already a user?<Link to="/signin"> <span className="hover:cursor-pointer hover:underline text-blue-400">Login</span></Link></p>
			<p className="text-sm mt-4">Or</p>
			{!loading && 
			<button className="bg-green-500 hover:bg-green-700 rounded px-4 py-2 mt-4 text-green-200" type="button">Signup With Phone</button>
			
			}
		</form>
		<form className="flex flex-col w-64 justify-center items-center bg-white rounded h-auto py-10" onSubmit={handleSubmit}>
            <h3 className="text-lg">Create an account</h3>
			{error && <div>{error}</div>}
			<label className="flex flex-col ">
				Email:
				<input required className="border-2 border-gray-300 rounded" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</label>
						<label className="flex flex-col ">
				Username:
				<input required className="border-2 border-gray-300 rounded" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
			</label>
			<label className="flex flex-col ">
				Password:
				<input required className="border-2 border-gray-300 rounded" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			{!loading && 
			<button className="bg-green-500 hover:bg-green-700 rounded px-4 py-2 mt-4 text-green-200" type="submit">Signup</button>
			
			}
			{loading && 
			<button disabled className="bg-green-500 hover:bg-green-700 rounded px-4 py-2 mt-4 text-green-200" type="submit">Loading</button>
			
			}
			<p className="text-sm mt-4">Already a user?<Link to="/signin"> <span className="hover:cursor-pointer hover:underline text-blue-400">Login</span></Link></p>
			<p className="text-sm mt-4">Or</p>
			{!loading && 
			<button className="bg-green-500 hover:bg-green-700 rounded px-4 py-2 mt-4 text-green-200" type="button">Signup With Email</button>
			
			}
		</form>
		</div>
	);
}

export default Signup
