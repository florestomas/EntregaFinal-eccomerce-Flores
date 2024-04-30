import LogoComponent from "./LogoComponent";
import MenuLinks from "./MenuLinksComponent";
import ShoppingCartComponent from "./ShoppingCartComponent";

import './NavBarComponent.css'

export default function NavBarComponent () {

    return (
        <nav className="barra">
            <LogoComponent></LogoComponent>
            <div className="menuLinks">
                <MenuLinks name='NOVEDADES' ></MenuLinks>
                <MenuLinks name='ENTRADAS' ></MenuLinks>
                <MenuLinks name='FUTBOL' ></MenuLinks>
                <MenuLinks name='ACCESORIOS' ></MenuLinks>
            </div>
            <ShoppingCartComponent></ShoppingCartComponent>
        </nav>   
    );
}