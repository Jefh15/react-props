import React from 'react'
import CajaComentarios from './CajaComentarios';


// recibo los props de mi componente
// {propiedad, propiedad, propiedad} ----> 
const Comentario = ({ persona, urlImagen, texto }) => {

    // console.log(props);

    return (
        // componente que engloba mis caja de comentarios
        <CajaComentarios
            persona={persona}
            urlImagen={urlImagen}
            texto={texto}
        />
    )
}

export default Comentario