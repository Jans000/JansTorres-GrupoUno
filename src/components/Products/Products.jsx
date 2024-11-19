import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const navigate = useNavigate();

  const productos = [
    { id: 1, name: 'Producto 1', price: '$10.000' },
    { id: 2, name: 'Producto 2', price: '$15.000' },
    { id: 3, name: 'Producto 3', price: '$20.000' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {productos.map((producto) => (
          <div key={producto.id} className="border p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">{producto.name}</h3>
            <p className="text-gray-600">{producto.price}</p>
            <button
              onClick={() => navigate(`/products/${producto.id}`)}
              className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

