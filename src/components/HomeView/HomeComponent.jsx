
import ProductsComponent from '../ProductsView/ProductsComponent';
import './HomeComponent.css' 

export default function HomeComponent(){
    return(
      <div>
          
          <img className='cabjBanner' src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/bd8000112458335.6026f83cef3c9.png'></img>
          <ProductsComponent></ProductsComponent>
       
      </div>
    );
  }  