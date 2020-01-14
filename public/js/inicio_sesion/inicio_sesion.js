'use strict';

const botonEnviar = document.querySelector('#inicio');
const inputUsuario = document.querySelector('#correo');
const inputPassword = document.querySelector('#txtPassword');



botonEnviar.addEventListener('click', obtenerDatos);

async function obtenerDatos (){

    let correo = inputUsuario.value;
    let password = inputPassword.value;
    let usuarioAceptado = false;
    

    let estadoError = validar(correo, password);
    
    let tipo; 
    let estado

    if(estadoError == false){

        usuarioAceptado =  validarCredenciales(correo, password);
        
        tipo = sessionStorage.getItem('tipo');
        estado = sessionStorage.getItem('estado');
        console.log(tipo);

        if(usuarioAceptado.success){
            if(estado == 'Habilitado'){
            switch(tipo){
                case 'Administrador':
                window.location.href = 'hoteles.html';
                break;
                
                case 'Cliente':
                window.location.href = 'hoteles_cliente.html';
                break;

            }
            }else{
                swal.fire({
                    type: 'warning',
                    title: 'Cuenta deshabilitada',
                    text: 'Se ha deshabilitado esta cuenta'
                });
            }
        }else{
            swal.fire({
                type: 'warning',
                title: 'Usuario no encontrado',
                text: 'El usuario no se encuentra registrado dentro de la aplicación'
            });
        }
    }else{
         swal.fire({
            type: 'warning',
            title: 'Datos incorrectos',
            text: 'No se pudo iniciar sesión, por favor revise los datos'
        });
    }
   
};



function validar(pusuario, ppassword){

    let error = false;

    if(pusuario == '' || pusuario == 0){
        inputUsuario.classList.add('errorInput');
        error = true;
    }else{
        inputUsuario.classList.remove('errorInput');
    }

    if(ppassword == '' || ppassword == 0){
        inputPassword.classList.add('errorInput');
        error = true;
    }else{
        inputPassword.classList.remove('errorInput');
    }

    return error;
}
