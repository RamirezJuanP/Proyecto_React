import React from 'react'

const Item = ({producto}) => {
    return (
        <div >
            <img style={{width:"20rem", height:"27rem", borderRadius:"10px"}} src={producto.link_imagen}/>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion_resumida}</p>
            <h2>{producto.precio}</h2>
        </div>
    )
}

export default Item
