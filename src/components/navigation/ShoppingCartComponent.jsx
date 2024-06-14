import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCartComponent.css'

export default function ShoppingCartComponent (){

    const [contador, setContador] = useState(1);

    const clickHandler = () => {
        setContador(contador+1);
    };

    return (
        <Link to ="/cart" className="shoppingCart">
            <a>
                <img className='carrito' height={30} width={35} src='https://i1.wp.com/afriwestmedia.com/wp-content/uploads/2017/03/white-shopping-cart-icon.png?fit=300%2C300'></img>
                <span className='title' onClick={clickHandler}>{contador}</span>
            </a>
        </Link>
    );
}