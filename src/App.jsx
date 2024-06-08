import './App.css'
import ProductsComponent from './components/productsComponent'



function App() {

  return (
    <>
        <ProductsComponent></ProductsComponent>
    </>
  )
}


/*

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/navigation/NavBarComponent';
import HomeComponent from './components/HomeView/HomeComponent';
import ContactComponent from './components/ContactView/ContactComponent';
import SingleProd from './components/ProductView/SingleProduct';

<BrowserRouter>
      <NavBarComponent/>
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/Libertadores" element={<ProductsComponent />} />
          <Route exact path="/Sudamericanas" element={<ContactComponent />} />
          <Route exact path="/Recopas" element={<ContactComponent />} />
          <Route exact path="/product/:prodId" element={<SingleProd />} />
        </Routes>
      </BrowserRouter>
*/
export default App
