// definicion de variables globales
let nombre ='';
let password ='';
let profesion = '';
let arrayDispositivos;
let arrayLugares;
let nombreUsuario;
crearDevices();
crearPlaces();

//funcion de inicio
function iniciarCuestionario() {
   
    nombre = document.getElementById('nombreInput').value.trim();
    password = document.getElementById('passwordInput').value.trim();
    profesion = document.getElementById('profesionInput').value.trim();

    if (nombre === '' || password === '' || profesion === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos.',
        });
        return;
    }
    
    if (password.length < 5) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe tener al menos 5 caracteres.',
        });
        return;
    }

    document.getElementById('errorNombre').style.display = 'none';
    document.getElementById('errorProfesion').style.display = 'none';
    document.getElementById('errorPassword').style.display = 'none';

    usuario();
    document.getElementById('pregunta-remoto').style.display = 'block';
}

function usuario() {
    nombre = nombre.toUpperCase();
    document.getElementById('nombreInput').disabled = true;
    document.getElementById('nombreInput').disabled = true;
    document.getElementById('nombreInput').disabled = true;
    document.getElementById('bienvenida').innerText = '¡Bienvenido/a, ' + nombre + '!';
    document.getElementById('bienvenida').style.display = 'block';

// Guardo datos de usuario en el localStorage
const usuario = {
    nombre: nombre,
    password: password,
    profesion: profesion,
  };
  
  const usuarioJSON = JSON.stringify(usuario);
  localStorage.setItem('usuario', usuarioJSON);
}


function continuarRemoto() {
    const respuestaRemoto = document.querySelector('input[name="remoto"]:checked').value;
    document.getElementById('pregunta-remoto').style.display = 'none';
    if (respuestaRemoto === 'SI') {
        document.getElementById('pregunta-dispositivos').style.display = 'block';
    } else {
        mensaje();
    }
}

function mensaje() {
    document.getElementById('mensaje').style.display = 'block';
}

function cargarTiempo() {
    const tiempoCelular = document.getElementById('tiempoCelular').value;
    const tiempoNotebook = document.getElementById('tiempoNotebook').value;
    const tiempoPc = document.getElementById('tiempoPc').value;

    if (!validarEntero(tiempoCelular) || !validarEntero(tiempoNotebook) || !validarEntero(tiempoPc)) {
        Swal.fire({
            icon: 'error',
            title: 'Pecado Capital',
            text: 'Soy el cartel rabioso, sos jodido eh!. Por el bien de la humanidad colocá solo números enteros, si papito?',
        });
        return;
    }

    arrayDispositivos.mobile.tiempo = tiempoCelular;
    arrayDispositivos.notebook.tiempo = tiempoNotebook;
    arrayDispositivos.desktop.tiempo = tiempoPc;

    mostrarResultados();
}

function validarEntero(valor) {
    return Number.isInteger(Number(valor));

}


function mostrarResultados() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

  // Recuperar objeto del localStorage
    usuarioJSON = localStorage.getItem('usuario');
    const usuarioGuardado = JSON.parse(usuarioJSON);

    console.log('Datos del usuario JSON: ' + usuarioJSON);

    // Mostrar datos del usuario en HTML
    resultadoDiv.innerHTML += '<h2>Datos del Usuario:</h2>';
    resultadoDiv.innerHTML += '<ul>';
    for (const propiedad in usuarioGuardado) {
    const valor = usuarioGuardado[propiedad];

    const p = document.createElement('p');
    p.textContent = `${propiedad}: ${valor}`;

    resultadoDiv.appendChild(p);
    }

    // Mostrar datos de dispositivos
    resultadoDiv.innerHTML += '<h2>Datos de dispositivos:</h2>';
    resultadoDiv.innerHTML += '<ul>';
    for (const dispositivo in arrayDispositivos) {
        const infoDispositivo = arrayDispositivos[dispositivo];
        resultadoDiv.innerHTML += '<li>' + infoDispositivo.marca + ' ' + infoDispositivo.modelo + ' (' + infoDispositivo.tipo + '): ' + infoDispositivo.tiempo + ' horas</li>';
    }
    resultadoDiv.innerHTML += '</ul>';

    // Mostrar datos de lugares
    resultadoDiv.innerHTML += '<h2>Datos de lugares:</h2>';
    resultadoDiv.innerHTML += '<ul>';
    for (const lugar in arrayLugares) {
        const infoLugar = arrayLugares[lugar];
        resultadoDiv.innerHTML += '<li>' + infoLugar.lugar + ' - Tiempo de uso: ' + infoLugar.tiempo + ' horas</li>';
    }
    resultadoDiv.innerHTML += '</ul>';

    // Mostrar resultado final
    resultadoDiv.innerHTML += '<h2>Resultado del puesto de trabajo:</h2>';
    resultadoDiv.innerHTML += '<p>Dispositivos ★★★★☆</p>';
    resultadoDiv.innerHTML += '<p>Ergonomía ★★☆☆☆</p>';
    resultadoDiv.innerHTML += '<p>Ambiente ★☆☆☆☆</p>';
}

//Creacion arrays dispositivos
function crearDevices() {
    class userDevices {
        constructor (marca, modelo, tipo, tiempo) {
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

//Creacion arrays lugares
function crearPlaces() {
    class userPlaces {
        constructor (lugar, tiempo) {
            this.lugar = lugar;
            this.tiempo = tiempo;
        }
    } 

    const userPlacesSillon = new userPlaces ("sillon", 2);
    const userPlacesEscritorio = new userPlaces ("escritorio", 4);
    const userPlacesMesa = new userPlaces ("mesa", 1);
    const userPlacesCama = new userPlaces ("cama", 1);

    arrayLugares = {
        sillon : userPlacesSillon,
        escritorio : userPlacesEscritorio,
        mesa : userPlacesMesa,
        cama : userPlacesCama,
    };
}
