import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../Store/Store.jsx';

const ItemDetail = () => {
  const { productId } = useParams();
  const agregarAlCarrito = useStore((state) => state.agregarAlCarrito);

  const productos = [
    {
      id: 1,
      name: 'Camiseta Puma Manchester City Tercera 24/25 Adulto',
      category: 'Men',
      price: '$64.990',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 10,
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/png_52_840x840.jpg?v=1730292966',
    },
    {
      id: 2,
      name: 'Camiseta Puma Manchester City Visita 24/25 Adulto',
      category: 'Men',
      price: '$64.990',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 8,
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/25-Mens-Replica-Away-Soccer-Jers_600x600.jpg?v=1730293339',
    },
    {
      id: 3,
      name: 'Camiseta Puma Ac Milán Visita 24/25 Adulto',
      category: 'Men',
      price: '$64.990',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 5,
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/25-para-hombre_600x600.jpg?v=1730293846',
    },
    {
      id: 4,
      name: 'Camiseta Adidas Boca Juniors 24/25 Visita Adulto',
      category: 'Men',
      price: '$79.990',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 7,
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/Boca_Juniors_24-25_Away_Jersey_W_840x840.jpg?v=1729707735',
    },
    {
      id: 5,
      name: 'Camiseta KS7 Santiago Morning Local 2024 Adulto',
      category: 'Male',
      price: '$44.990',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 15,
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/FRONT_22_840x840.jpg?v=1728647458',
    },
    {
      id: 6,
      name: 'Camiseta Adidas Real Madrid Visita 24/25 Adulto',
      category: 'Male',
      price: '$79.990',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 12,
      imgSrc: 'https://www.cienporcientofutbol.cl/cdn/shop/files/Camiseta_Visitante_Real_Madrid_2_4_4951e263-22ca-41f1-ace0-b61d85c2186b_840x840.jpg?v=1721849393',
    },
  ];

  const producto = productos.find((p) => p.id === Number(productId));
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla.');
      return;
    }

    agregarAlCarrito({
      ...producto,
      size: selectedSize,
      quantity,
    });

    alert('Producto agregado al carrito');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{producto.name}</h1>
      <img
        src={producto.imgSrc}
        alt={producto.name}
        className="w-full h-64 object-contain mb-4"
      />
      <p className="text-gray-600">{producto.category}</p>
      <p className="text-lg font-bold mb-4">{producto.price}</p>

      <div className="mb-4">
        <label>Talla:</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        >
          <option value="">Selecciona una talla</option>
          {producto.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label>Cantidad:</label>
        <input
          type="number"
          min="1"
          max={producto.stock}
          value={quantity}
          onChange={(e) => setQuantity(Math.min(Math.max(e.target.value, 1), producto.stock))}
          className="border rounded px-4 py-2 w-full"
        />
        <p className="text-sm text-gray-600">Stock disponible: {producto.stock}</p>
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
