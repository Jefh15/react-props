import React from 'react'


// {propiedad} ---> props.persona
const Texto = ({ texto }) => {

    // console.log(texto);

    return (
        <div>
            <p>{texto}</p>
        </div>
    )
}

export default Texto