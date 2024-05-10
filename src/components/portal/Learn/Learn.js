import React from 'react';
import { Link } from 'react-router-dom';
import MinNav from '../minNav/MinVav';
import crop from '../images/onionforsale.jpeg';
import cattle from '../images/Cattle.jpeg';
import csa from '../images/farm.jpeg';
import sus from '../images/MaketsF.jpg';
import fn from '../images/ta.png';
import ta from '../images/full insight.png';

const Learn = () => (
	<div className="portal-content">
		{/* <MinNav /> */}
		<div className="portal-page-content">
			<ul className="lec">
			<li>
					<Link to="/dashboard/learn/animals" activestyle="true">
						<img src={cattle} alt="crop" />
						Livestock Management
					</Link>
				</li>
				<li>
					<Link to="/dashboard/learn/crops" activestyle="true">
						<img src={crop} alt="crop" />
						<p>Crop Management</p>
					</Link>
				</li>
				
				<li>
					<Link to="/dashboard/cropman" activestyle="true">
						<img src={sus} alt="crop" />
						Sustainable Agriculture
					</Link>
				</li>
				<li>
					<Link to="/dashboard/satimg" activestyle="true">
						<img src={csa} alt="crop" />
						Climate Smart Agriculture
					</Link>
				</li>
				{/* <li>
					<Link to="/dashboard/vitsup" activestyle="true">
						<img src={ta} alt="crop" />
						Tech in Agriculture
					</Link>
				</li>
				<li>
					<Link to="/dashboard/marketplace" activestyle="true">
						<img src={fn} alt="crop" />
						Finest Tips
					</Link>
				</li> */}
			</ul>
		</div>
	</div>
);

export default Learn;
