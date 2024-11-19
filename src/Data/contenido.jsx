import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contenido = () => {
  const navigate = useNavigate();

  const productos = [
    {
      id: 1,
      name: 'Camiseta Puma Manchester City Tercera 24/25 Adulto',
      category: 'Men',
      price: '$64.990',
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/png_52_840x840.jpg?v=1730292966',
    },
    {
      id: 2,
      name: 'Camiseta Puma Manchester City Visita 24/25 Adulto',
      category: 'Men',
      price: '$64.990',
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/25-Mens-Replica-Away-Soccer-Jers_600x600.jpg?v=1730293339',
    },
    {
      id: 3,
      name: 'Camiseta Puma Ac Milán Visita 24/25 Adulto',
      category: 'Men',
      price: '$64.990',
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/25-para-hombre_600x600.jpg?v=1730293846',
    },
    {
      id: 4,
      name: 'Camiseta Adidas Boca Juniors 24/25 Visita Adulto',
      category: 'Men',
      price: '$79.990',
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/Boca_Juniors_24-25_Away_Jersey_W_840x840.jpg?v=1729707735',
    },
    {
      id: 5,
      name: 'Camiseta KS7 Santiago Morning Local 2024 Adulto',
      category: 'Male',
      price: '$44.990',
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/FRONT_22_840x840.jpg?v=1728647458',
    },
    {
      id: 6,
      name: 'Camiseta Adidas Real Madrid Visita 24/25 Adulto',
      category: 'Male',
      price: '$79.990',
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/Camiseta_Visitante_Real_Madrid_2_4_4951e263-22ca-41f1-ace0-b61d85c2186b_840x840.jpg?v=1721849393',
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Nuestros Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
              src={producto.imgSrc}
                alt={`Imagen de ${producto.name}`}
                 className="w-full h-64 object-contain"
                 loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{producto.name}</h3>
              <p className="text-gray-600 mb-2">{producto.category}</p>
              <p className="text-lg font-bold mb-2">{producto.price}</p>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                aria-label={`Comprar ${producto.name}`}
                onClick={() => navigate(`/products/${producto.id}`)}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contenido;
