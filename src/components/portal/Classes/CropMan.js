import React, { useState } from 'react';
import axios from 'axios';
import './Classes.css';
import MinNav from '../minNav/MinVav';

const CropMan = () => {
	const [weatherData, setWeather] = useState({
		location: {
			name: 'Lusaka',
			country: 'Zambia',
			localtime: '10:32',
		},
		current: {
			condition: {
				text: 'Sunny',
				icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
			},
			feelslike_c: 27.8,
			feelslike_f: 82,
			gust_kph: 16.6,
			gust_mph: 10.3,
			humidity: 33,
			is_day: 1,
			last_updated: '2023-08-07 11:45',
			last_updated_epoch: 1691401500,
			precip_in: 0,
			precip_mm: 0,
			pressure_in: 30.12,
			pressure_mb: 1020,
			temp_c: 28.6,
			temp_f: 83.5,
			uv: 7,
			vis_km: 10,
			vis_miles: 6,
			wind_degree: 76,
			wind_dir: 'ENE',
			wind_kph: '14.4',
			wind_mph: '8.9',
		},
	});
	// const [forecastWeatherData, setForecastWeather] = useState({
		// location: {
		// 	name: 'Lusaka',
		// 	country: 'Zambia',
		// 	localtime: '10:32',
		// },
		// current: {
		// 	condition: {
		// 		text: 'Sunny',
		// 		icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
		// 	},
		// 	feelslike_c: 27.8,
		// 	feelslike_f: 82,
		// 	gust_kph: 16.6,
		// 	gust_mph: 10.3,
		// 	humidity: 33,
		// 	is_day: 1,
		// 	last_updated: '2023-08-07 11:45',
		// 	last_updated_epoch: 1691401500,
		// 	precip_in: 0,
		// 	precip_mm: 0,
		// 	pressure_in: 30.12,
		// 	pressure_mb: 1020,
		// 	temp_c: 28.6,
		// 	temp_f: 83.5,
		// 	uv: 7,
		// 	vis_km: 10,
		// 	vis_miles: 6,
		// 	wind_degree: 76,
		// 	wind_dir: 'ENE',
		// 	wind_kph: '14.4',
		// 	wind_mph: '8.9',
		// },
	// });
	const getWeather = async () => {
		const options = {
			method: 'GET',
			url: 'https://weatherapi-com.p.rapidapi.com/current.json',
			params: { q: '-15.3875, 28.3228' },
			headers: {
				'X-RapidAPI-Key': 'a1365aeac0mshe6f88266ac87686p191882jsn5beb1c0e8d9d',
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			},
		};
		try {
			const response = await axios.request(options);
			setWeather(response.data);
			// console.log(weatherData);
		} catch (error) {
			// console.error(error);
		}
	};

	// const forecastWeather = async () => {
	// 	const options = {
	// 		method: 'GET',
	// 		url: 'https://weatherapi-com.p.rapidapi.com/current.json',
	// 		params: { q: '-15.3875, 28.3228' },
	// 		headers: {
	// 			'X-RapidAPI-Key': 'a1365aeac0mshe6f88266ac87686p191882jsn5beb1c0e8d9d',
	// 			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
	// 		},
	// 	};

	// 	try {
	// 		const response = await axios.request(options);
	// 		console.log(response.data);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };
	return (
		<div className="portal-content">
			<MinNav />
			<div className="portal-page-content">
				<h2>Weather Updates</h2>
				<div className="classes-div weather">
					<div className="weather-data">
						<h3>
							{weatherData.location.name}
							,
							{weatherData.location.country}
						</h3>
						<h4>{weatherData.location.localtime}</h4>
						<img
							src={weatherData.current.condition.icon}
							alt="condition icon"
						/>
						<p>
							It is a
							{weatherData.current.condition.text}
							{' '}
							day
						</p>
						<h2>
							{weatherData.current.temp_c}
							{' '}
							celcius
						</h2>
						<p>
							It is a very good day to weed and do any activity in the field
						</p>
					</div>
					<div className="other-weather">
						<div className="itemw">
							<h4>
								Humidity:
								{weatherData.current.humidity}
							</h4>
						</div>
						<div className="itemw">
							<h4>
								Pressure:
								{weatherData.current.pressure_in}
							</h4>
						</div>
						<div className="itemw">
							<h4>
								Wind Direction:
								{weatherData.current.wind_dir}
							</h4>
						</div>
						<div className="itemw">
							<h4>
								Wind Speed:
								{weatherData.current.wind_mph}
								mph
							</h4>
						</div>
					</div>
					<button className="anbtn" type="button" onClick={getWeather}>
						Refresh Weather
					</button>
					<div className='forecast'>
						<div className='tomorrow'>
							<h3>Tomorrow</h3>
							<img src={weatherData.current.condition.icon} alt='icon' />
						</div>
						<div className='tomorrow'>
							<h3>After Tomorrow</h3>
							<img src={weatherData.current.condition.icon} alt='icon' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CropMan;
