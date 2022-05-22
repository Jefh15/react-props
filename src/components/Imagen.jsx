import React from 'react'

// recibo las props de otra manera
// {urlImagen} --> de manera directa para no escribir props
const Imagen = ({ urlImagen }) => {

    // console.log(props);

    return (
        <div>
            <img
                className="align-self-start mr-3"
                src={urlImagen}
                alt='imagen' />
        </div>
    )
}

export default Imagen