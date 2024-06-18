import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from '../../firebase/firebase';
import { ProductContext } from '../../context/ProductsContext';

import './CartComponent.css'

export default function Cart() {

    const [products, setProducts] = useContext(ProductContext);


    function eliminarProd(prodId){
        setProducts(() => {
            let prodErase = products.filter((prod) => {
                debugger;
                prod.id == prodId;
        });
  
            if(prodErase){
                return prodErase;
            }

        })
    }

    return (
        <>
            <div className="list">
                {products.map((prod) => (

                    <div key={prod.id} className="list-group">
                        <div className="list-group-item d-flex justify-content-between" >
                            <h4 className="text-white">{prod.title}</h4>
                            <button className="btn btn-danger" onClick={()=>eliminarProd(prod.id)}> Eliminar</button>

                        </div>
                        
                    </div>
                ))}
            </div>

        </>
    )
}
