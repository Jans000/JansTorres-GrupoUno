import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';


import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';
import ContactPage from './components/Contact/Contact';
import ProductsPage from './components/Products/Products';
import ItemDetail from './components/Itemdetail/Itemdetail';
import ProductsCategory from './components/Category/Category';
import FormPage from './components/FormPage/FormPage';
import Car from './components/Car/Car';

function App() {
  
  const [car, setCar] = useState(() => {
   
    const carritoGuardado = localStorage.getItem('car');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  
  useEffect(() => {
    localStorage.setItem('car', JSON.stringify(car));
  }, [car]);

 
  const agregarAlCarrito = (nuevoProducto) => {
    setCar((prevCar) => {
      const existente = prevCar.find(
        (producto) => producto.id === nuevoProducto.id && producto.size === nuevoProducto.size
      );
      if (existente) {
        return prevCar.map((producto) =>
          producto.id === nuevoProducto.id && producto.size === nuevoProducto.size
            ? { ...producto, quantity: producto.quantity + nuevoProducto.quantity }
            : producto
        );
      }
      return [...prevCar, nuevoProducto];
    });
  };


  const eliminarDelCar = (id) => {
    setCar((prevCar) => prevCar.filter((producto) => producto.id !== id));
  };

  
  const toggleCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
  };

  return (
    <>
      <BrowserRouter>
       
        <HeaderComponent />

        
        <Routes>
          <Route path="/" element={<HomePage agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/products" element={<ProductsPage agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/category/:categoryId" element={<ProductsCategory />} />
          <Route
            path="/products/:productId"
            element={<ItemDetail agregarAlCarrito={agregarAlCarrito} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>

        
        <FooterComponent />

        
        <button
          onClick={toggleCarrito}
          className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700"
        >
          {carritoAbierto ? 'Cerrar Carrito' : 'Abrir Carrito'}
        </button>

        
        {carritoAbierto && (
          <Car car={car} eliminarDelCar={eliminarDelCar} cerrarCarrito={toggleCarrito} />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
