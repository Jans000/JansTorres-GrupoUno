import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Camiseta Puma Manchester City Tercera 24/25 Adulto',
      category: 'Men',
      price: '$64.990',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 10,
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/png_52_840x840.jpg?v=1730292966',
      description: 'Camiseta oficial del Manchester City para la temporada 2024/2025. Diseño exclusivo de Puma.',
    },
    {
      id: 2,
      name: 'Camiseta Puma Manchester City Visita 24/25 Adulto',
      category: 'Men',
      price: '$64.990',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 8,
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/25-Mens-Replica-Away-Soccer-Jers_600x600.jpg?v=1730293339',
      description: 'Camiseta de visitante del Manchester City. Perfecta para lucir estilo y apoyar a tu equipo favorito.',
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

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="about-container p-8">
      <header className="text-center py-10 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Nuestros Productos</h1>
        <p className="mt-4 text-lg">Explora nuestra colección de camisetas oficiales.</p>
      </header>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Catálogo de Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-xl font-bold text-blue-600">{product.price}</p>
                <button
                  className="mt-4 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
                  onClick={() => handleViewDetails(product.id)}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
