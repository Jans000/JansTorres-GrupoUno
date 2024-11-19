import Item from "../Item/Item";
import { getProducts } from "../../Data/contenido";
import { useEffect, useState } from "react";

export default function ItemList({ agregarAlCar }) { 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="flex flex-wrap">
      {products.map((prod) => (
        <Item 
          {...prod} 
          key={prod.id}
          agregarAlCar={agregarAlCar} 
        />
      ))}
    </div>
  );
}
