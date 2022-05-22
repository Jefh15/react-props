import React from 'react'
import Persona from './Persona'
import Texto from './Texto'


// como tengo dos props que paso como argumentos
const CuerpoComentario = ({ persona, texto }) => {

    // console.log(props);

    return (
        <div className="media-body">
            <Persona persona={persona} />
            <Texto texto={texto} />
        </div>
    )
}

export default CuerpoComentario