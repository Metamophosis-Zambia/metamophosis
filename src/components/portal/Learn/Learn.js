import React from 'react';
import { Link } from 'react-router-dom';
import MinNav from '../minNav/MinVav';
import crop from '../images/onionforsale.jpeg';
import cattle from '../images/Cattle.jpeg';
import csa from '../images/farm.jpeg';
import sus from '../images/MaketsF.jpg';
// import fn from '../images/ta.png';
// import ta from '../images/full_insight.png';

const courses = [
  {
    path: "/dashboard/learn/animals",
    imgSrc: cattle,
    imgAlt: "livestock",
    title: "Livestock Management",
    price: "$5.00",
    description: "Practices and techniques used to raise and care for animals in a sustainable and efficient manner"
  },
  {
    path: "/dashboard/learn/crops",
    imgSrc: crop,
    imgAlt: "crop",
    title: "Crop Management",
    price: "$5.00",
    description: "Practices and techniques used to ensure higher crop yields"
  },
  {
    path: "/dashboard/cropman",
    imgSrc: sus,
    imgAlt: "sustainable agriculture",
    title: "Sustainable Agriculture",
    price: "$5.00",
    description: "Eco-friendly and preservative farming that aims to produce more crops in small land spaces and reusability"
  },
  {
    path: "/dashboard/satimg",
    imgSrc: csa,
    imgAlt: "climate smart agriculture",
    title: "Climate Smart Agriculture",
    price: "$5.00",
    description: "Leveraging technology to make agriculture more efficient and sustainable."
  }
];

const Learn = () => (
  <div className="portal-content">
    {/* <MinNav /> */}
    <div className="portal-page-content">
      <ul className="lec">
        {courses.map((course, index) => (
          <li key={index}>
            <Link to={course.path} activestyle="true">
              <img src={course.imgSrc} alt={course.imgAlt} />
            </Link>
            <div className='learnCard'>
              <ul>
                <h3>{course.title}</h3>
                <p>{course.price}</p>
              </ul>
              <li className='courseDetails'>
                <p>{course.description}</p>
              </li>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Learn;
