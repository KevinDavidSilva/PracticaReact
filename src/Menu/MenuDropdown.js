import React, { useState } from 'react';

function MenuDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-white p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-lg font-bold mr-8">
            Vox
          </div>
          <div className="hidden lg:flex space-x-6">
            <a href="#home" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-400">
              About
            </a>
            <a href="#services" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          <button className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-white rounded">
            Login
          </button>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-400">
              About
            </a>
            <a href="#services" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
            <button className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-white rounded">
              Login
            </button>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MenuDropdown;