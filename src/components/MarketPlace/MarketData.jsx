import React from 'react';
import Cards from './MaketCard';
import Soya from '../../assets/images/soyBeans.jpeg';
import Chickens from '../../assets/images/chickenforsale.jpeg';
import Potatoes from '../../assets/images/potatoesforsale.jpeg';
import Onion from '../../assets/images/onionforsale.jpeg';
import Eggs from '../../assets/images/eggsforsale.jpeg';
import Maize from '../../assets/images/wMaize.jpeg';

const MarketList = () => {
	const marketDatas = [
		{
			id: 1,
			src: Soya,
			mass: 'K10/Kg',
			title: 'Soya Beans ',
		},
		{
			id: 2,
			src: Chickens,
			mass: 'K90/Kg',
			title: 'Chickens',
		},
		{
			id: 3,
			src: Potatoes,
			mass: 'K25/Kg',
			title: 'Potatoes ',
		},
		{
			id: 3,
			src: Onion,
			mass: 'K20/Kg',
			title: 'Onions ',
		},
		{
			id: 4,
			src: Eggs,
			mass: 'K45/tray',
			title: 'Eggs ',
		},
		{
			id: 5,
			src: Maize,
			mass: 'K2.5/Kg',
			title: 'White Maize',
		},
		// more image card objects...
	];

	return (
		<div className=" bg-gray-300 pt-9 overflow-hidden">
			<h4 className="text-center text-gray-600 text-2xl font-bold">Market place</h4>
			<div className=" overflow-x-scroll lg:justify-center mx-10">
				<div className="w-full flex flex-row gap-4 lg:gap-8 mx-2 mt-10">
					{marketDatas.map((data) => (
						<div key={data.id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
							<Cards src={data.src} title={data.title} mass={data.mass} button={data.buy} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MarketList;
