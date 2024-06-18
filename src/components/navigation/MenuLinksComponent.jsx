import './MenuLinksComponent.css'
import { Link } from 'react-router-dom';

export default function MenuLinks ({ name, link}) {
    
    const handleClick = () => {
        console.log(`Estas en la seccion de ${name}`);
    };
    
    return (
        <div className="content">
            <Link to={link}> 
                <button className="boton">{name}</button>
            </Link>
        </div>
        
    );
    
}