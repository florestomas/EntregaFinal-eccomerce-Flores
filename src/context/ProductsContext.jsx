
import { createContext, useEffect, useState } from 'react';

//lo que tenemos que consumir
export const ProductContext = createContext(false);

//el que provee acceso al contexto
export const ProductProvider =({ children }) => {

  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  );
};
