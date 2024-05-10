import React from 'react';

const Cards = ({
	src, mass, title, buy,
}) => (
	<div className="w-full max-w-sm rounded-lg overflow-hidden bg-white shadow-lg mx-6">
		<img src={src} alt={title} className="w-full h-32 px-4 rounded-3xl py-4" />
		<div className="px-6 py-4">
			<p className="text-gray-700 text-base">{mass}</p>
			<div className="font-bold text-l mb-2 text-gray-600 rounded-md">{title}</div>
			<button type="button" className="flex text-gray-700 rounded-xl justify-center w-full px-4 bg-gray-200">
				{buy}
				Order
			</button>
		</div>
	</div>
);

export default Cards;
