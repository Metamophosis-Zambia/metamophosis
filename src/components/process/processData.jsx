import React from 'react';
import Process from './process';
import Image1 from './images/farmAnimals.jpeg';
import Image2 from './images/Training.jpeg';
import Image3 from './images/maxresdefault.jpeg';
import Image4 from './images/DroneSubsidy.jpeg';

const ProcessData = () => {
	const imageData = [
		{
			src: Image4,
			title: 'CROP SERVICING',
			id: 1,
			description: `We use technology to scan your field 
            for every pest, diease or any other crop stress and 
            advise you on the best immediate action you should take 
            to make sure you protect your crop. For those that 
            cannot afford our service we have an inbuilt feature 
            on our app that enables you to scan your crop with a 
            mobile phone at lower rate. This simply means also 
            advising you on what amount of fertilizer or chemical is 
            required at every part of the farm. We use technology to 
            help you manage pests, diseases and other crop stress this is 
            done accurately and effeciently based on the data that was 
            collected during the scanning and detection of the crop 
            stresses. We spray and apply fertilizer according to crop and soil 
            needs using very intelligent programmed drones `,
		},
		{
			src: Image1,
			title: 'ANIMAL SERVICING',
			id: 2,
			description: `Using our mobile app your are able to scan for pests 
            & disease symptoms on your animals, immediatelly get diagnosis on 
            the defficiency of the animal accompaned with the best solution to 
            protect your animals, for other animals such as Broiler Chickens 
            that require monitoring, we provide a device that will help you monitor 
            them closely, You also get to be alerted on any pending attacks in 
            your area so that you could protect your animals before any disease 
            reaches them. Additionally we give you a service to your animals that 
            requires experts, starting from vaccination, breeding, delivering etc. 
            And finally we purchase farm animals of all of all kinds, so if you are 
            looking for a market for your animals the look nowhere because you have 
            found just the right place for that. So what 
            are you waiting for, click the button below to get started.`,
		},
		{
			src: Image3,
			title: 'SMART IRRIGATION SYSTEM & SECURITY SYSTEM',
			id: 3,
			description: `With the effects of climate change in Agriculture, 
            amount of rains varies sometimes it is a more and sometimes 
            less therefore we have created a smart irrigation systems that 
            will help you manage the water resource you have Smart irrigation 
            systems tailor watering schedules and run times automatically to 
            meet specific landscape needs. These controllers significantly 
            improve outdoor water use efficiencies. In addition to it we have 
            developed a smart security system to protect your animals and 
            harvests, it is able to detect human motion near your animals and 
            harvest during awkward hours and immediately alert you by sounding 
            a syleen at your house, which is backed ny a call to you just 
            incase you are not home`,
		},
		{
			src: Image2,
			title: 'CSA TRAINING',
			id: 4,
			description: `Agriculture is one sector that everyone alive 
            depends on, we alll agree that we need food for survival, 
            with climate change and its effects in Agriculture, farmers 
            have made reall loses, most of the farmers in Africa are still 
            using the traditional way of farming which is not climate smart, 
            it is really a challenge to adapt to new methods of farming, 
            because that's the method they have been using since childhood, 
            we understand that. We are trainning farmers on the best Climate 
            smart agriculture techniques and technologies that will help them 
            improve their productivity. Additionally we have noticed that if 
            they started to learn about it when they were kids, it would 
            become even easier, hence we are also trainning young ones on 
            how they can use technology to provide 
            climate smart technologies for efficiency in agriculture.`,
		},
		// more image card objects...
	];

	return (
		<div className=" bg-brown pt-9">
			<div className="flex flex-col text-center items-center">
				<h4 className="text-center text-green-600 text-2xl font-bold">Process</h4>
				<h3 className="text-center text-gray-500 font-bold font-sans text-xl">FROM AGRICULTURE TO FORESTRY WE&#39;VE GOT YOU COVERED</h3>
				<p className="w-80 px-4 lg:w-1/3 pt-6">
					We have a wide range of services that are all there
					to promote sustainability in both Agriculture,
					forestry and waste management. As you will see below,
					we serve you starting from the soil preparation
					till the time you harvest and make your sales.
				</p>
			</div>
			<div className="flex flex-wrap -mx-2 mt-10">
				{imageData.map((data) => (
					<div key={data.id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
						<Process src={data.src} title={data.title} description={data.description} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ProcessData;
