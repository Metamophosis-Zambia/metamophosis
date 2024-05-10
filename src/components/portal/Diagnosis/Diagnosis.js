import React from 'react';
// import './Dashboard.css'
import MinNav from '../minNav/MinVav';

const Diagnosis = () => (
	<div className="portal-content">
		<MinNav />
		<div className="portal-page-content">
			<h2>Diagnosis</h2>
			<div className="dic">
				<img src="" alt="Captured Img" />
				<button type="button">Open Camera</button>
				<button type="button">Diagnose</button>
				<button type="button">Clear Image</button>
			</div>
		</div>
	</div>
);

export default Diagnosis;
