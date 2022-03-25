import React from 'react';
import './main.css';


function Main () {
    return (
     <section id='container-main'>
         <div className='box-pet-1' id="box-pet-1">
        <img src='./assets/img/logo-chico-perro.svg' className='logo-mascota-selet'/>
         <input className='selet-input' type="radio"></input> <span className='span-mascota'> PERRO</span>
         </div>
         <div className='box-pet-2' id="box-pet-2">
         <img src='./assets/img/logo-chico-gato.svg' className='logo-mascota-selet'/>
         <input className='selet-input' type="radio"></input> <span className='span-mascota'> GATO</span>
         </div>
         <p className='p-main-info'>información de tu mascota</p>
         <label className='label-nombre'>Nombre</label> <input className='input-nombre' type='text'></input>
         <label className='label-raza'>Raza</label> <input className='input-raza' type='text'></input>
         <label className='label-fecha'>Fecha de nacimiento</label> <input className='input-fecha' type='date'></input>
         <button type="submit" className="btn-main">Siguiente</button>
     </section>
    );
}


export default Main;