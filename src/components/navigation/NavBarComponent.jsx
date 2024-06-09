import LogoComponent from "./LogoComponent";
import MenuLinks from "./MenuLinksComponent";
import ShoppingCartComponent from "./ShoppingCartComponent";

import './NavBarComponent.css'

export default function NavBarComponent () {

    return (
        <nav className="barra">
            <LogoComponent></LogoComponent>
            <div className="menuLinks">
                <MenuLinks name='LIBERTADORES' link='/libertadores'></MenuLinks>
                <MenuLinks name='SUDAMERICANA' link='/sudamericanas'></MenuLinks>
                <MenuLinks name='RECOPA' link='/recopas'></MenuLinks>
            </div>
            <ShoppingCartComponent></ShoppingCartComponent>
        </nav>   
    );
}