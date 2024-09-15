import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-sky-100 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-sky-600">Task 1 - STC_WD_01</h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Here's a simple Landing page with an interactive Navigation Menu that accounts for Hover and Scroll effects. A minimalistic design with interactive elements, Tech used : Vite (React.js) & Tailwind CSS.
        </p>
        <button className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
