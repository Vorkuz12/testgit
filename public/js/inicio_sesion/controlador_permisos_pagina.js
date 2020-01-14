'use strict';


let conectado = sessionStorage.getItem('conectado');
let tipo = sessionStorage.getItem('tipo');



if(conectado){
    switch(tipo){

        case 'Administrador':
       alert('Usted no puede ver esto')
       window.location.href="hoteles.html"
        
     
       
        break;
    
      
       
     
        break;

        
    
    }
}else{
    window.location.href = 'inicio_sesion.html';
}
