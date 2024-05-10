import React, { useEffect, useState } from 'react';
import {
	onSnapshot,
	query,
	collection,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import Feed from './newsFeed';

const ImageCardList = () => {
	const [imageData, setImageData] = useState([]);

	useEffect(() => {
		const q = query(collection(db, 'blogs'));
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
		<div className=" bg-gray-300 pt-9">
			<h4 className="text-center text-gray-600 text-2xl font-bold">
				News & Trends
			</h4>
			<div className="flex flex-wrap -mx-2 mt-10">
				{imageData.map((data) => (
					<div key={data.id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
						<Feed
							src={data.imgUrl}
							title={data.title}
							description={data.description}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageCardList;
