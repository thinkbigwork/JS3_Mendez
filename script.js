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
        evaluar();
    } else {
        mensaje();
        mostrarResultados();
    }
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

function evaluar(){
    function cargarTiempo(){
            Object.values(arrayDispositivos).forEach(function (device) {
            /* device.tiempo = prompt("Ingresa el tiempo para el dispositivo " + device.tipo + ":"); */
            return arrayDispositivos;
        });
    }
    cargarTiempo();
}


function finalizar(){
    do{
        const continuar = 'Cometiste algún error? Quieres volver a empezar ' + nombre + ' ?. Indica "SI" o "NO"';
        /* q1 = prompt(continuar); */
        q1 = q1.toUpperCase();
    }while(q1 !== 'SI' && q1 !== 'NO');
}

function mensaje (){
    console.log('Entonces no tenemos ninguna recomendación para vos!');
}


function informe(){
    console.log('Estamos evaluando tus condiciones de trabajo según la información ignresada');
    function mostrar() {
        console.log('\n==============================================================\nEstos son los datos registrados sobre tus dispositivos');
        const dispositivos = arrayDispositivos;
        console.log(dispositivos.mobile);
        console.log(dispositivos.notebook);
        console.log(dispositivos.desktop);

        console.log('\n==============================================================\nEstos son los datos registrados sobre los lugares de tu hogar que utilizás para trabajar');
        const lugares = arrayLugares;
        console.log(lugares.sillon);
        console.log(lugares.escritorio);
        console.log(lugares.mesa);
        console.log(lugares.cama);
        }
    mostrar();

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
    calcular();
    // en la próxima entrega los resultados serán dinámicos. 
    console.log('\n==============================================================\nEste es el resultado de tu puesto de trabajo: \nDispositivos ★★★★☆\nErgonomía ★★☆☆☆\nAmbiente ★☆☆☆☆');
    alert('Este es el resultado de tu puesto de trabajo: \n \nDispositivos ★★★★☆\nErgonomía ★★☆☆☆\nAmbiente ★☆☆☆☆');
}


