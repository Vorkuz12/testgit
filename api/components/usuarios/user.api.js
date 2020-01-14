'use strict';
const nodeMailer = require('nodemailer');
const userModel = require('./user.model');

const transporter = nodeMailer.createTransport({
    service : 'gmail',
    auth:{
        user : 'gvargasd@ucenfotec.ac.cr',
        pass: 'lobocafe'
    }
});

module.exports.registroUser = function(req, res){

    let nuevoUsuario = new userModel({
        tipo: req.body.tipo,
        cedula : req.body.cedula,
        nombreCompleto : req.body.nombreCompleto,
        fechaNacimiento : req.body.fechaNacimiento,
        edad : req.body.edad,
        correo : req.body.correo,
        /*sexo : req.body.sexo,*/
        contrasenna : req.body.contrasenna,
        contrasennaconfir: req.body.contrasennaconfir,
        foto : req.body.foto,   
        estado : 'Habilitado'
    });

   
    
    //Poner en si https://myaccount.google.com/lesssecureapps
 
    

    nuevoUsuario.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar el usuario, ocurrió el siguiente error '+error});
        }else{
            let mailOptions = {
                from : 'gvargasd@ucenfotec.ac.cr',
                to : nuevoUsuario.correo,
                subject : 'Usted se ha registrado correctamente',
                html: `<html>
                <head>
                  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                  <style>
                  .wrapper{
                    background : #2ecc71;
                    font-family: 'Roboto', sans-serif;
                  }
                  .container{
                    margin: 0 auto;
                    background: #fff;
                    width: 500px;
                    text-align: center;
                    padding: 10px;
                  }
                  .boton{
                    background: #ff7675;
                    color: #fff;
                    display: block;
                    padding: 15px;
                    text-decoration: none;
                    width: 50%;
                    margin: 0 auto;
                  }
               </style>
                </head>
                <body>
                  <div class="container">
                    <h1>  ¡Bienvenido!  </h1>
                  <h2>Observa nuestra cadena de hoteles y califícalos</h2>
                  
                  <p>Saludos ${nuevoUsuario.nombreCompleto} le agradecemos por visitar la aplicación</p>
                  <p>El correo electrónico asociado es: ${nuevoUsuario.correo}</p>
                  <p>Para ingresar visite el siguiente<p> 
                    <a href="http://localhost:3000/public/inicio_sesion.html" class="boton">Hoteles</a>
                  </div>
                  
                </body>
                
              </html>`  
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }else{
                    console.log('Correo enviado ' + info.response);
                }
            })
            res.json({success : true, msg: 'El usuario se registró con éxito'}); 
        }
    }
);
};
     

module.exports.listaUsers = function(req, res){
    userModel.find().sort({nombre : 'asc'}).then(
        function(usuario){
            res.send(usuario);
        });
};

module.exports.credenciales = function (req, res){
    userModel.findOne({correo : req.body.correo}).then(
        function(usuario){
            if(usuario){
                if(usuario.contrasenna == req.body.contrasenna){
                    res.json({
                        success : true,
                        tipo: usuario.tipo,
                        id : usuario._id,
                        estado : usuario.estado
                    });
                }else{
                    res.send(false);
                }
            }else{
                res.json({
                    success : false,
                    msg : 'No hay usuario registrado.¡Registrese!'
                });
            }
        }
    )
};

module.exports.buscaruser = function(req, res){
    userModel.findOne({_id : req.body.id}).then(
        function(usuario){
            if(usuario){
                res.send(usuario);
            }else{
                res.send('No se encontró el usuario');
            }
            
        }
    )
};

module.exports.actualizarUser = function(req, res){
    userModel.findByIdAndUpdate(req.body.id, {$set : req.body},
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo actualizar el usuario'});
            }else{
                res.json({success: true ,msg: 'El usuario se actualizó con éxito'}); 
            }
        }
    )
};

module.exports.borrarUser = function(req, res){
    userModel.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar el usuario'});
            }else{
                res.json({success: true ,msg: 'El usuario se eliminó con éxito'}); 
            }
        }
    )
};

module.exports.deshabilitarUser = function(req, res){
    userModel.findByIdAndUpdate(req.body.id, {$set : req.body},
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo deshabilitar el usuario'});
            }else{
                res.json({success: true ,msg: 'El usuario se deshabilitó con éxito'}); 
            }
        }
    )
};