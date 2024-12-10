import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsCategory = () => {
  const { categoryId } = useParams(); 

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Productos de la categoría: {categoryId}</h2>
      <p>Mostrar productos de la categoría "{categoryId}" aquí.</p>
      {}
    </div>
  );
};

export default ProductsCategory;
