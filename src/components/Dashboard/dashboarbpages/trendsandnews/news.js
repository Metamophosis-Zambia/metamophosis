import React from 'react';
import NewsCard from './newscard';
import ArmmyWorm1 from '../../../../assets/images/amyy.webp';
import HappyFarmer from '../../../../assets/images/happf.jpeg';
import Potatoes from '../../../../assets/images/amy.webp';
import Chikens from '../../../../assets/images/Poultry.jpeg';
import Onion from '../../../../assets/images/onionforsale.jpeg';
import Eggs from '../../../../assets/images/eggsforsale.jpeg';

const NewsTrends = () => {
	const marketDatas = [
		{
			id: 1,
			src: ArmmyWorm1,
			title: 'Soya Beans ',
			text: `Armyworms are a serious crop 
            pest in tropical and subtropical regions. 
            These hungry caterpillars can defoliate 
            entire fields of crops before...`,
		},
		{
			id: 2,
			src: HappyFarmer,
			title: '',
		},
		{
			id: 3,
			src: Potatoes,
			title: 'Potatoes ',
			text: '',
		},
		{
			id: 3,
			src: Onion,
			title: '',
			text: '',
		},
		{
			id: 4,
			src: Eggs,
			title: '',
			text: '',
		},
		{
			id: 5,
			src: Chikens,
			title: '',
			text: `A tray of eggs. The ministry stated that this 
            increase will contribute to protecting poultry and egg 
            companies and farms from the negative...`,
		},
		// more image card objects...
	];

	return (
		<div className=" bg-white-100 pt-9 overflow-hidden">
			<h4 className="text-center text-gray-600 text-2xl font-bold">Market & products</h4>
			<div className=" overflow-x-scroll lg:justify-center mx-10">
				<div className="w-full flex flex-row gap-4 lg:gap-8 mx-2 mt-10">
					{marketDatas.map((data) => (
						<div key={data.id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4 items-center">
							<NewsCard src={data.src} title={data.text} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default NewsTrends;
