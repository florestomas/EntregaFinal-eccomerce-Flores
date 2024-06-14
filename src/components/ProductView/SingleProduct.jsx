import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from '../../firebase/firebase';
import { ProductContext } from '../../context/ProductsContext';

import './SingleProduct.css'

export default function SingleProd() {

  const [products, setProducts] = useContext(ProductContext);



  const { prodId } = useParams(); // Obtén el ID del producto desde los parámetros de la URL



  const [myProds, setMyProds] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [myProduct, setMyProduct] = useState(null); // Estado para el producto específico

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setMyProds(products);
        const product = products.find((prod) => prod.id === prodId);
        setMyProduct(product);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Cambia el estado de carga
      }
    }

    fetchProducts();
  }, [prodId]); // Este efecto se ejecutará cuando `prodId` cambie

  if (loading) {
    return <p>Cargando...</p>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  if (!myProduct) {
    return <p>No se encontró el producto con ID: {prodId}</p>; // Maneja el caso en que el producto no se encuentra
  }



  const addToCart = () => {
    setProducts((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === prodId);
      if (isItemsFound) {
        return currItems.map((item) => {
          // if (item.id === id) {
          //   return { ...item, quantity: item.quantity + 1 };
          //} else {
            return item;
          //}
        });
      } else {
        return [...currItems, myProduct];
      }
    });
  };


  return (
    <>
      <div>
        <h1>Detalles de la competicion</h1>
        <p>ID: {prodId}</p>
        <h3>{myProduct.title}</h3>
        <img src={myProduct.image} alt={myProduct.title} />
        <p>{myProduct.description}</p>
        {

          //<p>Categoría: {myProduct.category}</p>
          //<p>Precio: {myProduct.price}</p>

        }

        <button className="button" onClick= {addToCart} >aniadir al carro</button>
      </div>


    </>
  );
}
