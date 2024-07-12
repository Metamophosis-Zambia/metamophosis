import React from 'react';
import { Link } from 'react-router-dom';
import MinNav from '../minNav/MinVav';
import goat from '../images/Goats.jpeg';
import cattle from '../images/Cattle.jpeg';
import pig from '../images/Pigs.jpeg';
import chicken from '../images/chickenforsale.jpeg';
import sheep from '../images/Sheep.jpeg';
import rabbit from '../images/Rabbits.jpeg';

const animals = [
  {
    path: "/dashboard/animals/pigs",
    imgSrc: pig,
    imgAlt: "pig",
    title: "Pigs",
    description: "Learn about the best practices for raising pigs, including feeding, housing, and health management."
  },
  {
    path: "/dashboard/learn",
    imgSrc: goat,
    imgAlt: "goat",
    title: "Goats",
    description: "Discover techniques for goat farming, from breeding and feeding to disease prevention and milk production."
  },
  {
    path: "/dashboard/learn/animals",
    imgSrc: cattle,
    imgAlt: "cattle",
    title: "Cattle",
    description: "Explore methods for effective cattle farming, covering nutrition, housing, and herd management."
  },
  {
    path: "/dashboard/satimg",
    imgSrc: rabbit,
    imgAlt: "rabbit",
    title: "Rabbits",
    description: "Understand the essentials of rabbit farming, including housing, breeding, and health care."
  },
  {
    path: "/dashboard/vitsup",
    imgSrc: chicken,
    imgAlt: "chicken",
    title: "Poultry",
    description: "Get insights into poultry farming, with tips on feeding, housing, and managing different types of poultry."
  },
  {
    path: "/dashboard/marketplace",
    imgSrc: sheep,
    imgAlt: "sheep",
    title: "Sheep",
    description: "Learn the best practices for sheep farming, from shearing and lambing to disease control and nutrition."
  }
];

const LearnAnimals = () => (
  <div className="portal-content">
    <MinNav />
    <div className="portal-page-content">
      <ul className="lec">
        {animals.map((animal, index) => (
          <li key={index}>
            <Link to={animal.path} activestyle="true">
              <img src={animal.imgSrc} alt={animal.imgAlt} />
            </Link>
            <div className='learnCard'>
              <ul>
                <h3>{animal.title}</h3>
              </ul>
              <li className='courseDetails'>
                <p>{animal.description}</p>
              </li>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default LearnAnimals;
