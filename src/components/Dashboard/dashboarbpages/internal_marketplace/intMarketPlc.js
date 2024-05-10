import React from 'react';
import { Link } from 'react-router-dom';
import { UilEye } from '@iconscout/react-unicons';
import ImageUploadForm from './imageUpload';

/* eslint no-mixed-spaces-and-tabs: "error" */
function InternalMarket() {
	return (
		<>
			<div className="p-3 overflow-hidden flex-wrap w-96 relative lg:w-full">
				<h3 className="text-center">Market Prices</h3>
				<ul className="flex flex-col w-80 px-6 lg:w-full lg:flex-row justify-around">
					<li className="flex bg-white justify-between text-gray-600 rounded-lg h-9 py-2  px-4 mb-2 cursor-pointer shadow-xl">
						<Link to="/dashboard/thisweek" activestyle="true">
							Thsis Week
							<UilEye />
						</Link>
					</li>
					<li className="flex bg-white justify-between text-gray-600 rounded-lg h-9 py-2  px-4 mb-2 cursor-pointer shadow-xl">
						<Link to="/dashboard/lastmonth" activestyle="true">
							Last Month
							<UilEye />
						</Link>
					</li>
					<li className="flex bg-white justify-between text-gray-600 rounded-lg h-9 py-2  px-4 mb-2 cursor-pointer shadow-xl">
						<Link to="/dashboard/lastseason" activestyle="true">
							Last Season
							<UilEye />
						</Link>
					</li>
				</ul>
				<button
					className="flex content-center px-2 ml-24 rounded-lg w-24 bg-green-400 text-black mb-8"
					type="button"
				>
					See more
				</button>
				<div className="flex flex-col w-80  px-6 lg:w-full lg:flex-row justify-around">
					<h6 className="text-center bg-white justify-between text-gray-600 rounded-lg h-9 py-2  px-4 mb-2">
						VIEW REQUESTED PRODUCTS
					</h6>
					<h6 className="bg-white text-center justify-between text-gray-600 rounded-lg h-9 py-2  px-4 mb-2">
						VIEW My PRODUCTS
					</h6>
				</div>
				<div className="block mx-4">
					<form
						className=" border border-gray-500 rounded-lg py-4 px-2"
						action=""
					>
						<div className="flex flex-col lg:flex-row">
							<div>
								<label
									htmlFor="small"
									className="block mb-2 text-sm font-medium text-gray-700 "
								>
									Product Cartegory
									<select
										id="small"
										className="block w-full p-2 mb-6 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									>
										<option selected>Corn</option>
										<option value="Rice">Rice</option>
										<option value="SB">Soya Beans</option>
										<option value="Maize">Maize</option>
										<option value="GB">Green Beans</option>
									</select>
								</label>
								<label
									htmlFor="product_name"
									className="mb-2 text-sm font-medium text-gray-900 "
								>
									Name of Product
									<input
										type="text"
										className=" w-full p-2 mb-6 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Soya Beans"
										id="product_name"
										required
									/>
								</label>
								<label
									htmlFor="product_name"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Packaging Quantity
									<input
										type="text"
										className="w-full p-2 mb-6 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="50kg"
										id="product_name"
										required
									/>
								</label>
								<label
									htmlFor="product_name"
									className="mb-2 text-sm font-medium text-gray-900 "
								>
									Number of Package
									<input
										type="number"
										className="w-full p-2 mb-6 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="90"
										id="product_name"
										required
									/>
								</label>
							</div>
							<div className="lg:ml-8">
								<ImageUploadForm />
								<button
									className="flex justify-center mt-8 rounded-lg bg-green-600 w-28 py-4 lg:ml-2"
									type="submit"
								>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default InternalMarket;
