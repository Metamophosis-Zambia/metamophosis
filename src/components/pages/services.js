import React from 'react';
import appImage from '../../assets/images/Nicetyfarmapp.png';
import './index.css';

const Service = () => (
	<>
		<div className="flex flex-col mb-10">
			<h4 className="text-green-600 text-2xl  text-bold text-center pt-9">SERVICES</h4>
			<h4 className="text-green-600 text-2xl text-center pt-6">Our Main Services</h4>
			<h4 className="text-center text-gray text-xl pt-4 font-bold mb-8 lg:text-3xl">WHAT WE OFFER TO YOU</h4>
			<div className="flex flex-col lg:flex-row justify-center items-center">
				<img className="w-64 px-12 rounded-3xl h-96" src={appImage} alt="app" />
				<ul className="flex-col px-3 list-square">
					<li className="list-none">
						<p className="w-80 font-sans text-md pb-10 px-12 text-gray-700">
							We offer wide range of services and products
							in agriculture and other sectors,
							in agriculture all services offered are becauseof
							how we value farmers and how we want to help them
							maximise their yeild.
							Here are some services offeredby us:
						</p>
					</li>
					<li className="mx-11 text-md font-bold">Online Agriculture Courses</li>
					<li className="mx-11 text-md font-bold">Livestock Farming Services</li>
					<li className="mx-11 text-md font-bold">Consultation Services</li>
					
				</ul>
			</div>
		</div>
	</>
);

export default Service;
