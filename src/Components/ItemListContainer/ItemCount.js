import React, { useState } from "react";

function ItemCount ({stock, initial, onAdd}){
    const [contador, setContador] = useState(initial);
    
    const agregar = () =>{
        if (stock > contador) {
            setContador(contador+1)
        }
    }

    const restar = () =>{
        if (contador > 0 && stock > 1){
            setContador (contador-1)
        }
    }

    const handleClick = () =>{
        if (stock > 0) {
            onAdd(contador)
        }
    }

    return (
        <div>
            <button onClick= {agregar}> + </button>
            <span>{contador}</span>
            <button onClick= {restar}> - </button>
        {stock > 0 ? (
            <button onClick= {handleClick}> Agregar al carrito </button>
        ) : (
            <span> No hay stock disponible </span>

        )}
        </div>
    )
}

export default ItemCount