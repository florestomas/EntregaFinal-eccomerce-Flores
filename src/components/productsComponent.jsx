import { useState, useEffect } from 'react';
import {
  getProducts,
} from '../firebase/firebase';

export default function ProductsComponent() {
  const [myProds, setMyProds] = useState([]);

  function obtenerProductos() {
    getProducts().then((products) => setMyProds(products));
  }

  useEffect(() => {
    obtenerProductos();
    /* filterProdsByPrice(13).then((products) => setMyProds(products)); */
  }, []);



  return (
    <>
      {myProds.map((prod) => (
        <div key={prod.id}>
          <h4>{prod.title}</h4>
          <p>
            {prod.brand} - ${prod.price}
          </p>
        </div>
      ))}
    </>
  );
}
