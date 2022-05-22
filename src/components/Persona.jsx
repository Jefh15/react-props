import React from 'react'


// {propiedad} ---> recibo de las props la propiedad
const Persona = ({ persona }) => {

    // console.log(persona);

    return (
        <div>
            <h5 className="mt-0">{persona}</h5>
        </div>
    )
}

export default Persona