import React from 'react';
import './header.css';
import RUS2 from './assets/img/RUS2.png'

function Header() {
    return (
        <div id='container'>
        <img src={RUS2} className={"header-logo"}></img>
        
        <h1 className='header-titulo'> Inicio </h1>
        </div>
    );
}






export default Header;