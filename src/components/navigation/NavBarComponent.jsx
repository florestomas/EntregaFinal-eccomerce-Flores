import LogoComponent from "./LogoComponent";
import MenuLinks from "./MenuLinksComponent";
import ShoppingCartComponent from "./ShoppingCartComponent";

import './NavBarComponent.css'

export default function NavBarComponent () {

    return (
        <nav className="barra">
            <LogoComponent></LogoComponent>
            <div className="menuLinks">
                <MenuLinks name='INICIO' link='/'></MenuLinks>
                <MenuLinks name='ENTRADAS' link='/entradas'></MenuLinks>
                <MenuLinks name='SOPORTE' link='/soporte'></MenuLinks>
            </div>
            <ShoppingCartComponent></ShoppingCartComponent>
        </nav>   
    );
}