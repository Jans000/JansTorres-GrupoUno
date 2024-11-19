import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#facebook" className="text-blue-500 hover:text-blue-300">Facebook</a>
          <a href="#twitter" className="text-blue-400 hover:text-blue-300">Twitter</a>
          <a href="#instagram" className="text-pink-500 hover:text-pink-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;