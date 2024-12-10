import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const products = [
    {
      id: 1,
      name:  'Camiseta Puma Manchester City Tercera 24/25 Adulto',
      category: 'Men',
      price: '$64.990',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 10,
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/png_52_840x840.jpg?v=1730292966',
      description: 'Camiseta Puma Manchester City Tercera 24/25 Adulto.',
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

  const product = products.find((prod) => prod.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="product-detail-container p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img src={product.imgSrc} alt={product.name} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>
        <label className="block mb-2 font-semibold">Talla:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="">Selecciona una talla</option>
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <label className="block mb-2 font-semibold">Cantidad:</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, +e.target.value)))}
        />
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={!selectedSize}
          onClick={() =>
            alert(
              `Producto: ${product.name}\nTalla: ${selectedSize}\nCantidad: ${quantity} añadido al carrito.`
            )
          }
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
