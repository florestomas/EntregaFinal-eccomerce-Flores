import React, { createContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVBw0bt1EPTen_89d5Gj1jx6z17_ge2tk",
  authDomain: "ecommercecabj-flores.firebaseapp.com",
  projectId: "ecommercecabj-flores",
  storageBucket: "ecommercecabj-flores.appspot.com",
  messagingSenderId: "1074372775235",
  appId: "1:1074372775235:web:f9d21aa3337ff327c5f3f6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Crear contexto para los productos
export const ProductContext = createContext([]);

// Proveedor del contexto que obtiene y proporciona los datos de los productos
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener los productos desde Firebase
  async function getProducts() {
    try {
      const response = await getDocs(collection(db, 'products')); // Obtener documentos de la colección 'products'
      const listaProds = [];
      response.forEach((doc) => listaProds.push({ id: doc.id, ...doc.data() })); // Crear una lista de productos con sus datos
      return listaProds;
    } catch (err) {
      throw new Error('Error al obtener productos: ' + err.message);
    }
  }

  // Llamada a la función de obtención de productos y manejo del estado
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true); // Indicamos que la carga de datos está en progreso
        const data = await getProducts(); // Obtenemos los datos de Firebase
        setProducts(data); // Guardamos los datos en el estado
      } catch (err) {
        setError(err.message); // Si ocurre un error, lo guardamos en el estado de error
      } finally {
        setLoading(false); // Indicamos que la carga ha terminado
      }
    }

    fetchProducts();
  }, []); // El arreglo vacío indica que esto solo se ejecuta una vez, al montar el componente

  // Valor del contexto incluyendo productos, estado de carga y error
  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}
