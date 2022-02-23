import React from 'react';
import './main.css';
import perrosin from './assets/img/perrosin.png'
import alfin from './assets/img/alfin.png'


function Main () {
    return (
        <div id='contenedor'>
            <div className='caja-perro'> 
            <img src={perrosin} className='imagen-animal'></img>
            <input className='input-animal' type="radio"></input>
            <span className='span-animal'>PERRO</span>
            </div>
            <div className='caja-gato'>
            <img src={alfin} className='imagen-animal'></img>
            <input className='input-animal' type="radio"></input> 
            <span className='span-animal'>GATO</span>
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