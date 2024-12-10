import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado con éxito! Pronto nos pondremos en contacto contigo.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <header className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <h1 className="text-5xl font-bold">Contáctanos</h1>
        <p className="mt-4 text-lg">Tu opinión es importante para nosotros.</p>
      </header>

      {/* Formulario */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Envíanos un Mensaje</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Ingresa tu nombre completo"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Información de contacto */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
          <p className="text-lg mb-4">
            Si tienes dudas, puedes contactarnos a través de los siguientes medios:
          </p>
          <div className="text-lg">
            <p className="mb-2">
              <strong>Correo electrónico:</strong>{' '}
              <a href="mailto:Gabrielmillan@gmail.com" className="text-blue-600 hover:underline">
                Gabrielmillan@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Teléfono:</strong>{' '}
              <a href="tel:+5699571428" className="text-blue-600 hover:underline">
                +56 9 9571 428
              </a>
            </p>
            <p className="mb-2">
              <strong>Horario de atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
