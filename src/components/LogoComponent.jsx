import './LogoComponent.css'

export default function LogoComponent(){

    return(
        <a className="logo" href=''>
            <img height={50} width={42} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Boca_Juniors_logo18.svg/865px-Boca_Juniors_logo18.svg.png"></img>
            <h1 className='title'>Boca <br/>Shop</h1>
        </a>
    );
}