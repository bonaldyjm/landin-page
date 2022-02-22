import React from 'react';
import './main.css';


function Main () {
    return (
        <div id='contenedor'>
            <div>
            <span>PERRO</span> 
            <input className='input-perro' type="radio"></input>
            </div>
            <div>
            <span className='input-gato'>GATO</span>
            <input type="radio"></input>
            </div>
        <input className='input-nombre'></input>
        <span className='span-nombre'>Nombre</span>
        <input className='input-raza'></input>
        <span className='span-raza'>Raza</span>
        <input className='input-fecha' type="date"></input>
        <span className='span-fecha'>Fecha de Nacimiento de tu mascota</span>
        <button type="submit">siguiente</button>
        
<h1 className='h1-info'>Información de tu mascota </h1>
</div>
    );
}


export default Main;