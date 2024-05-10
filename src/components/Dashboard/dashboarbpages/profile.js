import React from 'react';
// import { UilVolume } from '@iconscout/react-unicons';
import LandTemperatueImg from '../images/landT.jpeg';
import Vsp from '../images/virtual.png';

function Profile() {
	return (
		<>
			{ /* Main */ }
			<main className="bg-white-300 flex-1 p-3 overflow-hidden">
				<div className="flex flex-col">
					{/* Stats Row Starts Here */}
					<div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
						<div className="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
							<div className="p-4 flex flex-col bg-white">
								<p className="text-gray-500 font-bold">Virtual Supervisor</p>
								<div className="flex py-4 pb-2 justify-end">
									<img src={Vsp} className="w-12 " alt="Virtual superviser" />
									<div className="flex flex-col justify-end gap-4">
										{/* <UilVolume className="flex float-right bg-slate-200 w-8 rounded-full" /> */}
										<p className="bg-slate-300 flex float-right px-4 rounded-2xl text-gray-500 text-sm">Inquire</p>
									</div>
								</div>
							</div>

						</div>
						<div className="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
							<div className="p-4 flex flex-col bg-white">
								<img className="w-full rounded-2xl h-full" src={LandTemperatueImg} alt="land Temperature" />
							</div>
						</div>
						<div className="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
							<div className="p-4 flex flex-col bg-white" />
						</div>
						<div className="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
							<div className="p-4 flex flex-col bg-white" />
						</div>
					</div>
					{/* /Stats Row Ends Here */}
					{/* Card Sextion Starts Here */}
					<div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
						{/* card */}
						<div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
							<div className="px-6 py-2 border-b border-light-grey">
								<div className="font-bold text-xl">Number of animals</div>
							</div>
							<div className="table-responsive">
								<table className="table text-grey-darkest">
									<thead className="bg-grey-dark text-black text-normal">
										<tr>
											<th scope="col">#</th>
											<th scope="col">Item</th>
											<th scope="col">Last</th>
											<th scope="col">Current</th>
											<th scope="col">Change</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>
												<button type="button" className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
													Cows
												</button>
											</td>
											<td>4500</td>
											<td>4600</td>
											<td>
												<span className="text-green-500">
													<i className="fas fa-arrow-up" />
													5%
												</span>
											</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>
												<button type="button" className="bg-primary hover:bg-primary-dark text-white font-light py-1 px-2 rounded-full">
													Chickens
												</button>
											</td>
											<td>100</td>
											<td>3000</td>
											<td>
												<span className="text-red-500">
													<i className="fas fa-arrow-down" />
													65%
												</span>
											</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>
												<button type="button" className="bg-primary hover:bg-success-dark text-white font-light py-1 px-2 rounded-full">
													Goats
												</button>
											</td>
											<td>10000</td>
											<td>3000</td>
											<td>
												<span className="text-red-500">
													<i className="fas fa-arrow-down" />
													65%
												</span>
											</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>
												<button type="button" className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
													Pigs
												</button>
											</td>
											<td>10000</td>
											<td>3000</td>
											<td>
												<span className="text-green-500">
													<i className="fas fa-arrow-up" />
													65%
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						{/* /card */}
					</div>
					{/* /Cards Section Ends Here */}
					{/* Progress Bar */}
					<div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 mt-2">
						<div className="rounded overflow-hidden shadow bg-white mx-2 w-full pt-2">
							<div className="px-6 py-2 border-b border-light-grey">
								<div className="font-bold text-xl">Progress Among Projects</div>
							</div>
							<div className>
								<div className="w-full">
									<div className="shadow w-full bg-grey-light">
										<div className="bg-blue-500 text-xs leading-none py-1 text-center text-white" style={{ width: '45%' }}>
											45%
										</div>
									</div>
									<div className="shadow w-full bg-grey-light mt-2">
										<div className="bg-teal-500 text-xs leading-none py-1 text-center text-white" style={{ width: '55%' }}>
											55%
										</div>
									</div>
									<div className="shadow w-full bg-grey-light mt-2">
										<div className="bg-orange-500 text-xs leading-none py-1 text-center text-white" style={{ width: '65%' }}>
											65%
										</div>
									</div>
									<div className="shadow w-full bg-grey-300 mt-2">
										<div className="bg-red-800 text-xs leading-none py-1 text-center text-white" style={{ width: '75%' }}>
											75%
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			;
			{ /* /Main */ }
		</>
	);
}

export default Profile;
