'use strict'
let id_sucursal = localStorage.getItem('Sucursal');
const botonActualizar = document.querySelector('#act');
const inputNombre = document.querySelector('#txtNombre');
const inputmensaje = document.querySelector('#txtMensaje');
const inputLongitud = document.querySelector('#longitud');
const inputLatitud = document.querySelector('#latitud');

const selectProvincia = document.querySelector('#sltProvincias');
const selectCanton = document.querySelector('#sltCantones');
const selectDistrito = document.querySelector('#sltDistritos');


botonActualizar.addEventListener('click', actualizar);

let opcionesProvincia = selectProvincia.options;
let opcionesCanton = selectCanton.options;
let opcionesDistrito = selectDistrito.options;

if (id_sucursal) {
    mostrarDatos();
}



function mostrarDatos() {
    let sucursal = buscar_sucursal(id_sucursal)

    inputNombre.value = sucursal['nombre'];
    inputmensaje.value = sucursal['direccion'];
    inputLongitud.value = sucursal['longitud'];
    inputLatitud.value = sucursal['latitud'];

    for(let i = 0; i < opcionesProvincia.length; i++){
        if(sucursal['provincia'] == opcionesProvincia[i].value){
            selectProvincia.selectedIndex = i;
            llenarCantones(sucursal['provincia']);
        }
    }

    for(let i = 0; i < opcionesCanton.length; i++){
        if(sucursal['cantones'] == opcionesCanton[i].value){
            selectCanton.selectedIndex = i;
            llenarDistritos(sucursal['cantones']);
            
        }
    }

    for(let i = 0; i < opcionesDistrito.length; i++){
        if(sucursal['distrito'] == opcionesDistrito[i].value){
            selectDistrito.selectedIndex = i;
        }
    }
};

function actualizar() {

    let nombre = inputNombre.value;
    let direccion = inputmensaje.value;
    let longitud = inputLongitud.value;
    let latitud = inputLatitud.value
    let provincia = selectProvincia.value;
    let cantones = selectCanton.value;
    let distrito = selectDistrito.value;

    let error = validar(nombre, provincia, cantones, distrito, direccion, longitud, latitud);
    if (error == true) {
        swal({
            title: 'Modificación incorrecta',
            text: 'No se pudo modificar el hotel, revise los campos en verde',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });

    } else {
        swal({
            title: '¿Está  seguro que desea modificar este hotel?',
            type: 'warning',
            text: "La información del hotel se modificará",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Modificar'
        }).then((result) => {
            //si el resultado es true se ejecuta la funcion actualizar y se carga la lista con la nueva informacion
            if (result.value) {
                // se envian los datos modificados a la funcion actualizarPatrocinador
                actualizar_sucursal(id_sucursal, nombre, provincia, cantones, distrito, direccion, longitud, latitud);

                window.location.href = 'hoteles.html'
            };
        });
    };
};
function validar(nombre, provincia, cantones, distrito, direccion,longitud,latitud){

    let error = false
    
    if(nombre=='' || nombre.length==0){
        inputNombre.classList.add('errorInput');
        error = true;
    }else{
        inputNombre.classList.remove('errorInput');
    }
    if(direccion=='' || direccion.length==0){
        inputmensaje.classList.add('errorInput');
        error = true;
    }else{
        inputmensaje.classList.remove('errorInput');
    }
    
    
    if (provincia == '' || provincias == 0) {
        selectProvincia.classList.add('errorInput');
        error = true;
    } else {
        selectProvincia.classList.remove('errorInput');
    }
    //validar lugares
    if (cantones == '' || cantones == 0) {
        selectCanton.classList.add('errorInput');
        error = true;
    } else {
        selectCanton.classList.remove('errorInput');
    }
    //validar distritos
    if (distrito == '' || distrito == 0) {
        selectDistrito.classList.add('errorInput');
        error = true;
    } else {
        selectDistrito.classList.remove('errorInput');
    }
    /logitud/
    if(longitud== ''|| longitud.length==0){
        //mapa.style.border='1.5px solid red';;
        document.querySelector('#map').style.border = '1.5px solid red' ;
        error= true;
    }else{
        //mapa.classList.remove('errorInput');
        document.querySelector('#map').style.border = 'none';
    }  
    /latitud/
    if(latitud== ''|| latitud.length==0){
        //mapa.style.border='1.5px solid red';;
        document.querySelector('#map').style.border = '1.5px solid red' ;
        error= true;
    }else{
        //mapa.classList.remove('errorInput');
        document.querySelector('#map').style.border = 'none';
    }  
        return error;
    
    }
    
       
        





       
        








