'use strict';

const enlaces = document.querySelectorAll('#nav a');
const botonCerrarSesion = document.querySelector('#btnCerrar')
let conectado = sessionStorage.getItem('conectado');
let tipo = sessionStorage.getItem('tipo');

botonCerrarSesion.addEventListener('click', cerrarSesion);

if(conectado){
    switch(tipo){

        case 'Administrador':
        enlaces[0].classList.add('ocultar');
        
     
       
        break;
    
        case 'Cliente':
     
        enlaces[1].classList.add('ocultar');
        enlaces[2].classList.add('ocultar');
     
        break;

        
    
    }
}else{
    window.location.href = 'inicio_sesion.html';
}

function cerrarSesion(){
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = 'inicio_sesion.html';
};

