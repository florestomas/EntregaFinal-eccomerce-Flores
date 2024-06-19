import React, { useState, useRef } from 'react';
import './CheckoutComponent.css';

export default function CheckoutComponent() {
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
                    <h5 style={{marginTop:"5px"}}>id Orden Generada: 26-6-2011{}</h5>
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
