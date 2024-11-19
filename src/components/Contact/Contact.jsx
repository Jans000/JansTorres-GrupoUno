import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado con éxito!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container p-8">
      <header className="text-center py-10 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Contáctanos</h1>
        <p className="mt-4 text-lg">¡Estamos aquí para ayudarte!</p>
      </header>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Formulario de Contacto</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
          >
            Enviar Mensaje
          </button>
        </form>
      </section>

      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Información de Contacto</h2>
        <p className="text-lg text-center mb-4">
          Si prefieres contactarnos directamente, puedes hacerlo a través de los siguientes métodos:
        </p>
        <div className="text-center">
          <p className="text-lg mb-2">Correo electrónico: <a href="mailto:contacto@tienda.com" className="text-blue-600">contacto@tienda.com</a></p>
          <p className="text-lg mb-2">Teléfono: <a href="tel:+123456789" className="text-blue-600">+1 (234) 567-89</a></p>
        </div>
      </section>

      <footer className="text-center py-6 bg-blue-600 text-white">
        <p>&copy; {new Date().getFullYear()} Yins Towers Store. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
