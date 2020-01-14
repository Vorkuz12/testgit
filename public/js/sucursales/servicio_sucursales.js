'use strict'
function registrar_sucursal(nombre, provincia, cantones, distrito, direccion, longitud, latitud) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_sucursales',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {


            nombre: nombre,
            provincia: provincia,
            cantones: cantones,
            distrito: distrito,
            direccion: direccion,
            longitud: longitud,
            latitud: latitud,
            promedio_calificacion: 0,
            suma_calificaciones: 0,
            total_calificaciones: 0,

        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
};

function obtenerSucursales() {
    let listaSucursales = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_sucursales',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function (response) {
        listaSucursales = response;
    });

    peticion.fail(function () {

    });

    return listaSucursales;
};


function buscar_sucursal(id_sucursal) {
    let respuesta = false;
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/buscar_sucursales',
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            id: id_sucursal

        }
    });

    //Mediante el id de la actividad busco la activadad  para que nos devuelva 
    peticion.done(function (response) {
        respuesta = response;

        localStorage.setItem('nombre', response.nombre);
        localStorage.setItem('longitud', response.longitud);
        localStorage.setItem('latitud', response.latitud);
        localStorage.setItem('direccion', response.direccion);
        localStorage.setItem('provincia', response.provincia);
        localStorage.setItem('cantones', response.cantones);
        localStorage.setItem('distrito', response.distrito);

    });

    peticion.fail(function () {

    });

    return respuesta;

};

function actualizar_sucursal(id_sucursal, nombre, provincia, cantones, distrito, direccion, longitud, latitud) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/actualizar_sucursal',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            id: id_sucursal,
            nombre: nombre,
            provincia: provincia,
            cantones: cantones,
            distrito: distrito,
            direccion: direccion,
            longitud: longitud,
            latitud: latitud,


        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function () {
        respuesta = response;
    });

    return respuesta;

};
function borrar_sucursal(id_sucursal) {
    $.ajax({
        url: 'http://localhost:4000/api/borrar_sucursal',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id: id_sucursal
        },
        beforeSend: function beforeSend() {

        },
        success: function success(response) {

        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
};
function deshabilitar_sucursal(id_sucursal) {
    $.ajax({
        url: 'http://localhost:4000/api/deshabilitar_sucursal',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id: id_sucursal
        },
        beforeSend: function beforeSend() {

        },
        success: function success(response) {

        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
};

function habilitar_sucursal(id_sucursal) {
    $.ajax({
        url: 'http://localhost:4000/api/habilitar_sucursal',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id: id_sucursal
        },
        beforeSend: function beforeSend() {

        },
        success: function success(response) {

        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
};

function agregarIndustria(industriaid) {
    let respuesta = '';
    let peticion = $.ajax({
        //agregar_industria es lo que puse en el route 
        url: 'http://localhost:4000/api/agregar_industria',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

            _id: industriaid,

        }
    });
    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function () {

    });

    return respuesta;
}


function agregarIndustria(industriaid) {
    let respuesta = '';
    let peticion = $.ajax({
        //agregar_industria es lo que puse en el route 
        url: 'http://localhost:4000/api/agregar_industria',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

            _id: industriaid,

        }
    });
    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function () {

    });

    return respuesta;
}
function agregarLibro(pidLibro, pcantidad, psucursal) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/agregar_libro',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            idLibro: pidLibro,
            cantidad: pcantidad,
            sucursal: psucursal
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
};

/* 
 function obtenerReservas(){
   let listaReservas = [];
   let peticion = $.ajax({
       url: 'http://localhost:4000/api/listar_reservas',
       type: 'get',
       contentType: 'application/x-www-form-urlencoded; charset=utf-8',
       dataType : 'json',
       async:false,
       data:{
       }
     });
   
     peticion.done(function(response){
       listaReservas = response;
     });
   
     peticion.fail(function(response){
       listaReservas = response;
     });
 
   return listaReservas;
 };
 */

function actualizarEstrellas(id_sucursal, sumaCalificaciones, añadirCalificacion) {
    $.ajax({
        url: 'http://localhost:4000/api/modificar_calificacion',
        method: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {
            id: id_sucursal,
            suma_calificaciones: sumaCalificaciones,
            total_calificaciones: añadirCalificacion,
        },
        beforeSend: function beforeSend() {

        },
        success: function success(response) {

        },
        error: function error(_error) {
            console.log("Request fail error:" + _error);
        }
    });
};
