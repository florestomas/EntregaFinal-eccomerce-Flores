import './MenuLinksComponent.css'

export default function MenuLinks ({ name, link}) {
    
    const handleClick = () => {
        console.log(`Estas en la seccion de ${name}`);
    };
        

    return (
        <div className="content">
            <button className="boton" onClick={handleClick} >{name}</button>
        </div>
    );
    
}