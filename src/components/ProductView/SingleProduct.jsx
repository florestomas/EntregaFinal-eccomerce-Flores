import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from '../../firebase/firebase';
import { ProductContext } from '../../context/ProductsContext';

import './SingleProduct.css'

export default function SingleProd() {

  const [products, setProducts] = useContext(ProductContext);



  const { prodId } = useParams(); // Obtén el ID del producto desde los parámetros de la URL

  const [countCartProd,setCountCartProd] = useState(1);

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
        return currItems;

      } else {
        return [...currItems, myProduct];
      }
    });
  };


  return (
    <>
      <div className="card">

          <img className="image-card" src={myProduct.image} alt={myProduct.title} />

        <div>
          <h1 class="fs-1">{myProduct.title}</h1>
          <h3 >{myProduct.description}</h3>


          <div style={{display: "flex", flexDirection: "row", padding: "20px", justifyContent: "space-between", width: "15%"}}>
            <button className="btn btn-light" onClick={() => {setCountCartProd(countCartProd + 1)}}>+</button>
            <h5>{countCartProd}</h5>
            <button className="btn btn-light" onClick={() => {setCountCartProd(countCartProd - 1)}}>-</button>


          </div>
          
            <div style={{marginTop: "10px"}}>
          <button className="btn btn-light" onClick={addToCart} >Añadir al carrito</button>
            </div>
        </div>
      </div>


    </>
  );
}
