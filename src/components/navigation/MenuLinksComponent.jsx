import './MenuLinksComponent.css'
import { Link } from 'react-router-dom';

export default function MenuLinks ({ name, link}) {
    
    const handleClick = () => {
        console.log(`Estas en la seccion de ${name}`);
    };
        

    return (
        <div className="content">
            <button className="boton" onClick={handleClick} >{name}
            <Link to={link}></Link>
            </button>
        </div>
    );
    
}