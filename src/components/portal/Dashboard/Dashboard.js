import React from 'react';
// import { getAuth } from "firebase/auth";
import './Dashboard.css';
import { Link } from 'react-router-dom';
import MinNav from '../minNav/MinVav';
import video from '../images/cvid.mp4';

const Dashboard = () => (
	<div className="portal-content">
		{/* <MinNav /> */}
		<div className="portal-page-content">
			{/* <h2>Dashboard</h2> */}
			<ul className="nac">
				<li><Link to="/dashboard/learn" activestyle="true">Knowledge Base</Link></li>
				<li><Link to="/dashboard/diagnosis" activestyle="true">Livestock Farming Services</Link></li>
				<li><Link to="/dashboard/cropman" activestyle="true">Consultation Services</Link></li>
				{/* <li><Link to="/dashboard/satimg" activestyle="true">Satellite Imagery</Link></li>
				<li><Link to="/dashboard/vitsup" activestyle="true">Virtual Supervisor</Link></li>
				<li><Link to="/dashboard/marketplace" activestyle="true">Market Place</Link></li> */}
			</ul>
			
		</div>
	</div>
);

export default Dashboard;
