// src/components/DropdownMenu.js
import React, { useState } from "react";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-white bg-gray-800 p-4">
        Menu
      </button>
      {isOpen && (
        <ul className="absolute left-0 w-48 bg-gray-800 text-white shadow-lg">
          <li className="p-2 hover:bg-gray-700">Inicio</li>
          <li className="p-2 hover:bg-gray-700">Barras laterales</li>
          <li className="p-2 hover:bg-gray-700">CVS</li>
          <li className="p-2 hover:bg-gray-700">Equipos</li>
          <li className="p-2 hover:bg-gray-700">Inicios</li>
          <li className="p-2 hover:bg-gray-700">Navegación</li>
          <li className="p-2 hover:bg-gray-700">Pies de página</li>
          <li className="p-2 hover:bg-gray-700">Planes</li>
          <li className="p-2 hover:bg-gray-700">Tarjetas</li>
          <li className="p-2 hover:bg-gray-700">Tarjetas v2</li>
          <li className="p-2 hover:bg-gray-700">Testimonios</li>
        </ul>
      )}
    </div>
  );
};

export default MenuDropdown;
