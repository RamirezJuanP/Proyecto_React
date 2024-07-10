import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import {getOneProductPerCategory, getUniqueCategories} from '../Helpers/Helpers'

function Home() {

    const [products, setProducts] = useState([]);
    const categories = getUniqueCategories();
    
    useEffect (() => {
        getOneProductPerCategory(categories).then(result => {
            setProducts(result);
        }); 
    }, [categories])


    return (
        <main>
            <section className='section-1'>
                <h1>Hola</h1>
                {products.map(product => (
                    <div key={product.id} className="card">
                        <img style={{width:"20rem", height:"27rem", borderRadius:"10px"}} src={product.link_imagen} alt="foto"/>
                        <p>{product.categoria}</p>
                        <button><Link to={`/category/${product.categoria}`}>Ver más</Link>
                        </button>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Home
