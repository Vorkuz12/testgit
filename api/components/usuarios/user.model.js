'use strict';

let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    tipo :{type : String, required : true},
    cedula : {type : String, required : true},
    nombreCompleto : {type : String, required : true},
    fechaNacimiento : {type : String, required : true},
    edad : { type: Number },
    /*sexo : {type : String, required : true},*/
    correo: { type: String, required: true, unique:true },
    contrasenna: {type:String, required : true},
    contrasennaconfir: {type:String, required : true},
    foto : {type : String, required : true},
    estado : {type : String, required : true}
});

module.exports =  mongoose.model('Cliente', userSchema);