'use strict';

function validarCredenciales(pcorreo, ppassword){
    let respuesta = false;
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/inicio_sesion',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            correo : pcorreo,
            contrasenna :  ppassword
        }
      });
    
      peticion.done(function(response){
        respuesta =  response;
        sessionStorage.setItem('conectado' , response.success);
        sessionStorage.setItem('tipo' , response.tipo);
        sessionStorage.setItem('idUsuario', response.id);
        sessionStorage.setItem('estado', response.estado);
      });
    
      peticion.fail(function(){
       
      });

      return respuesta;

};