import React from 'react';
import { Link } from 'react-router-dom';
import MinNav from '../minNav/MinVav';
import goat from '../images/Goats.jpeg';
import cattle from '../images/Cattle.jpeg';
import pig from '../images/Pigs.jpeg';
import chicken from '../images/chickenforsale.jpeg';
import sheep from '../images/Sheep.jpeg';
import rabbit from '../images/Rabbits.jpeg';

const LearnAnimals = () => (
	<div className="portal-content">
		<MinNav />
		<div className="portal-page-content">
			<ul className="lec">
			<li>
					<Link to="/dashboard/animals/pigs" activestyle="true">
						<img src={pig} alt="crop" />
						Pigs
					</Link>
				</li>
				<li>
					<Link to="/dashboard/learn" activestyle="true">
						<img src={goat} alt="crop" />
						<p>Goats</p>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/learn/animals" activestyle="true">
						<img src={cattle} alt="crop" />
						Cattle
					</Link>
				</li>
				
				<li>
					<Link to="/dashboard/satimg" activestyle="true">
						<img src={rabbit} alt="crop" />
						Rabbits
					</Link>
				</li>
				<li>
					<Link to="/dashboard/vitsup" activestyle="true">
						<img src={chicken} alt="crop" />
						Poultry
					</Link>
				</li>
				<li>
					<Link to="/dashboard/marketplace" activestyle="true">
						<img src={sheep} alt="crop" />
						Sheep
					</Link>
				</li>
			</ul>
		</div>
	</div>
);

export default LearnAnimals;
