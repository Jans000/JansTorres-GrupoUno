import React from "react";
import useStore from "../../Store/Store.jsx";

const Car = () => {
  const { car, removeFromCar, updateQuantity } = useStore();

  
  const calcularTotal = () => {
    return car.reduce((total, producto) => {
      const precioNumerico = parseFloat(producto.price.replace(/[^\d]/g, '')) / 100;
      return total + precioNumerico * producto.quantity;
    }, 0);
  };

  return (
    <div className="car-container p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Carrito de Compras</h2>

      {car.length === 0 ? (
        <p className="text-gray-600">No hay productos en el carrito.</p>
      ) : (
        <div>
          {car.map((producto) => (
            <div
              key={`${producto.id}-${producto.size}`}
              className="mb-4 p-2 border-b border-gray-300"
            >
              <p className="font-medium text-gray-700">{producto.name} (Talla: {producto.size})</p>
              <div className="flex items-center gap-4">
                <label htmlFor={`cantidad-${producto.id}`} className="text-sm text-gray-600">
                  Cantidad:
                </label>
                <input
                  id={`cantidad-${producto.id}`}
                  type="number"
                  value={producto.quantity}
                  min="1"
                  max={producto.stock}
                  className="w-16 p-1 border border-gray-300 rounded"
                  onChange={(e) =>
                    updateQuantity(producto.id, producto.size, Number(e.target.value))
                  }
                />
              </div>
              <button
                onClick={() => removeFromCar(producto.id, producto.size)}
                className="mt-2 text-red-600 hover:text-red-800"
              >
                Eliminar
              </button>
            </div>
          ))}

          <h3 className="text-xl font-bold mt-4 text-gray-800">
            Total: ${calcularTotal().toLocaleString('es-CL')}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Car;
