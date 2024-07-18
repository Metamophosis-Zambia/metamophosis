import React from 'react';
import './About.css';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            About Metamorphosis Fresh Fields
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Empowering farmers worldwide with cutting-edge education and sustainable farming solutions.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600">
            Metamorphosis Fresh Fields is a forward-thinking agricultural education company and livestock producer, offering cutting-edge online learning and innovative farming solutions. We provide high-quality, accessible education to farmers worldwide, empowering them to improve their techniques and maximize yields. In addition, we are dedicated to responsible livestock production, specializing in egg-laying hens and pig farming. Our goal is to create a sustainable, eco-friendly future for the agriculture industry and the planet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
