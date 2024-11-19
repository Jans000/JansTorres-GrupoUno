import React, { useState } from "react";
import Contenido from "../../Data/contenido";


const HomePage = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCar = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div>
      <h1>Bienvenido a Yins Towers Store</h1>
      <Contenido agregarAlCar={agregarAlCar} /> {}
      
    </div>
  );
};

export default HomePage;
