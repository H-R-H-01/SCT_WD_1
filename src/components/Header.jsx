import React, { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-700 z-50 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        
        <h1 className={`text-sky-600 font-bold transition-all duration-500 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
          Company
        </h1>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="text-sky-600 hover:text-sky-400 transition-colors duration-300">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="text-sky-600 hover:text-sky-400 transition-colors duration-300">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#services" className="text-sky-600 hover:text-sky-400 transition-colors duration-300">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sky-600 hover:text-sky-400 transition-colors duration-300">
                CONTACT
              </a>
            </li>
          </ul>
          <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-500 transition-colors duration-300">
            Get Started
          </button>
        </div>

        <div className="md:hidden z-50">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-sky-600" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-sky-600" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-sky-100 flex flex-col justify-center items-center z-40">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu}>
              <XMarkIcon className="h-8 w-8 text-sky-600" />
            </button>
          </div>

          <ul className="space-y-8 text-center">
            <li>
              <a href="#home" className="text-sky-600 text-xl hover:text-sky-400 transition-colors duration-300" onClick={toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="text-sky-600 text-xl hover:text-sky-400 transition-colors duration-300" onClick={toggleMenu}>
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#services" className="text-sky-600 text-xl hover:text-sky-400 transition-colors duration-300" onClick={toggleMenu}>
                SERVICES
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sky-600 text-xl hover:text-sky-400 transition-colors duration-300" onClick={toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>

          <button className="mt-8 bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition-colors duration-300" onClick={toggleMenu}>
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
