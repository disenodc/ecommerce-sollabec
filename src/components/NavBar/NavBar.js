import './NavBar.css'

import CartWidget from '../CartWidget';
import React from 'react';

export const NavBar = () => {
    return (

        <div className="NavBar">
            <ul className="App-menu">
              <li className="menu-link">
                Inicio
              </li>
              <li className="menu-link">
                Nosotros
              </li>
              <li className="menu-link">
                Productos
              </li>
              <li className="menu-link">
                Contactos
              </li>
            </ul>
            <CartWidget />
        </div>
    );
}

