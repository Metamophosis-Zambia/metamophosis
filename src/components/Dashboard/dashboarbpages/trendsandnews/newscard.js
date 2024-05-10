import React from 'react';

const NewsCard = ({
	src, text, title,
}) => (
	<div className="flex w-full max-w-sm rounded-lg overflow-hidden bg-gray-100 shadow-lg mx-6 ">
		<img src={src} alt={title} className="w-32 h-32 px-4 rounded-full py-4" />
		<div className="px-6 py-4">
			<p className="font-bold text-l mb-2 text-gray-600 rounded-md f">{text}</p>

		</div>
	</div>
);

export default NewsCard;
