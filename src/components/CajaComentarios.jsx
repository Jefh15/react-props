import React from 'react'
import CuerpoComentario from './CuerpoComentario'
import Imagen from './Imagen'


// {propiedad, propiedad, propiedad} ---> accedo a las props directamente
const CajaComentarios = ({ urlImagen, persona, texto }) => {

    // console.log(props);

    return (
        <div className='media'>
            {/* componente imagen */}
            <Imagen urlImagen={urlImagen} />
            <CuerpoComentario
                persona={persona}
                texto={texto} />
        </div>
    )
}

export default CajaComentarios