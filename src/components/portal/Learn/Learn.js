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
						
					</Link>
					<div className='learnCard'>
					  <ul>
						<h3>
					    	Livestock Management
					  	</h3>

						<p>$5.00</p>
					  </ul>

					  <li className='courseDetails'>
						<p>
							Practices and techniques used to raise and care for animals in a sustainable and efficient manner
						</p>
					  </li>
					</div>
			   </li>

			   <li>
			   <Link to="/dashboard/learn/crops" activestyle="true">
						<img src={crop} alt="crop" />
					</Link>
					<div className='learnCard'>
					  <ul>
						<h3>
						Crop Management
					  	</h3>

						<p>$5.00</p>
					  </ul>

					  <li className='courseDetails'>
						<p>
							Practices and techniques used to insure higher crop hields 
						</p>
					  </li>
					</div>
			   </li>

			   <li>
			    <Link to="/dashboard/cropman" activestyle="true">
						<img src={sus} alt="crop" />
					</Link>
					<div className='learnCard'>
					  <ul>
						<h3>
						Sustainable Agriculture
					  	</h3>

						<p>$5.00</p>
					  </ul>

					  <li className='courseDetails'>
						<p>
							Eco freindly and preservative farming that aims to produce more crop in small land spaces and reusability
						</p>
					  </li>
					</div>
			   </li>
				
			   <li>
			   <Link to="/dashboard/satimg" activestyle="true">
						<img src={csa} alt="crop" />
					</Link>
					<div className='learnCard'>
					  <ul>
						<h3>
						Climate Smart Agriculture
					  	</h3>

						<p>$5.00</p>
					  </ul>

					  <li className='courseDetails'>
						<p>
							Laveraging technology to make agriculture more efficinet and sustainable. 
						</p>
					  </li>
					</div>
			   </li>





				{/* <li>
					<Link to="/dashboard/vitsup" activestyle="true">
						<img src={ta} alt="crop" />
					</Link>
					<p>Tech in Agriculture</p>
				</li>
				<li>
					<Link to="/dashboard/marketplace" activestyle="true">
						<img src={fn} alt="crop" />
					</Link>
					<p>Finest Tips</p>
				</li> */}
			</ul>
		</div>
	</div>
);

export default Learn;
