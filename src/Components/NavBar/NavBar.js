import CartWidget from '../CartWidget/CartWidget';

import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

import './NavBar.css';  

function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };




    return (
        <header>
            <Link to="/">
                <img src="img/16c6d8994d0a93548ca86606d20fffc0.jpg" alt="Home"/> 
            </Link>                
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contactanos">Contactanos</Link>
                <div className="dropdown">
                    <button onClick={toggleDropdown} className='dropdown-toggle'>
                    <Link to="/catalogo">Catalogo</Link>
                    </button>
                    {isDropdownOpen && (
                        <ul className='dropdown-menu'>
                            <li><NavLink to="/catalogo/Tradicional" >Tradicionales</NavLink></li>
                            <li><NavLink to="/catalogo/Refrigeradas" >Refrigeradas</NavLink></li>
                            <li><NavLink to="/catalogo/Postres" >Postres</NavLink></li>
                            <li><NavLink to="/catalogo/Tortas Personalizadas" >Personalizadas</NavLink></li>
                        </ul>
                    )}
                </div>
            </nav>
            <Link>
                <CartWidget/>
            </Link>
        </header>
    );
}



export default NavBar;