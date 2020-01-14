'use strict';
const express = require('express');
const router = express.Router();
const hoteles = require('./hoteles.api');

router.route('/registrar_sucursales')
    .post(function (req, res) {
        hoteles.registrarSucursal(req, res);
    });

router.route('/listar_sucursales')
    .get(function (req, res) {
        hoteles.listar_sucursales(req, res);
    });


router.route('/buscar_sucursales')
    .post(function (req, res) {
        hoteles.buscar_sucursales(req, res);
    });
router.route('/actualizar_sucursal')
    .post(function (req, res) {
        hoteles.actualizar_sucursal(req, res);
    });
router.route('/borrar_sucursal')
    .post(function (req, res) {
        hoteles.borrar_sucursal(req, res);
    });

router.route('/deshabilitar_sucursal')
    .post(function (req, res) {
        hoteles.deshabilitar_sucursal(req, res);
    });

router.route('/habilitar_sucursal')
    .post(function (req, res) {
        hoteles.habilitar_sucursal(req, res);
    });




module.exports = router;