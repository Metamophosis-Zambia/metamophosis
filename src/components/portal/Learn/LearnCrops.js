import React from 'react';
// import { Link } from 'react-router-dom';
import pdf from '../images/soya.pdf';
import MinNav from '../minNav/MinVav';
import img from '../images/soya.jpg';
import img2 from '../images/cabbage.jpg';
import img3 from '../images/maize.jpg';
import img4 from '../images/onionforsale.jpeg';
import img5 from '../images/sweetp.jpg';
import img6 from '../images/tomato.jpg';

const LearnCrops = () => (
	<div className="portal-content">
		<MinNav />
		<div className="portal-page-content">
			<ul className="lec">
				<li>
					<a href={pdf}>
						<img src={img} alt="crop" />
						<p>Soya Beans</p>
					</a>
				</li>
				<li>
					<a href={pdf}>
						<img src={img2} alt="crop" />
						Cabbage
					</a>
				</li>
				<li>
					<a href={pdf}>
						<img src={img3} alt="crop" />
						Maize
					</a>
				</li>
				<li>
					<a href={pdf}>
						<img src={img5} alt="crop" />
						Sweet Potatoes
					</a>
				</li>
				<li>
					<a href={pdf}>
						<img src={img4} alt="crop" />
						Onions
					</a>
				</li>
				<li>
					<a href={pdf}>
						<img src={img6} alt="crop" />
						Tomatoes
					</a>
				</li>
			</ul>
		</div>
	</div>
);

export default LearnCrops;
