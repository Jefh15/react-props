import React from 'react'


//(props) ---> recibo los props que viene de otro componente
const Saludo = (props) => {

    console.log(props)

    return (
        <div>
            <h2>Saludando a {props.persona}</h2>
            <p>Edad: {props.edad}</p>
        </div>
    )
}

export default Saludo