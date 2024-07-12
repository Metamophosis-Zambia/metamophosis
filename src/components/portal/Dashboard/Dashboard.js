import React from 'react';
import { Link } from 'react-router-dom';
import MinNav from '../minNav/MinVav';
import './Dashboard.css';
import video from '../images/cvid.mp4';

const Dashboard = () => (
  <div className="portal-content">
    <MinNav />
    <div className="portal-page-content">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay">
        <h2>Welcome to the Dashboard</h2>
        <ul className="nac">
          <li>
            <Link to="/dashboard/learn" className="dashboard-link">
              <img src="https://via.placeholder.com/150" alt="Knowledge Base" />
              <div className="link-text">
                <h3>Knowledge Base</h3>
                <p>Expand your knowledge with our extensive resources.</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/diagnosis" className="dashboard-link">
              <img src="https://via.placeholder.com/150" alt="Livestock Farming Services" />
              <div className="link-text">
                <h3>Livestock Farming Services</h3>
                <p>Get expert advice and services for your livestock.</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/cropman" className="dashboard-link">
              <img src="https://via.placeholder.com/150" alt="Consultation Services" />
              <div className="link-text">
                <h3>Consultation Services</h3>
                <p>Consult with our experts for better farming practices.</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Dashboard;
