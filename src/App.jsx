import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/navigation/NavBarComponent';
import HomeComponent from './components/HomeView/HomeComponent';
import ContactComponent from './components/ContactView/ContactComponent';
/*
import ProductsComponent from './components/ProductsView/ProductsComponent';
import SingleProd from './components/ProductView/SingleProd';
*/
function App() {

  return (
    <>
      <BrowserRouter>
      <NavBarComponent/>
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/soporte" element={<ContactComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
