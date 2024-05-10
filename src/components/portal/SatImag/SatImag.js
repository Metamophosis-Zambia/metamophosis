import React from 'react';
// import './Dashboard.css'
import MinNav from '../minNav/MinVav';
import video from '../images/satimg.jpg';

const SatImg = () => (
	<div className="portal-content">
		<MinNav />
		<div className="portal-page-content">
			<h2>Satellite Imagery</h2>
			<div className="sac">
				<img src={video} alt="satellite" />
			</div>
			<div className="keys">
				<div className="key">
					<div className="red" />
					No water & No Nutrition
				</div>
				<div className="key">
					<div className="orange" />
					No water but Enough Nutrition
				</div>
				<div className="key">
					<div className="yellow" />
					Enough water but No Nutrition
				</div>
				<div className="key">
					<div className="green" />
					Enough water & Enough Nutrition
				</div>
			</div>
		</div>
	</div>
);

export default SatImg;
