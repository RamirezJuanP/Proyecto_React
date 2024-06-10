import React from 'react'
import Item from "./Item"
import ItemCount from './ItemCount'

const ItemList = ({productos}) => {
    return (
        <div>
            {productos.map((item) => (
                <div key={item.id} style={{width:"30rem", margin: "2rem", border:"1rem solid"}}>
                    <Item producto={item} />
                    <ItemCount stock={item.stock} initial={1} onAdd={(count) => console.log(`Agregados ${count} items al carrito`)}/>
                </div>
    ))}
        </div>
    )
}

export default ItemList
