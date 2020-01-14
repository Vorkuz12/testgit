'use strict';

function obtener_provincias(){
    let provincias = [];
    let peticion = $.ajax({
        url: 'http://costa-rica-places.herokuapp.com/api/provinces',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false
      });
    
      peticion.done(function(response){
        provincias = response;
      });
    
      peticion.fail(function(response){
        provincias = response;
      });

     return provincias; 
};

function obtener_cantones(){
    let cantones = [];
    let peticion = $.ajax({
        url: 'http://costa-rica-places.herokuapp.com/api/cantons',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false
      });
    
      peticion.done(function(response){
        cantones = response;
      });
    
      peticion.fail(function(response){
        cantones = response;
      });

     return cantones; 
};

function obtener_distritos(){
    let distritos = [];
    let peticion = $.ajax({
        url: 'http://costa-rica-places.herokuapp.com/api/districts',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false
      });
    
      peticion.done(function(response){
        distritos = response;
      });
    
      peticion.fail(function(response){
        distritos = response;
      });

     return distritos; 
};