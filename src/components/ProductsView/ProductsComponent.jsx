import { useState, useEffect } from 'react';
import { getProducts } from '../../firebase/firebase';
import './ProductsView.css'

export default function ProductsComponent() {

  const [myProds, setMyProds] = useState([]);

  function obtenerProductos() {
    getProducts().then((products) => setMyProds(products));
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      <div class='product-container'>
        {myProds.map((prod) => (
          <div key={prod.id}  class='container'>
            <h4>{prod.title}</h4>
            <img src= {prod.image} class='image'></img>
          </div>  
        ))}
      </div>
    </>
  );
}

/*
{myProds.map((prod) => (
        <div key={prod.id} >
          <div class='container'>
          <h4>{prod.title}</h4>
          <img src= {prod.image}></img>
          </div>
        </div>  
      ))}

*/