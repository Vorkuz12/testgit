'use strict';
let mongoose = require('mongoose');

let hotelesSchema = new mongoose.Schema({
   
    nombre: { type: String, unique: true, required: true },
    provincia: {type: String, unique : false, required : true},
    cantones: {type: String, unique : false, required : true},
    distrito: {type: String, unique : false, required : true},
    direccion: { type: String, required: true },
    longitud : {type: String, unique : false, required : true},
    latitud : {type: String, unique : false, required : true},
    estado : {type : String, required : true},
    promedio: {type: Number},
    
  
});

module.exports = mongoose.model('Hotele', hotelesSchema);