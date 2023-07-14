//js para cuestionario

// definicion de variables y funciones
let q1 = 0;
let op = 0;
let nombre;
let arrayDispositivos;
let arrayLugares;

//funcion de inicio
function iniciarCuestionario() {
    usuario();
    document.getElementById('pregunta-remoto').style.display = 'block';
}

function continuarRemoto() {
    const respuestaRemoto = document.querySelector('input[name="remoto"]:checked').value;
    remoto(respuestaRemoto);
    document.getElementById('pregunta-remoto').style.display = 'none';

    if (respuestaRemoto === 'SI') {
        document.getElementById('pregunta-dispositivos').style.display = 'block';
    } else {
        mensaje();
        mostrarResultados();
    }
}

function cargarTiempo() {
    const dispositivos = Object.values(arrayDispositivos);

    dispositivos.forEach(function(device) {
        const tiempo = prompt("Ingresa el tiempo para el dispositivo " + device.tipo + ":");
        device.tiempo = tiempo;
    });

    mostrarResultados();
}

function mostrarResultados() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    // Mostrar datos de dispositivos
    resultadoDiv.innerHTML += '<h2>Datos de dispositivos:</h2>';
    resultadoDiv.innerHTML += '<ul>';
    for (const dispositivo in arrayDispositivos) {
        const infoDispositivo = arrayDispositivos[dispositivo];
        resultadoDiv.innerHTML += '<li>' + infoDispositivo.marca + ' ' + infoDispositivo.modelo + ' (' + infoDispositivo.tipo + ')</li>';
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

// programa principal
function usuario() {
    nombre = document.getElementById('nombreInput').value;
    nombre = nombre.toUpperCase();
    document.getElementById('nombreInput').disabled = true;
}

function remoto(respuesta) {
    q1 = respuesta.toUpperCase();
}

//Creacion arrays
function crearDevices() {
    class userDevices {
        constructor(marca, modelo, tipo, tiempo) {
            this.marca = marca;
            this.modelo = modelo;
            this.tipo = tipo;
            this.tiempo = tiempo;
        }
    }
    const userDevicesMobile = new userDevices("Apple", "iphone", "celular");
    const userDevicesNotebook = new userDevices("Asus", "Satellite", "notebook");
    const userDevicesDesktop = new userDevices("Dell", "Miracle", "desktop");

    arrayDispositivos = {
        mobile: userDevicesMobile,
        notebook: userDevicesNotebook,
        desktop: userDevicesDesktop,
    };
}

function crearPlaces() {
    class userPlaces {
        constructor(lugar, tiempo) {
            this.lugar = lugar;
            this.tiempo = tiempo;
        }
    }
    const userPlacesSillon = new userPlaces("sillon", 2);
    const userPlacesEscritorio = new userPlaces("escritorio", 4);
    const userPlacesMesa = new userPlaces("mesa", 1);
    const userPlacesCama = new userPlaces("cama", 1);

    arrayLugares = {
        sillon: userPlacesSillon,
        escritorio: userPlacesEscritorio,
        mesa: userPlacesMesa,
        cama: userPlacesCama,
    };
}
