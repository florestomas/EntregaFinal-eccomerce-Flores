import './App.css'
import ProductsComponent from './components/ProductsView/ProductsComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/navigation/NavBarComponent';
import HomeComponent from './components/HomeView/HomeComponent';
import SingleProd from './components/ProductView/SingleProduct';



function App() {

  return (
    <>
      <BrowserRouter>
        <NavBarComponent/>
          <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route exact path="/Libertadores" element={<ProductsComponent />} />
            <Route exact path="/Sudamericanas" element={<ProductsComponent />} />
            <Route exact path="/Recopas" element={<ProductsComponent />} />
            <Route exact path="/product/:prodId" element={<SingleProd />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}


/*



*/
export default App
