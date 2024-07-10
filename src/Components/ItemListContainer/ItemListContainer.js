import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from './ItemList';

import { asyncMock } from '../Helpers/Helpers';



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
