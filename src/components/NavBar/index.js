import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	const [navbar, setNavbar] = useState(false);
	const [user] = useState();
	return (
		<nav className="w-full bg-grey-500 shadow">
			<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
				<div>
					<div className="flex items-center justify-between py-3 md:py-5 md:block">
						<NavLink to="/" activestyle="true">
							<h2 className="bg-gradient-to-r from-black to-green-400 bg-clip-text text-transparent font-bold text-2xl">Metamophosis</h2>
							
						</NavLink>
						<div className="md:hidden">
							<button
								type="button"
								className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="./"
										className="w-6 h-6 text-black"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 text-black"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? 'block' : 'hidden'
						}`}
					>
						<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
							<li className="text-black hover:text-green-700">
								<NavLink to="/" activestyle="true">Home</NavLink>
							</li>
							<li className="text-black hover:text-green-700">
								<NavLink to="/about" activestyle="true">About</NavLink>
							</li>
							<li className="text-black hover:text-green-700">
								<NavLink to="/services" activestyle="true">Services</NavLink>
							</li>
							<li className="text-black hover:text-green-700">
								<NavLink to="/testmonials" activestyle="true">Testmonials</NavLink>
							</li>
							<NavLink to="/contact" activestyle="true">
								<li className="text-black hover:text-green-700">Contact</li>
							</NavLink>
						</ul>
					</div>
				</div>
				{!user ? (
					<div className="hidden space-x-2 md:flex lg:inline-block">
						<NavLink
							to="/signin"
							activestyle="true"
							className="px-4 py-2 text-white bg-green-600 rounded-md shadow hover:bg-gray-800"
						>
							Sign in
						</NavLink>
						<NavLink
							to="/signup"
							activestyle="true"
							className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
						>
							Sign up
						</NavLink>
					</div>
				) : (
					<div>
						<button type="button" className="mx-6 my-3 bg-red-600 hover:bg-red-500">Logout</button>
					</div>

				)}
			</div>
		</nav>
	);
}

export default NavBar;
