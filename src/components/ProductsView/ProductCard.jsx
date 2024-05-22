import { Link } from 'react-router-dom';

import './ProductsView.css'

export default function ProductCard({ title, price, image, idProd }) {
  return (
    <>
      <div className='column'>
        <h4>{title}</h4>
        <img src={image} height={240} width={426} alt={title} />
        <p>Price $ {price}</p>
        <button>
          <Link to={`/product/${idProd}`}>Ver detalles</Link>
        </button>
      </div>
    </>
  );
}
