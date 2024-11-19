import React from 'react';

const Car = ({ car, eliminarDelCar, cerrarCarrito }) => {
  const calcularTotal = () => {
    return car.reduce((total, prod) => {
      const priceNumber = parseFloat(prod.price.replace(/[^\d]/g, '')) / 100;
      return total + priceNumber;
    }, 0);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-72 max-h-[300px] overflow-y-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Carrito</h2>
        <button onClick={cerrarCarrito} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 text-sm">
          Cerrar
        </button>
      </div>
      {car.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {car.map((producto) => (
            <div key={producto.id} className="flex justify-between items-center mb-2">
              <p className="text-sm">{producto.name}</p>
              <p className="text-sm">{producto.price}</p>
              <button
                className="bg-red-600 text-white px-1 py-1 rounded hover:bg-red-700 text-xs"
                onClick={() => eliminarDelCar(producto.id)}
              >
                X
              </button>
            </div>
          ))}
          <div className="mt-2">
            <h3 className="text-md font-bold">Total: ${calcularTotal().toLocaleString('es-CL')}</h3>
            <button className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 mt-2 text-sm">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Car;
