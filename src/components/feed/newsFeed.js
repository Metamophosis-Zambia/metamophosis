import React from 'react';

const Feed = ({ src, title, description }) => (
	<div className="max-w-sm rounded-lg overflow-hidden bg-white shadow-lg mx-6">
		<img src={src} alt={title} className="w-full px-4 rounded-3xl py-4" />
		<div className="px-6 py-4">
			<div className="font-bold text-xl mb-2 text-green-600 bg-gray-100 rounded-md px-4">{title}</div>
			<p className="text-gray-700 text-base">{description}</p>
		</div>
	</div>
);

export default Feed;
