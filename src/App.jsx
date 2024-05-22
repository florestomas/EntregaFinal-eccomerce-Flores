import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/navigation/NavBarComponent';
import HomeComponent from './components/HomeView/HomeComponent';
import ContactComponent from './components/ContactView/ContactComponent';
import SingleProd from './components/ProductView/SingleProduct';
import ProductsComponent from './components/ProductsView/ProductsComponent';

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBarComponent/>
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/entradas" element={<ProductsComponent />} />
          <Route exact path="/soporte" element={<ContactComponent />} />
          <Route exact path="/product/:prodId" element={<SingleProd />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
