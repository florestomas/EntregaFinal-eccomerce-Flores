import React, { useState, useRef } from 'react';
import './CheckoutComponent.css';

export default function CheckoutComponent() {
    // Estados para el manejo de las referencias
    const [flagEmail, setFlagEmail] = useState(false);
    const [flagCheckout, setFlagCheckout] = useState(false);

    // Crear referencias para los cuatro inputs
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const emailCheckRef = useRef(null);

    function successCompra() {
        // Alternar el estado de flagEmail
        
        if(emailRef.current.value === emailCheckRef.current.value){
            setFlagEmail(true);
        }
        else{
            setFlagEmail(false);
        }

        // Acceder a los valores de los inputs usando las referencias
        console.log("Nombre:", nameRef.current.value);
        console.log("Telefono:", phoneRef.current.value);
        console.log("Email:", emailRef.current.value);
        console.log("Repetir Email:", emailCheckRef.current.value);
    }

    return (

      
        <div className="forms">
            <h1 className="text-white" style={{ margin: "30px" }}>Complete sus datos para poder continuar</h1>
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

                {/* Renderizado condicional basado en flagEmail */}
                {flagEmail ? (null) : (<h5>ERROR: Ingresa el mismo mail</h5>)}
            </div>
            <button className="btn btn-success" onClick={successCompra}>Enviar Orden</button>
        </div>
    );
}
