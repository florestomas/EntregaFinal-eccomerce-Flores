import './App.css'
import ProductsComponent from './components/ProductsView/ProductsComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/navigation/NavBarComponent';
import HomeComponent from './components/HomeView/HomeComponent';
import CartComponent from './components/CartView/CartComponent';
import SingleProd from './components/ProductView/SingleProduct';
import { ProductProvider } from './context/ProductsContext';
import CheckoutComponent from './components/Checkout/CheckoutComponent';



function App() {

  return (

    <ProductProvider>
      <>
        <BrowserRouter>
          <NavBarComponent/>
            <Routes>
              <Route exact path="/" element={<HomeComponent />} />

              <Route exact path="/Libertadores" element={<ProductsComponent category={"libertadores"}/>} />
              <Route exact path="/Intercontinentales" element={<ProductsComponent category={"intercontinental"}/>} />
              <Route exact path="/Recopas" element={<ProductsComponent category={"recopas"}/>} />

              <Route exact path="/intercontinental/:prodId" element={<SingleProd />} />
              <Route exact path="/libertadores/:prodId" element={<SingleProd/>} />
              <Route exact path="/recopas/:prodId" element={<SingleProd />} />
              
              <Route exact path="/cart" element={<CartComponent />} />

              <Route exact path="/checkout" element={<CheckoutComponent />} />
            </Routes>
        </BrowserRouter>
      </>
      </ProductProvider>
  )
}


/*



*/
export default App
