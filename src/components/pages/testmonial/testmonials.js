import React, { useEffect, useState } from 'react';
import {
	onSnapshot,
	query,
	collection,
} from 'firebase/firestore';
import { db } from '../../../firebase/config';
import Colon from '../../../assets/logos_Icon/placeholder.png';
import TestonialCard from './testmCard';

const Testmonial = () => {
	const [testM, setImageData] = useState([]);

	useEffect(() => {
		const q = query(collection(db, 'testimonials'));
		const unSubscribe = onSnapshot(q, (querySnapshot) => {
			const companyBlogsArr = [];
			querySnapshot.forEach((doc) => {
				companyBlogsArr.push({ ...doc.data(), id: doc.id });
			});
			const anArr = companyBlogsArr.slice(-3);
			setImageData(anArr);
		});
		return () => unSubscribe();
	}, []);

	return (
		<div className="w-full h-full">
			<h3 className="text-green-600 font-black text-lg text-center pt-8">
				VALIDATION
			</h3>
			<h3 className="font-black text-lg text-center py-6">
				OUR CLIENTS DO THE TALKING
			</h3>
			<div className=" bg-white py-6 flex gap-6 flex-col lg:flex-row lg:px-24 lg:gap-2 ">
				{testM.map((data) => (
					<div key={data.id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
						<TestonialCard
							src={Colon}
							fullName={data.fullName}
							description={data.description}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testmonial;
