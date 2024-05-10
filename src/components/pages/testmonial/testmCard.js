import React from 'react';

const TestonialCard = ({ src, fullName, description }) => (
	<div className="bg-pink  flex-col  border-solid border-4  rounded-lg w-45 mx-12 lg:h-fit">
		<img src={src} alt={fullName} className="w-12 h-15 pl-2 mt-4 p-4 " />
		<div className="">
			<p className="px-4 py-4 leading-5">{description}</p>
			<div className="text-l font-bold px-4 pb-4">{fullName}</div>
		</div>
	</div>
);

export default TestonialCard;
