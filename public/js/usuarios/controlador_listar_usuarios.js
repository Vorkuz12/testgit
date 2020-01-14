'use strict';


const inputFiltrar = document.querySelector('#inputtext');

let listaUsuarios =obtenerUsers();



mostrarUsuarios();

inputFiltrar.addEventListener('keyup', mostrarUsuarios);


function mostrarUsuarios(){
    let filtro = inputFiltrar.value;

    let tbody = document.querySelector('#tbl_clientes tbody');

    tbody.innerHTML = '';

    for(let i = 0; i < listaUsuarios.length; i++){
        if(listaUsuarios[i]['nombreCompleto'].toLowerCase().includes(filtro.toLowerCase()) || listaUsuarios[i]['fechaNacimiento'].toLowerCase().includes(filtro.toLowerCase()) || listaUsuarios[i]['primerApellido'].toLowerCase().includes(filtro.toLowerCase()) ||listaUsuarios[i]['tipoUsuario'].toLowerCase().includes(filtro.toLowerCase()) ){
            
            if(listaUsuarios[i]['tipo'] != 'Administrador'){

            let fila = tbody.insertRow();

            let celdaNombreUsuario = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaIdentificacion = fila.insertCell();
            let celdaTipo = fila.insertCell();
            let celdaFoto = fila.insertCell();
            let celdaIconos = fila.insertCell();
            let estado = listaUsuarios[i]['estado'];

            celdaNombreUsuario.innerHTML = listaUsuarios[i]['cedula'];
            celdaNombre.innerHTML = listaUsuarios[i]['nombreCompleto'];
            celdaIdentificacion.innerHTML = listaUsuarios[i]['edad'];
            celdaTipo.innerHTML = listaUsuarios[i]['correo'];

            let imagen = document.createElement('img');
            imagen.classList.add('imagenTabla');
            if(listaUsuarios[i]['foto']){
                imagen.src = listaUsuarios[i]['foto'];
            }else{
                imagen.src = 'imgs/placeholder.png';
            }

            let iconoOjo = document.createElement('a');
            
            if(estado == 'Habilitado'){
            
            iconoOjo.classList.add('far');
            iconoOjo.classList.add('fa-eye');
            iconoOjo.dataset.idUsuario = listaUsuarios[i]['_id'];
            iconoOjo.addEventListener('click', deshabilitar);
            }else{
            iconoOjo.classList.add('far');
            iconoOjo.classList.add('fa-eye-slash');
            iconoOjo.dataset.idUsuario = listaUsuarios[i]['_id'];
            iconoOjo.addEventListener('click', habilitar);
            }

            

            let iconoBasurero = document.createElement('a');
            iconoBasurero.classList.add('fas');
            iconoBasurero.classList.add('fa-trash-alt');
            iconoBasurero.dataset.idUsuario = listaUsuarios[i]['_id'];


            celdaFoto.appendChild(imagen);
            celdaIconos.appendChild(iconoOjo);
            celdaIconos.appendChild(iconoBasurero);
        
            iconoBasurero.addEventListener('click', borrarUsuario);
        }
            
        }
    }
};



function borrarUsuario(){
    

    let idUsuario = this.dataset.idUsuario;
    console.log(idUsuario);
    
    swal({
        title: '¿Está seguro que desea eliminar este usuario?',
        text: "Una vez eliminado, el usuario no podrá ingresar a la aplicación web.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, estoy seguro!'
      }).then((result) => {
        if (result.value) {
            eliminarUsuario(idUsuario);
            listaUsuarios = obtenerUsers();
            mostrarUsuarios();
          swal(
            '¡Usuario eliminado!',
            'El usuario fue eliminado con éxito',
            'success'
          )
        }
      })
};

function deshabilitar(){
    

    let idUsuario = this.dataset.idUsuario;
    console.log(idUsuario);


    let estado;

   
    estado = 'Deshabilitado';
    
    
    swal({
        title: '¿Está seguro que desea deshabilitar este usuario?',
        text: "Una vez deshabilitado, el usuario no podrá ingresar a la aplicación web hasta volverlo a habilitar.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, estoy seguro!'
      }).then((result) => {
        if (result.value) {
            deshabilitarUsuario(idUsuario, estado);
            listaUsuarios = obtenerUsers();
            mostrarUsuarios();
          swal(
            '¡Usuario deshabilitado!',
            'El usuario fue deshabilitado con éxito',
            'success'
          )
        }
      })
};

function habilitar(){
    

    let idUsuario = this.dataset.idUsuario;
    console.log(idUsuario);


    let estado;

    
        estado = 'Habilitado';
    
    
    swal({
        title: '¿Está seguro que desea habilitar este usuario?',
        text: "Una vez habilitado, el usuario  podrá ingresar a la aplicación web nuevamente.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, estoy seguro!'
      }).then((result) => {
        if (result.value) {
            deshabilitarUsuario(idUsuario, estado);
            listaUsuarios = obtenerUsers();
            mostrarUsuarios();
          swal(
            '¡Usuario habilitado!',
            'El usuario fue habilitado con éxito',
            'success'
          )
        }
      })
};

