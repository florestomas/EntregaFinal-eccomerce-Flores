import LogoComponent from "./LogoComponent";
import MenuLinks from "./MenuLinksComponent";
import ShoppingCartComponent from "./ShoppingCartComponent";

import './NavBarComponent.css'

export default function NavBarComponent () {

    return (
        <nav className="barra">
            <LogoComponent></LogoComponent>
            <div className="menuLinks">
                <MenuLinks name='LIBERTADORES' link='/LIBERTADORES'></MenuLinks>
                <MenuLinks name='SUDAMERICANA' link='/SUDAMERICANA'></MenuLinks>
                <MenuLinks name='RECOPA' link='/RECOPA'></MenuLinks>
            </div>
            <ShoppingCartComponent></ShoppingCartComponent>
        </nav>   
    );
}