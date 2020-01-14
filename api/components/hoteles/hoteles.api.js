'use strict';
const hotelesModel = require('./hoteles.model');

module.exports.registrarSucursal = function (req, res) {
 
    let nuevoHotel = new hotelesModel({
       
        
        nombre: req.body.nombre,
        provincia: req.body.provincia,
        cantones: req.body.cantones,
        distrito: req.body.distrito,
        direccion: req.body.direccion,
        longitud : req.body.longitud,
        latitud : req.body.latitud,
        promedio: req.body.promedio,
        estado : 'Habilitado'

    });

    nuevoHotel.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar la sucursal, ocurrió un error ' + error});
        } else {
            res.json({ success: true, msg: 'La sucursal se registró con éxito' });
            
        }
    });
};

module.exports.listar_sucursales = function (req, res) {
   hotelesModel.find().sort(({nombre: 'asc'})).then(
        function (hoteles) {
            res.send(hoteles);
        }
    );

};

module.exports.buscar_sucursales = function(req, res){
    hotelesModel.findOne({_id : req.body.id}).then(
        function(hoteles){
            if(hoteles){
                res.send(hoteles);
            }else{
                res.send('No se encontró el hotel');
            }
            
        }
    )
};
module.exports.actualizar_sucursal= function(req, res){
    hotelesModel.findByIdAndUpdate(req.body.id, {$set : req.body},
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo el hotel'});
            }else{
                res.json({success: true ,msg: 'El hotel se actualizó con éxito'}); 
            }
        }
    )
};

module.exports.borrar_sucursal = function(req, res){
    hotelesModel.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo borrar el hotel'});
            }else{
                res.json({success: true ,msg: 'El hotel se borro con éxito'}); 
            }
        }
    )
};

module.exports.deshabilitar_sucursal = function(req, res){
    hotelesModel.findByIdAndUpdate(req.body.id, {$set: { 
        estado: 'Deshabilitado'
      }},
      function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo deshabilitar el hotel'});
            }else{
                res.json({success: true ,msg: 'El hotel se deshabilitó con éxito'}); 
            }
        }
    )
};

module.exports.habilitar_sucursal = function(req, res){
    hotelesModel.findByIdAndUpdate(req.body.id, {$set: { 
        estado: 'Habilitado'
      }},
      function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo habilitar el hotel'});
            }else{
                res.json({success: true ,msg: 'El hotel se habilito  con éxito'}); 
            }
        }
    )
};

module.exports.actualizar_calificacion = function(req, res){
    hotelesModel.findByIdAndUpdate(req.body.id, {$set : req.body},
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo calificar'});
            }else{
                res.json({success: true ,msg: ' Se calificó con exito'}); 
            }
        }
    )
};




