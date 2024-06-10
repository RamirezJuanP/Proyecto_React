import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import productosJson from "../../productos.json";
import ItemList from './ItemList';

function asyncMock(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryId === undefined) {
                resolve(productosJson);
            }
            else {
                const productosFiltrados = productosJson.filter((item) => {
                    return item.categoria===categoryId
                })
                resolve(productosFiltrados)
            }
        }, 2000)
    })
}


function ItemListContainer() {

    const { categoryId } = useParams()
    console.log(categoryId)

    const [productos, setProductos] = useState([]);
    console.log(productos)

    useEffect(() => {
        asyncMock(categoryId).then((res) => setProductos(res));
    }, [categoryId]);

    return (
        <main>
            <section className="item-list-container">                
                <ItemList productos={productos} />
            </section>
        </main>
    )
}



export default ItemListContainer
