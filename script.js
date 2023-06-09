//js para cuestionario
let q1 = 0;
let op = 0;
let nombre = prompt('Introduce tu nombre');
  nombre = nombre.toUpperCase();

  function contenido(){
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
  }

  alert('Hola ' + nombre + ', comencemos con el cuestionario!');
    do{
        const question = '¿trabajas en forma remota?. Indica SI o NO';
        q1 = prompt(question);
        console.log(q1); //solo para visualizar que está sucediendo
    }while(q1 !== 'SI' && q1 !== 'NO');
    do{
        if(q1=='SI'){
                do{
                    const seleccion = 'Ahora vamos a evaluar tus condiciones de trabajo. \nA continuación selecciona el equipo de trabajo que utilizás más frecuentemente: \n1 - PC de escritorio \n2 - Notebook \n3 - Celular' ;
                    op = prompt(seleccion);
                }while(op !== '1' && op !== '2' && op !=='3');
                contenido();
        }else{
            alert('Entonces no tenemos ninguna recomendación para vos!');
        }

            do{
                const continuar = 'Quieres volver a empezar ' + nombre + ' ?. Indica "SI" o "NO"';
                q1 = prompt(continuar);
            }while(q1 !== 'SI' && q1 !== 'NO');
    }while(q1 == 'SI');


  
