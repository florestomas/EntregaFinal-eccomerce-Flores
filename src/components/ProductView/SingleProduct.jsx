import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

export default function SingleProd() {
  /*
  const [product, setProduct] = useState({});

  const { prodId } = useParams();

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, []);
  */
  return (
    <>
      <h1>Single Prod</h1>
      <p>ID: {prodId}</p>
      <h3>Nombre: {product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>Descripcion: {product.description}</p>
      <p>Categoria: {product.category}</p>
      <p>Precio:{product.price}</p>
    </>
  );
}
