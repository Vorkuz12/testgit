const botonRegistrar = document.querySelector('#regis');
const inputNombre = document.querySelector('#txtNombre');
const inputmensaje = document.querySelector('#txtMensaje');
const inputLongitud = document.querySelector('#longitud');
const inputLatitud = document.querySelector('#latitud');
const selectProvincias = document.querySelector('#sltProvincias');
const selectCantones = document.querySelector('#sltCantones');
const selectDistritos = document.querySelector('#sltDistritos');


botonRegistrar.addEventListener('click', obtenerDatos);
let provincias = obtener_provincias();
let cantones = obtener_cantones();
let distritos = obtener_distritos();

function llenarProvincias() {
    for (let i = 0; i < provincias.length; i++) {
        let opcion = new Option(provincias[i].nombre);
        opcion.value = provincias[i].idProvincia;
        selectProvincias.appendChild(opcion);
    }
};

function llenarCantones(pidProvincia) {
    selectCantones.innerHTML = '';
    selectCantones.appendChild(new Option('--Seleccione un cantón--'));

    for (let i = 0; i < cantones.length; i++) {
        if (pidProvincia == cantones[i].Provincia_idProvincia) {
            let opcion = new Option(cantones[i].nombre);
            opcion.value = cantones[i].idCanton;
            selectCantones.appendChild(opcion);
        }
    }
};

function llenarDistritos(pidCanton) {
    selectDistritos.innerHTML = '';
    selectDistritos.appendChild(new Option('--Seleccione un distrito--'));

    for (let i = 0; i < distritos.length; i++) {
        if (pidCanton == distritos[i].Canton_idCanton){
            let opcion = new Option(distritos[i].nombre);
            opcion.value = distritos[i].idDistrito;
            selectDistritos.appendChild(opcion);
        }    
    }

};


llenarProvincias();

selectProvincias.addEventListener('change', function(){
    llenarCantones(this.value); //this.value es el valor de la opción de provincia seleccionada
});

selectCantones.addEventListener('change', function(){
    llenarDistritos(this.value); //this.value es el valor de la opción de cantones seleccionada
});


function obtenerDatos(){

   
    let nombre = inputNombre.value;
    let provincia = selectProvincias.value;
    let cantones = selectCantones.value;
    let distrito = selectDistritos.value;
    let  direccion = inputmensaje.value;  
    let longitud  = inputLongitud.value;
    let latitud = inputLatitud.value;

    let error = validar(nombre, provincia, cantones, distrito, direccion,longitud,latitud);

   
    if(error==true){
        swal({
            type: 'success',
            title: 'Mensaje enviado',
            text: 'Hotel no registrado'
        });
    }else{

        let respuesta = registrar_sucursal(nombre, provincia, cantones, distrito, direccion,longitud,latitud)
        if(respuesta.success == true){
            swal({
                type: 'success',
                title: 'Mensaje enviado',
                text: ' Hotel Registrado',
                tex: respuesta.msg,
                confirmButtonText: 'Entendido'
            });
            redireccionarPaginaActividad();

            function redireccionarPaginaActividad() {
            window.location = "hoteles.html";
            } 
        }else{
            swal({
                type: 'warning',
                title: 'Datos incorrectos',
                text: respuesta.msg,
                confirmButtonText: 'Entendido'
            });

        }
    }
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
    selectProvincias.classList.add('errorInput');
    error = true;
} else {
    selectProvincias.classList.remove('errorInput');
}
//validar lugares
if (cantones == '' || cantones == 0) {
    selectCantones.classList.add('errorInput');
    error = true;
} else {
    selectCantones.classList.remove('errorInput');
}
//validar distritos
if (distrito == '' || distrito == 0) {
    selectDistritos.classList.add('errorInput');
    error = true;
} else {
    selectDistritos.classList.remove('errorInput');
}
/logitud/
    if(longitud== ''|| longitud.length==0){
        
        document.querySelector('#map').style.border = '1px solid red' ;
        error= true;
    }else{
      
        document.querySelector('#map').style.border = 'none';
    }  
    /latitud/
    if(latitud== ''|| latitud.length==0){
        
        document.querySelector('#map').style.border = '1px solid red' ;
        error= true;
    }else{
       
        document.querySelector('#map').style.border = 'none';
    } 
    return error;

}

   
    


    
 
  
  
  
  
  
  
 