import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from '../../firebase/firebase';
import { ProductContext } from '../../context/ProductsContext';

import './CartComponent.css'

export default function Cart() {

    const [products, setProducts] = useContext(ProductContext);

    return (
        <>
            <div className="list">
                {products.map((prod) => (

                    <div key={prod.id} className="list-group">
                        <div className="list-group-item">
                            <h4 className="text-white">{prod.title}</h4>


                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}