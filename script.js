//Escribe document con la propiedad addEventListenner utiliza el evento keyup para llamar una funcion extrerna saltar
document.addEventListener('keyup',saltar);

//Crea la funcion saltar y dentro de las llaves de apertura y cierre coloca el siguinente codigo: alert('Estoy saltando')
function saltar(){
    alert('Estoy saltando')
}

//Cambia el evento keyup por keydown