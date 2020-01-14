'use strict';

const botonRegistrar = document.querySelector('#btnButton');
const inputIdentificacion = document.querySelector('#txtIdentificacion');
const inputPrimerNombre = document.querySelector('#txtPrimerNom');

const inputCorreo = document.querySelector('#txtCorreo');
const inputFechaNacimiento = document.querySelector('#FechaNacimiento');
const inputEdad = document.querySelector('#edad');
const inputPassword = document.querySelector('#txtPassword');
const inputConfPassword = document.querySelector('#txtConfPassword');

const imagen = document.querySelector('#imagen_preview');
const divImagen = document.querySelector('#imagen');

botonRegistrar.addEventListener('click', obtenerDatos);
inputFechaNacimiento.addEventListener('change', calcularEdad);



function obtenerDatos() {

    let tipo = 'Cliente';
    let cedula = inputIdentificacion.value;
    let nombreCompleto = inputPrimerNombre.value;
    let correo = inputCorreo.value;
    let fechaNacimiento = new Date(inputFechaNacimiento.value);
    let edad = Number(inputEdad.value);

    let contrasenna = inputPassword.value;
    let contrasennaconfir = inputConfPassword.value;

    let foto = imagen.src;

    let estadoError = validar(cedula, nombreCompleto, fechaNacimiento, edad, correo, contrasenna, contrasennaconfir, foto);


    if (estadoError == false || foto == 'http://localhost:3000/public/imgs/Profile-Placeholder.jpg') {
        swal.fire({
            type: 'success',
            title: 'Mensaje enviado',
            text: 'Usuario no registrado'
        });
    } else {

        let respuesta = registrarUser(tipo, cedula, nombreCompleto, fechaNacimiento, edad, correo, contrasenna, contrasennaconfir, foto)
        if (respuesta.success == false) {

            swal.fire({
                type: 'success',
                title: 'Usuario registrado',
                confirmButtonText: 'Entendido',
                timer: 2000,
            }).then(function () {
                redireccionarPaginaActividad();

            }

            );

        }
    }
}


function validar(cedula, nombreCompleto, fechaNacimiento, edad, correo, contrasenna, contrasennaconfir, foto) {
    let error = true;
    let expEdad = /^[0-9]{1,3}$/;

    let expCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



    if (cedula == '' || cedula.length == 0) {
        inputIdentificacion.classList.add('errorInput');
        error = false;
    } else {
        inputIdentificacion.classList.remove('errorInput');
    }

    if (nombreCompleto == '' || nombreCompleto.length == 0 || expCorreo.test(nombreCompleto) == true) {
        inputPrimerNombre.classList.add('errorInput');
        error = false;
    } else {
        inputPrimerNombre.classList.remove('errorInput');
    }



    if (correo == '' || correo.length == 0 || expCorreo.test(correo) == false) {
        inputCorreo.classList.add('errorInput');
        error = false;
    } else {
        inputCorreo.classList.remove('errorInput');
    }

    if (fechaNacimiento > new Date() || fechaNacimiento == 'Invalid Date') {
        inputFechaNacimiento.classList.add('errorInput');
        error = false;
    } else {
        inputFechaNacimiento.classList.remove('errorInput');

    }


    if (contrasenna == '' || contrasenna.length == 0) {
        inputPassword.classList.add('errorInput');
        error = false;
    } else {
        inputPassword.classList.remove('errorInput');
    }

    if (contrasennaconfir == '' || contrasennaconfir != contrasenna) {
        inputConfPassword.classList.add('errorInput');
        error = false;
    } else {
        inputConfPassword.classList.remove('errorInput');
    }



    if (foto == 'http://localhost:3000/public/imgs/Profile-Placeholder.jpg') {
        divImagen.classList.add('errorInput');
        error = false;
    } else {
        divImagen.classList.remove('errorInput');
    }

    if (edad < inputEdad.min || edad > inputEdad.max || expEdad.test(edad) == false) {
        inputEdad.classList.add('errorInput');
        error = false;
    } else {
        inputEdad.classList.remove('errorInput');
    }


    return error;
};

function calcularEdad() {
    let fechaActual = new Date();
    let fechaNacimiento = new Date(inputFechaNacimiento.value);

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    inputEdad.value = edad;


};

function obtenerFecha(fecha) {
    let annio = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate() + 1;

    let fechaNacimiento = [annio + " - " + mes + " - " + dia];

    return fechaNacimiento;
}
function redireccionarPaginaActividad() {
    window.location = "inicio_sesion.html";
}