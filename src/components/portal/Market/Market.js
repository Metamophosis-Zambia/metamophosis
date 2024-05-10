import React, { useState } from 'react';
// import './Dashboard.css'
import { Link } from 'react-router-dom';
import MinNav from '../minNav/MinVav';
import img from '../images/soya.jpg';
import img2 from '../images/cabbage.jpg';
import img3 from '../images/maize.jpg';
import img4 from '../images/onionforsale.jpeg';
import img5 from '../images/sweetp.jpg';
import img6 from '../images/tomato.jpg';

const Market = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	//   const [studentId, setStudentId] = useState("");
	// const [sex, setSex] = useState('male');
	const [address, setAddress] = useState('');
	const [dob, setDob] = useState('');
	//   const [enrolmentDate, setEnrollmentDate] = useState("");
	// const [guardianName, setGuardianName] = useState('');
	const [guardianNumber, setGuardianNumber] = useState('');
	// const [guardianEmail, setGuardianEmail] = useState('');
	const [grade, setGrade] = useState('grade8a');

	return (
		<div className="portal-content">
			<MinNav />
			<div className="portal-page-content">
				<h2>Market</h2>
				<div className="market-prices">
					<div className="prices-div">
						<Link href="www.nicetyfarm.com">
							This week
						</Link>
					</div>
					<div className="prices-div">
						<Link href="www.nicetyfarm.com">
							Last week
						</Link>
					</div>
					<div className="prices-div">
						<Link href="www.nicetyfarm.com">
							Last Month
						</Link>
					</div>
					<div className="prices-div">
						<Link href="www.nicetyfarm.com">
							Last Season
						</Link>
					</div>
				</div>
				<h2>Requested Products</h2>
				<div className="products-requested">
					<div className="product">
						<img src={img} alt="product" />
						<h4>Soya Beans</h4>
						<p>k20/kg</p>
						<button type="button">Respond</button>
					</div>
					<div className="product">
						<img src={img2} alt="product" />
						<h4>Cabbage</h4>
						<p>k10/head</p>
						<button type="button">Respond</button>
					</div>
					<div className="product">
						<img src={img3} alt="product" />
						<h4>Maize</h4>
						<p>k20/kg</p>
						<button type="button">Respond</button>
					</div>
					<div className="product">
						<img src={img4} alt="product" />
						<h4>Onion</h4>
						<p>k25/kg</p>
						<button type="button">Respond</button>
					</div>
					<div className="product">
						<img src={img5} alt="product" />
						<h4>Sweet Potatoes</h4>
						<p>k40/kg</p>
						<button type="button">Respond</button>
					</div>
					<div className="product">
						<img src={img6} alt="product" />
						<h4>Tomatos</h4>
						<p>k10/kg</p>
						<button type="button">Respond</button>
					</div>
				</div>
				<div className="nac">
					<form className="annonce-form2">
						<h3>Post Products</h3>
						<div className="inputs">
							<select
								value={grade}
								onChange={(e) => {
									setGrade(e.target.value);
								}}
							>
								<option value="grade8a">Corn</option>
								<option value="grade8b">Animals</option>
								<option value="grade8c">Poultry</option>
								<option value="grade8d">Milk</option>
								<option value="grade9a">Meat</option>
								<option value="grade9b">Legumes</option>
								<option value="grade9c">Fruits</option>
								<option value="grade9d">Vegetables</option>
								{/* <option value="grade10a">Grade 10A</option>
                <option value="grade10b">Grade 10B</option>
                <option value="grade10c">Grade 10C</option>
                <option value="grade10d">Grade 10D</option>
                <option value="grade11a">Grade 11A</option>
                <option value="grade11b">Grade 11B</option>
                <option value="grade11c">Grade 11C</option>
                <option value="grade11d">Grade 11D</option> */}
							</select>
							<input
								type="text"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								placeholder="Product Name eg 'Maize'"
								required
							/>
							<input
								type="text"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								placeholder="Packaging type e.g 50kg bags or 10L"
								required
							/>
							<input
								type="text"
								value={dob}
								onChange={(e) => setDob(e.target.value)}
								placeholder="Quantinty eg 53"
								required
							/>
							{/* <select
								value={sex}
								onChange={(e) => {
									setSex(e.target.value);
								}}
							>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="trans">Trans</option>
							</select> */}
							<input
								type="date"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								placeholder="Earliest Pickup Date"
								required
							/>
							{/* <input
								type="text"
								value={guardianName}
								onChange={(e) => setGuardianName(e.target.value)}
								placeholder="Guardian's FullName"
								required
							/> */}
							<input
								type="file"
								value={guardianNumber}
								onChange={(e) => setGuardianNumber(e.target.value)}
								placeholder="product image"
								required
							/>
							{/* <input
								type="email"
								value={guardianEmail}
								onChange={(e) => setGuardianEmail(e.target.value)}
								placeholder="Guardian's Email Address"
							/> */}
							<button className="post-btn" type="submit">Post</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Market;
