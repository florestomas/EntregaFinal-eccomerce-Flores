import { useState, useEffect } from 'react';
import { getProducts } from '../../context/ContextProducts';
import { Link } from 'react-router-dom';

import './ProductsView.css'

export default function ProductsComponent() {

  const [myProds, setMyProds] = useState([]);


  useEffect(() => {
    obtenerProductos();
  }, []);

  function obtenerProductos() {
    getProducts().then((products) => setMyProds(products));
  }


  return (
    <>
      <div className='product-container'>
        {myProds.map((prod) => (

          <div key={prod.id}  className='container'>
            <h4>{prod.title}</h4>
            <Link to={`/${prod.torneo}/${prod.id}`}>

            <img src= {prod.image} className='image'></img>

            </Link>
          </div>  
        ))}
      </div>
    </>
  );
}

