import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ProductCard from '../ProductsView/ProductCard';

import './ProductsView.css'

export default function ProductsComponent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts.then((data) => setProducts(data));
    }, []);

    return (
        <>
            <div className='container'>
                <article className="product-container">
                    {products.map((product) => (
                        <ProductCard
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            idProd={product.id}
                        />
                    ))}
                </article>
            </div>
        </>
    );
}
