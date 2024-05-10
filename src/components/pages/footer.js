import React from 'react';
// import {
// 	UilLinkedin, UilInstagram, UilTwitter, UilFacebook,
// } from '@iconscout/react-unicons';

const Footer = () => (
	<>
		<div className="flex w-full">
			<div className="grid gap-14 bg-black text-white py-14 w-full lg:grid-cols-3">
				<div className="flex flex-col">
					<h3 className="px-14 pb-6 font-bold text-xl">About Us</h3>
					<p className="px-14 pb-8 w-96">
						Our aim is to provide accurate data to farmers with the
						use of drones and soil sensors. We embrace the use of
						digital strategies that focus on increasing productive and nurturing a
						relationship with customers to ensure their success.
					</p>
					<ul className="flex px-14 gap-4 lg:ml-14 lg:px-0">
						{/* <li><UilFacebook /></li>
						<li><UilInstagram /></li>
						<li><UilTwitter /></li>
						<li><UilLinkedin /></li> */}
					</ul>
				</div>
				<div className="px-14 lg:px-0">
					<h3 className="pb-6 font-bold text-xl">Quick Links Services</h3>
					<div className="flex gap-10">
						<ul className="text-lg">
							<li>Home</li>
							<li>About Us</li>
							<li>Services</li>
							<li>Contact us</li>
							<li>Social Links</li>
							<li>Book Us</li>
							<li>Privancy Policy</li>
						</ul>
						<ul>
							<li>Attack Detection</li>
							<li>Remote Farm Monitor</li>
							<li>Forest Monitoring</li>
							<li>Soil Sampling</li>
							<li>Irigation</li>
							<li>Consultancy</li>
							<li />
						</ul>
					</div>
				</div>
				<div className="px-14 lg:px-0">
					<h3>Contact Us</h3>
					<ul>
						<li>
							<a href="mailto:info@nicetyfarm.com">info@nicetyfarm.com</a>
						</li>
						<li>
							<a href="tel:+260971558223">260971558223</a>
						</li>
						<li>
							002 Nkwashi Estates
						</li>
						<li>
							<a href="https//www.nicetyfarm.com">www.nicetyfarm.com</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="flex jusify-center items-center h-10 w-full bg-slate-200">
			<p className="w-full text-white text-center items-center">&copy; Nicetyfarm Technologies 2023</p>
		</div>
	</>
);

export default Footer;
