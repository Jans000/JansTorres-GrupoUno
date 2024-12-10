import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold uppercase">YINS TOWERS STORE</h1>
        <nav>
          <ul className="flex space-x-4 text-lg">
            <li><Link to="/" className="hover:text-gray-200">Inicio</Link></li>
            <li><Link to="/products" className="hover:text-gray-200">Productos</Link></li>
            <li><Link to="/about" className="hover:text-gray-200">Nosotros</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
