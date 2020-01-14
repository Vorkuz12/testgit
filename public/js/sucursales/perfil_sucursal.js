

'use strict'
const id_sucursal = localStorage.getItem('Sucursal');


let datosActividad = buscar_sucursal(id_sucursal);


const nombreLugar = datosActividad['nombre'];

const direccion = datosActividad['direccion'];

const provincia =datosActividad['provincia'];
const cantones = datosActividad['cantones'];
const distrito = datosActividad['distrito'];

const latitudActividad = datosActividad['latitud'];
const longitudActividad = datosActividad['longitud'];

informacion();



function informacion(){
    let contenedorPrincipal = document.querySelector('#nombre_actividad');
  


    let nombre = document.createElement('p');
    let hotel = document.createTextNode(nombreLugar);
    nombre.appendChild(hotel);
    contenedorPrincipal.appendChild(nombre);

    let parrafoDireccion = document.createElement('p');
    let textoDireccion= document.createTextNode(direccion);
    parrafoDireccion.appendChild(textoDireccion);
    contenedorPrincipal.appendChild(parrafoDireccion);

   

    
 
}


function initMap(){
    
    let latitud = parseFloat(latitudActividad);
    let longitud = parseFloat(longitudActividad);


    let ubicacionInicial = {lat:  latitud, lng: longitud};
    let mapa = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom : 10,
            center : ubicacionInicial,
        }
    );
    let marker =  new google.maps.Marker(
        {
            position : ubicacionInicial,
            map :  mapa,
            draggable : false
        }
    );
};

