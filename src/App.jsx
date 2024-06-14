import './App.css'
import ProductsComponent from './components/ProductsView/ProductsComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/navigation/NavBarComponent';
import HomeComponent from './components/HomeView/HomeComponent';
import SingleProd from './components/ProductView/SingleProduct';
import { ProductProvider } from './context/ProductsContext';



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
              <Route exact path="/intercontinental/:prodId" element={<SingleProd />} />
              <Route exact path="/libertadores/:prodId" element={<SingleProd/>} />
              <Route exact path="/recopas/:prodId" element={<SingleProd />} />
              <ProductProvider>
              <Route exact path="/cart" element={<CartComponent />} />
              </ProductProvider>
            </Routes>
        </BrowserRouter>
      </>

  )
}


/*



*/
export default App
