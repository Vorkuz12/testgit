'use strict';

function registrarUser(tipo,cedula,nombreCompleto,fechaNacimiento,edad,correo,contrasenna,contrasennaconfir,foto){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registro_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            tipo: tipo,
            cedula: cedula,
            nombreCompleto: nombreCompleto,
            fechaNacimiento: fechaNacimiento,
            edad : edad,
            correo : correo,
            contrasenna :contrasenna,
            contrasennaconfir:contrasennaconfir,
            foto: foto
            
        }
      });
      
    
      peticion.done(function(response){
        respuesta = response;
      });
    
      peticion.fail(function(response){
        respuesta = response;
      });

     return respuesta; 
};

function obtenerUsers(){
  let listaUsers = [];
  let peticion = $.ajax({
      url: 'http://localhost:4000/api/listar_users',
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false,
      data:{
      }
    });
  
    peticion.done(function(response){
        listaUsers = response;
    });
  
    peticion.fail(function(response){
        listaUsers = response;
    });

  return listaUsers;
};

function buscarUsuario(pidUsuario){
  let usuario = [];
  $.ajax({
      url: 'http://localhost:4000/api/buscar_user',
      method: 'POST',
      contentType: "application/x-www-form-urlencoded; charset=utf-8",
      async: false,
      data: {
          id : pidUsuario
      },
     
      success: function success(response) {
        usuario = response;
          
      }
      
  });
  return usuario;
};


function eliminarUsuario(pidUsuario){
  $.ajax({
      url: 'http://localhost:4000/api/borrar_user',
      method: 'POST',
      contentType: "application/x-www-form-urlencoded; charset=utf-8",
      data: {
          id : pidUsuario
      },
      
      error: function error(_error) {
          console.log("Request fail error:" + _error);
      }
  });
};

function deshabilitarUsuario(pid, pestado){
    $.ajax({
        url: 'http://localhost:4000/api/deshabilitar_user',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
          id: pid,
          estado : pestado
        },
   
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
  };