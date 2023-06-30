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



















/*   function contenido(){
    switch (op) {
        case '1':
            alert('====== PC DE ESCRITORIO ======= \nSi estás trabajando con una pc de escritorio debes tener en cuenta lo siguiente: \na - Medir de ruido de ventiladores del CPU en banda de octavas. \nb- Medir niveles de iluminación del ambiente, contraste y reflejos en el monitor. \nc- Medir niveles de carga térmica producto del sobrecalenamiento del CPU.')
            break;
        case '2':
            alert('====== NOTEBOOK ======= \nSi estás trabajando con una notebook debes tener en cuenta lo siguiente: \na - Revisar tu posición postural si presentas dolor cervical. La inclinación de la pantalla puede ser una de las causas. \nb- La posición de las extremidades superiores puede verse comprometida por la altura donde está colocada la notebook. \nc- La luz de fondo de la pantalla, el contraste, la luminosidad, son detalles a los que debes prestar atención para evitar cansancio ocular y a la larga, pérdida de visión.')
            break;
        case '3':
            alert('====== CELULAR ======= \nSi estás trabajando con un celular debes tener en cuenta lo siguiente: \na - El elevado uso de las extermidades superiores, especialmente de los dedos pulgares, puede provocar tendinitis y otros efectos en la salud. \nb- Trata de no estar trabajando en una habitación a oscuras por un tiempo prolongado, esto provocará daños a tu salud visual y neurológica. \nc- Estar constantemente revisando el celular en busca de nuevos mensajes de whatsapp y/o redes sociales puede provocar aumento de stress y en algunos casos episodios de pánico.');                   
            break;
        default: 
            console.log('Opcion incorrecta'); //solo para visualizar que está sucediendo
            break;
    }
  } */


  

                  
function workPlaces (lugar, tiempo, compartido){
    const workPlacesDesktop = new workPlaces ("Escritorio, 4, ")
}

//2- Function devices (lectura): lee el array y devuelve los nombres de los dispositivos

//3- Function optionValidate(queValida, valoresAvalidar, valorValidado)
//4- Function answerLoad: muestra una pregunta del array, y guarda una respuesta en la misma línea del array.
