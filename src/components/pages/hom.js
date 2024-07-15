import { NavLink } from 'react-router-dom';
import About from './about';
import googlePlayStore from '../../assets/logos_Icon/googleP.png';
import applePlayStore from '../../assets/logos_Icon/storeOne.png';
import './index.css';
import Service from './services';
import ImageCardList from '../feed/feedList';
import MarketList from '../MarketPlace/MarketData';
import ProcessData from '../process/processData';
// import Footer from './footer';
import Contact from './contact';
import Testmonial from './testmonial/testmonials';

/* eslint no-mixed-spaces-and-tabs: "error" */
function Homes() {
	return (
		<>
			<div className="h-screen bg-[url('./assets/images/PlaceHolder.jpeg')] bg-cover bg-no-repeat">
				<div className="bg-homecolor flex-col h-screen justify-center items-center flex">
					<div className="ontainer mx-auto ">

						<div className="flex-col">
							<h4 className="text-white font-bold px-14"> DATA DRIVEN FARMING </h4>
							<h1 className="text-4xl px-14 h-40 text-white font-bold w-1/2">
								EXPERIENCE REAL PREDICTABLE AGRICULTURE
							</h1>
						</div>
						<button type="button" className=" bg-green-400 w-24 text-green-100 rounded-full mx-14 mt-4 py-2 hover:bg-green-500">
							<NavLink to="/signup" activestyle="true">
								Get started
							</NavLink>
						</button>

						{/* <div className="flex md:flex-col ">
							<p className="text-white font-bold mt-4 px-14">
								DOWNLOAD OUR APP
								<ul className="mt-3 gap-8 flex flex-col lg:flex-row">
									<li>
										<img className="w-200 h-12 rounded-lg" src={googlePlayStore} alt="google play store logo" />
									</li>
									<li>
										<img className="w-200 h-12" src={applePlayStore} alt="google play store logo" />
									</li>
								</ul>
							</p>
						</div> */}

					</div>
				</div>
			</div>
			<div>
				<div>
					<ImageCardList />
				</div>
				<About />
				{/* <MarketList /> */}
			</div>
			<div>
				<Service />
			</div>

			{/* <div>
				<ProcessData />
			</div> */}
			<div>
				<Contact />
			</div>
			<div>
				<Testmonial />
			</div>
			<div>
				{/* <Footer /> */}
			</div>

		</>
	);
}

export default Homes;
