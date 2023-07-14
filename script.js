//js para cuestionario

// definicion de variables globales
let q1 = 0;
let op = 0;
let nombre ='';
let arrayDispositivos;
let arrayLugares;
crearDevices();
crearPlaces();

// programa principal ayuda memoria!
/*  usuario();
    remoto();
    crearDevices();
    crearPlaces();
    do{
        if(q1=='SI'){evaluar();}
        else{mensaje();}
        finalizar();
    }while(q1 == 'SI');
    informe(); */
// finaliza programa ppal.


//funcion de inicio
function iniciarCuestionario() {
    usuario();
}

function iniciarCuestionario() {
    nombre = document.getElementById('nombreInput').value.trim();
    if (nombre === '') {
        document.getElementById('errorNombre').style.display = 'block';
        return;
    }
    document.getElementById('errorNombre').style.display = 'none';
    usuario();
    document.getElementById('pregunta-remoto').style.display = 'block';
}

function usuario(){
    nombre = nombre.toUpperCase();
    document.getElementById('nombreInput').disabled = true;
    document.getElementById('bienvenida').innerText = '¡Bienvenido/a, ' + nombre + '!';
    document.getElementById('bienvenida').style.display = 'block';
}

function continuarRemoto() {
    const respuestaRemoto = document.querySelector('input[name="remoto"]:checked').value;
    document.getElementById('pregunta-remoto').style.display = 'none';
    if (respuestaRemoto === 'SI') {
        document.getElementById('pregunta-dispositivos').style.display = 'block';
/*         evaluar();
 */    } else {
        mensaje();
    }
}

function mensaje (){
    document.getElementById('mensaje').style.display = 'block';
}

function cargarTiempo() {
    const tiempoCelular = document.getElementById('tiempoCelular').value;
    const tiempoNotebook = document.getElementById('tiempoNotebook').value;
    const tiempoPc = document.getElementById('tiempoPc').value;

    arrayDispositivos.mobile.tiempo = tiempoCelular;
    arrayDispositivos.notebook.tiempo = tiempoNotebook;
    arrayDispositivos.desktop.tiempo = tiempoPc;

    console.log(arrayLugares);
    console.log(arrayDispositivos);


    mostrarResultados();
};


/*     mostrarResultados();
 */
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
    console.log(arrayDispositivos);

}
//Creacion arrays lugares
function crearPlaces (){
    class userPlaces {
        constructor (lugar, tiempo){
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
        console.log(arrayLugares);

}





/*
    function calcular(){

        function extraerTiempos(lugares) {
            const tiempos = Object.values(lugares).map(lugar => lugar.tiempo);
            return tiempos;
          }
        const tiemposLugaresArray = extraerTiempos(arrayLugares);
        console.log(tiemposLugaresArray);

        function calcularPromedio(tiemposLugaresArray) {
            const suma = tiemposLugaresArray.reduce((acumulador, valor) => acumulador + valor, 0);
            const promedio = suma / tiemposLugaresArray.length;
            return promedio;
          }

        devices = calcularPromedio(tiemposLugaresArray);
        console.log('El tiempo de exposicion es: ' + devices);
        
        }
    calcular(); */
    
    // en la próxima entrega los resultados serán dinámicos. 
    


