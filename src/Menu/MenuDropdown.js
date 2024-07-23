import React from 'react';

function MenuDropdown() {
  return (
    <nav className="bg-transparent text-white flex justify-between items-center p-6">
      <div className="text-lg font-bold">
        Bootstrap Navbar
      </div>
      <div className="space-x-6">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#services" className="hover:text-gray-400">Services</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
      <div className="space-x-4">
        <button className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-white rounded">
          Login
        </button>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default MenuDropdown;