import React, { useState } from 'react';

const FormDePago = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Compra realizada. Gracias por su pedido.');
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Formulario de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-semibold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="apellido" className="block text-sm font-semibold mb-2">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu apellido"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="direccion" className="block text-sm font-semibold mb-2">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Tu dirección"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telefono" className="block text-sm font-semibold mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="(+56) 123456789"
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Limpiar
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDePago;
