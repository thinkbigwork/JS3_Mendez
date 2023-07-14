//js para cuestionario

// definicion de variables y funciones
let q1 = 0;
let op = 0;
let nombre;
let arrayDispositivos;
let arrayLugares;
crearDevices();
crearPlaces();

//Creacion arrays dispositivos
function crearDevices (){
    class userDevices {
        constructor (marca, modelo, tipo, tiempo){
            this.marca = marca;
            this.modelo = modelo;
            this.tipo = tipo;
            this.tiempo = tiempo;
        }
    } 
        const userDevicesMobile = new userDevices ("Apple", "iphone", "celular");
        const userDevicesNotebook = new userDevices ("Asus", "Satellite", "notebook");
        const userDevicesDesktop = new userDevices ("Dell", "Miracle", "desktop");
    
        arrayDispositivos = {
            mobile : userDevicesMobile,
            notebook : userDevicesNotebook,
            desktop : userDevicesDesktop,
        };
    }

//funcion de inicio
/* function crearFormularioDispositivos() {
    const formularioDispositivos = document.getElementById('formularioDispositivos');
    const dispositivos = Object.values(arrayDispositivos);

    dispositivos.forEach(function(device) {
        const dispositivoHTML = `
            <label for="${device.tipo}">${device.tipo}:</label>
            <input type="text" id="${device.tipo}" name="${device.tipo}" required>
            <br>
        `;
        formularioDispositivos.innerHTML += dispositivoHTML;
    });
}
 */

/* 
cardCertificado.innerHTML = cardCertificado.innerHTML + 

            `
            <div id="fondoCertificado" class="" >
                <div  class=" text-center mb-1 certificadoStyle ${fondos}">
                <h2 id="certificadoTipo"  class="h2Tipo">
                ${tipo.value}
                </h2>
                <div class="">
                  <h3 id="certificadoInstitucion" class="card-title h3Institucion ">${institucion.toUpperCase()}</h3> <br>
                  <p class="card-text">le otorga este certificado a</p>
                  <h2 id="certificadoDestinatario" class="h2Destinatario">${element.toUpperCase()}</h2>
                </div>
            
                <h6 class="mb-4" >por <span id="certificadoMotivo">${motivo}</span> </h6> 
             
                <div class="container text-center text-body-secondary">
                <br>
                  <div class="row">
                  <br>
              
                    <div class="col mb-3 firmas">
                    ${arrayFirmas[1].toUpperCase()}
                    </div>
                    <div class="col firmas">
                    ${arrayFirmas[2].toUpperCase()}
                    </div>
                    <div class="col firmas">
                    ${arrayFirmas[0].toUpperCase()}
                    </div>
                  </div>
                </div> 
            </div>
         <br>
            `;

 */

let carrito = [];

function guardarEnLocalStorage() {
  localStorage.setItem('carrito',JSON.stringify(carrito));
}

//guardarEnLocalStorage();

///traemos del localStorage el carrito
function traerCarrito() {

    carrito = JSON.parse(localStorage.getItem('carrito'));

}

dibujarTabla();

function dibujarTabla() {
    const bodyTabla = document.getElementById('items');
    bodyTabla.innerHTML = ``; //me aseguro que la tabla no contenga datos
    carrito.forEach((item,index) => {
        bodyTabla.innerHTML = bodyTabla.innerHTML + 
                    `<tr>
                        <th>${index+1}</th>
                        <td>${item.nombre}</td>
                        <td>${item.marca}</td>
                        <td>${item.cantidad}</td>
                        <td>${item.precio}</td>
                    </tr>
        `;
    });
}

function dibujarTablaV2() {
    const bodyTabla = document.getElementById('items');
    bodyTabla.innerHTML = ``; //me aseguro que la tabla no contenga datos
    carrito.forEach((item,index) => {
       let tr = document.createElement('tr'); ///creo una fila!
       let th = document.createElement('th'); ///creo el header de la fila!
       th.textContent = index+1;
       tr.appendChild(th); ///le agrego el th como hijito de la fila

       /////creo la celda para el nombre de item
       let td = document.createElement('td');
       td.textContent = item.nombre;
       tr.appendChild(td); ///agrego un nuevo hijito con el nombre de item a la fila

       ///marca
       td = document.createElement('td');
       td.textContent = item.marca;
       tr.appendChild(td);

       ///cantidad
       td = document.createElement('td');
       td.textContent = item.cantidad;
       tr.appendChild(td);

       ///precio
       td = document.createElement('td');
       td.textContent = item.precio;
       tr.appendChild(td);

       ///hago la row hija del body de la tabla
       bodyTabla.appendChild(tr); 
    });
}

traerCarrito();
dibujarTablaV2();
