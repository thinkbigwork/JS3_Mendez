//js para cuestionario

// definicion de variables y funciones
let q1 = 0;
let op = 0;
let nombre;
let arrayDispositivos;
let arrayLugares;

//funcion de inicio
function usuario(){
    nombre = prompt('Introduce tu nombre');
    nombre = nombre.toUpperCase();
    alert('Hola ' + nombre + ', comencemos con la evaluación!');
}

function remoto(){
    do{
        const question = '¿Trabajas en forma remota?. Indica SI o NO';
        q1 = prompt(question);
        q1 = q1.toUpperCase();
        console.log(q1); //solo para visualizar que está sucediendo
        console.log(nombre); //solo para visualizar que está sucediendo
    }while(q1 !== 'SI' && q1 !== 'NO');
}

//Creacion arrays
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
        alert('A continuación deberás ingresar la cantidad de horas de uso que utilizas cada dispositivo por día');
        Object.values(arrayDispositivos).forEach(function (device) {
            device.tiempo = prompt("Ingresa el tiempo para el dispositivo " + device.tipo + ":");
            return arrayDispositivos;
        });
    }
    cargarTiempo();
}


function finalizar(){
    do{
        const continuar = 'Cometiste algún error? Quieres volver a empezar ' + nombre + ' ?. Indica "SI" o "NO"';
        q1 = prompt(continuar);
        q1 = q1.toUpperCase();
    }while(q1 !== 'SI' && q1 !== 'NO');
}

function mensaje (){
    alert('Entonces no tenemos ninguna recomendación para vos!');
}


function informe(){
    alert('Estamos evaluando tus condiciones de trabajo según la información ignresada');
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

miBotton.onclick
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })


// programa principal
usuario();
remoto();
crearDevices();
crearPlaces();
do{
    if(q1=='SI'){evaluar();}
    else{mensaje();}
    finalizar();
}while(q1 == 'SI');
informe();
// finaliza programa ppal.
