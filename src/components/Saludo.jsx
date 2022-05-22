import React from 'react'


//(props) ---> recibo los props que viene de otro componente
// {propiedad, propiedad}
const Saludo = ({ persona, edad }) => {


    // console.log(props)
    // console.log(persona);
    // console.log(edad);

    return (
        <div>
            <h2>Saludando a {persona}</h2>
            <p>Edad: {edad}</p>
        </div>
    )
}

export default Saludo