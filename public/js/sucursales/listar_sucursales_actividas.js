
'use strict';
const id_usuario = sessionStorage.getItem('_id');
const inputFiltro = document.querySelector('#inputtext');



let listaSucursales = obtenerSucursales();
let provincias = obtener_provincias();
let cantones = obtener_cantones();
let distritos = obtener_distritos();


mostrarSucursal();

inputFiltro.addEventListener('keyup', mostrarSucursal)

function mostrarSucursal() {
  let filtro = inputFiltro.value;
  let idUsuario = id_usuario;
  let tbody = document.querySelector('#tbl_sucursales tbody');

  tbody.innerHTML = '';
  

  for (let i = 0; i < listaSucursales.length; i++) {
    if (listaSucursales[i]['estado'] == 'Habilitado'){
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
      celdaOpciones.classList.add('column5');


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


      celdaPromedio.innerHTML = '★★★';
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
        document.location.href = 'http://localhost:3000/public/mapa2.html';
      }





      celdaDireccion.appendChild(ubicacion)




      let botonPerfil = document.createElement('a');
      botonPerfil.classList.add('fas');
      botonPerfil.classList.add('fa-info-circle');
      botonPerfil.dataset.id_sucursal = listaSucursales[i]['_id'];

      botonPerfil.addEventListener('click', verSucursales);

      celdaOpciones.appendChild(botonPerfil);

    }
  }
 
function verSucursales(){
  let id_sucursal = this.dataset.id_sucursal;
  localStorage.setItem('Sucursal', id_sucursal);
  window.location.href ='perfil_hotel.html';
}

  }
}

