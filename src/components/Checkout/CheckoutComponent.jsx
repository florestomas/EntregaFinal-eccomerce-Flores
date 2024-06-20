import React, { useState, useRef, useContext } from 'react';
import { addOrder } from '../../firebase/firebase';
import { ProductContext } from '../../context/ProductsContext';

import './CheckoutComponent.css';
import { set } from 'firebase/database';




export default function CheckoutComponent() {

    const [products, setProducts] = useContext(ProductContext);
    const [orderId, setOrderId] = useState(null);


    
    

    // Estado para manejar la validación del email y el éxito del formulario
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isFormCompleted, setIsFormCompleted] = useState(false);

    // Crear referencias para los cuatro inputs
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const emailCheckRef = useRef(null);

    function successCompra() {
        // Comprobar si los emails coinciden
        if (emailRef.current.value === emailCheckRef.current.value) {
            setIsEmailValid(true);

            // Comprobar si todos los campos están llenos
            if (nameRef.current.value && phoneRef.current.value && emailRef.current.value && emailCheckRef.current.value) {
                setIsFormCompleted(true); // Marcar el formulario como completado
                
                const newOrder = {
                    buyer: {
                      name: nameRef.current.value,
                      phone: phoneRef.current.value,
                      email: emailRef.current.value,
                    },
                    items: products,
                    total: 2662011,
                    date: new Date(),
                };
                
                setProducts([]);
                
                addOrder(newOrder).then((id) => setOrderId(id));

            } else {
                setIsFormCompleted(false); // Si faltan campos, no se completa el formulario
                alert("Por favor, complete todos los campos.");
            }

        } else {
            setIsEmailValid(false);
            setIsFormCompleted(false); // No se completa el formulario si los emails no coinciden
        }
    }

    return (
        <div className="forms">
            {isFormCompleted ? (
                // Mostrar mensaje de éxito si el formulario está completado
                <>
                    <h5 style={{marginTop:"50px"}}>Formulario completado con éxito</h5>
                    <h5 style={{marginTop:"5px"}}>id Orden Generada: {orderId}</h5>
                </>
                
                
            ) : (
                // Mostrar el formulario si no está completado
                <>
                    <h1 className="text-white" style={{ margin: "30px" }}>Complete sus datos para poder continuar</h1>
                    
                    {/* Mensaje de error si los emails no coinciden */}
                    {!isEmailValid && <h5 className="error-message">ERROR: Los emails no coinciden</h5>}

                    <div style={{ width: "30%", alignItems: "center" }} className="input-group mb-3">
                        <h4>Nombre</h4>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" ref={nameRef} placeholder="Nombre" />
                        </div>
                        <h4>Telefono</h4>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" ref={phoneRef} placeholder="Telefono" />
                        </div>
                        <h4>Email</h4>
                        <div className="input-group mb-3">
                            <input id="email" type="text" className="form-control" ref={emailRef} placeholder="Email" />
                        </div>
                        <h4>Repetir email</h4>
                        <div className="input-group mb-3">
                            <input id="emailCheck" type="text" className="form-control" ref={emailCheckRef} placeholder="Repetir Email" />
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={successCompra}>Enviar Orden</button>
                </>
            )}
        </div>
    );
}
