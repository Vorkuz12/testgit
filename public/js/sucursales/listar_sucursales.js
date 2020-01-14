
'use strict';

const inputFiltro = document.querySelector('#inputtext');



let listaSucursales = obtenerSucursales();
let provincias = obtener_provincias();
let cantones = obtener_cantones();
let distritos = obtener_distritos();


mostrarSucursal();

inputFiltro.addEventListener('keyup', mostrarSucursal)

function mostrarSucursal() {
  let filtro = inputFiltro.value;

  let tbody = document.querySelector('#tbl_sucursales tbody');

  tbody.innerHTML = '';

  for (let i = 0; i < listaSucursales.length; i++) {
    if (listaSucursales[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) || listaSucursales[i]['cantones'].toLowerCase().includes(filtro.toLowerCase()) || listaSucursales[i]['distrito'].toLowerCase().includes(filtro.toLowerCase()) || listaSucursales[i]['provincia'].toLowerCase().includes(filtro.toLowerCase())|| listaSucursales[i]['direccion'].toLowerCase().includes(filtro.toLowerCase())) {



      let fila = tbody.insertRow();
      let celdaSucursal = fila.insertCell();
      celdaSucursal.classList.add('column2');

      let celdaPromedio = fila.insertCell();
      celdaPromedio.classList.add('column2');


      let celdaProvincia = fila.insertCell();
      celdaProvincia.classList.add('column3');

      let celdaCantones = fila.insertCell();
      celdaCantones.classList.add('column3');

      let celdaDistritos = fila.insertCell();
      celdaDistritos.classList.add('column3');

      let celdaUbicacion = fila.insertCell();
      celdaUbicacion.classList.add('column4');
      let celdaDireccion = fila.insertCell();
      let celdaOpciones = fila.insertCell();
      celdaOpciones.classList.add('column5')


      let estado = listaSucursales[i]['estado'];


      for (let j = 0; j < provincias.length; j++) {
        if (provincias[j].idProvincia == listaSucursales[i]['provincia']) {
          listaSucursales[i]['provincia'] = provincias[j].nombre;
        }
      }
      for (let j = 0; j < cantones.length; j++) {
        if (cantones[j].idCanton == listaSucursales[i]['cantones']) {
          listaSucursales[i]['cantones'] = cantones[j].nombre;
        }
      }
      for (let j = 0; j < distritos.length; j++) {
        if (distritos[j].idDistrito == listaSucursales[i]['distrito']) {
          listaSucursales[i]['distrito'] = distritos[j].nombre;
        }
      }


      celdaPromedio.innerHTML = "★★★★★";
      celdaSucursal.innerHTML = listaSucursales[i]['nombre'];
      celdaProvincia.innerHTML = listaSucursales[i]['provincia'];

      celdaCantones.innerHTML = listaSucursales[i]['cantones'];
      celdaDistritos.innerHTML = listaSucursales[i]['distrito'];

      celdaUbicacion.innerHTML = listaSucursales[i]['direccion'];

      let ubicacion = document.createElement('a');
      ubicacion.classList.add('fas');
      ubicacion.classList.add('fa-map-marked-alt');

      let longitud = listaSucursales[i]['longitud'];
      let latitud = listaSucursales[i]['latitud'];

      ubicacion.onclick = function () {
        sessionStorage.setItem('latitudTemp', latitud);
        sessionStorage.setItem('longitudTemp', longitud);
        document.location.href = 'http://localhost:3000/public/mapa.html';
      }





      celdaDireccion.appendChild(ubicacion)

      let iconoOjo = document.createElement('a');

      if (estado == 'Habilitado') {

        iconoOjo.classList.add('far');
        iconoOjo.classList.add('fa-eye');
        iconoOjo.dataset.id_sucursal = listaSucursales[i]['_id'];
        iconoOjo.addEventListener('click', deshabilitar);
      } else {
        iconoOjo.classList.add('far');
        iconoOjo.classList.add('fa-eye-slash');
        iconoOjo.dataset.id_sucursal = listaSucursales[i]['_id'];
        iconoOjo.addEventListener('click', habilitar);
      }
      celdaOpciones.appendChild(iconoOjo);



      let botonEditar = document.createElement('a');
      botonEditar.classList.add('fas');
      botonEditar.classList.add('fa-pencil-alt');
      botonEditar.dataset.id_sucursal = listaSucursales[i]['_id'];

      botonEditar.addEventListener('click', mostrarDatosEdicion);
      celdaOpciones.appendChild(botonEditar)

      let botonEliminar = document.createElement('a');
      botonEliminar.classList.add('fas');
      botonEliminar.classList.add('fa-trash-alt');
      botonEliminar.dataset.id_sucursal = listaSucursales[i]['_id'];

      botonEliminar.addEventListener('click', borrar_el_libro);
      celdaOpciones.appendChild(botonEditar);
      celdaOpciones.appendChild(botonEliminar);


    }
  }
    }

    function mostrarDatosEdicion() {
      let id_sucursal = this.dataset.id_sucursal;
      localStorage.setItem('Sucursal', id_sucursal);
      window.location.href = 'modificar_hotel.html';
    };
    
    function borrar_el_libro() {
      let id_sucursal = this.dataset.id_sucursal;
      swal({
        title: 'Está seguro que desea eliminar el hotel?',
        text: "Este proceso no se puede revertir",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, estoy seguro!'
      }).then((result) => {
        if (result.value) {
          borrar_sucursal(id_sucursal);
          listaSucursales = obtenerSucursales();
          mostrarSucursal();
          swal(
            '¡Hotel eliminado!',
            'El hote fue borrado con éxito',
            'success'
          )
        }
      })

    }
    
    function deshabilitar() {
      let id_sucursal = this.dataset.id_sucursal;
       let estado;
      estado = 'Deshabilitado';
     
    swal({
      title: '¿Está seguro que desea deshabilitar este hotel?',
      text: "Una vez deshabilitado, el usuario no podrá evaluarlo.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, estoy seguro!'
    }).then((result) => {
      if (result.value) {
      deshabilitar_sucursal(id_sucursal,estado);   
      listaSucursales = obtenerSucursales();
      mostrarSucursal();
      swal(
        '¡Hotel deshabilitado!',
        'El hotel fue deshabilitado con éxito',
        'success'
      )
    }
  })
};
function habilitar() {
  let id_sucursal = this.dataset.id_sucursal;
   let estado;
  estado = 'Habilitado';
 
swal({
  title: '¿Está seguro que desea habilitar este hotel?',
  text: "Una vez habilitado, el usuario podrá evaluarlo en la aplicación web.",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: '¡Sí, estoy seguro!'
}).then((result) => {
  if (result.value) {
  habilitar_sucursal(id_sucursal,estado);   
  listaSucursales = obtenerSucursales();
  mostrarSucursal();
  swal(
    '¡Hotel habilitado!',
    'El hotel fue habilitado con éxito',
    'success'
  )
}
})
};
  
  
