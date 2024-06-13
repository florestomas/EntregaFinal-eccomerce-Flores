import './LogoComponent.css'
import { Link } from 'react-router-dom';
export default function LogoComponent(){

    return(
        <Link to='/'>
            <div className="logo">
                <img height={50} width={42} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Boca_Juniors_logo18.svg/865px-Boca_Juniors_logo18.svg.png"></img>
                <h1 className='title'>Boca <br/>Entradas</h1>
            </div>
        </Link>
    );
}