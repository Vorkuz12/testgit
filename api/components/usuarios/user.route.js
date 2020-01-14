'use strict';

const express = require('express');
const router =  express.Router();
const user = require('./user.api');

router.route('/registro_user')
    .post(function(req, res){
        user.registroUser(req, res);
    });

router.route('/listar_users')
    .get(function(req, res){
        user.listaUsers(req, res);
    });

router.route('/inicio_sesion')
.post(function(req, res){
    user.credenciales(req, res);
});

router.route('/buscar_user')
.post(function(req , res){
    user.buscarUser(req , res);
});


router.route('/borrar_user')
    .post(function(req , res){
        user.borrarUser(req , res);
    });

    router.route('/deshabilitar_user')
    .post(function(req, res){
        user.deshabilitarUser(req, res);
    });

module.exports = router;