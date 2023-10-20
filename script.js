import { barcelona,paris,roma,londres } from "./ciudades.js";


// Obtiene todos los elementos del DOM(HTML)

// Hacemos un document.queryselectorall para obtener todos los "A" sin un id
let enlaces = document.querySelectorAll('a');

// Obtenemos el titulo, subtitulo, parrafo del html con sus id y los almacenamos en una variable
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo')


// Agregamos un evento CLICK a cada enlace(a)

enlaces.forEach(function (enlace){
    enlace.addEventListener('click', function (){
         
        //Remover la class active de todos los enlaces

        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })

        //Agregar la class active al enlace actual

        this.classList.add('active')


        //Obtener el contenido correspendiente segun el enlace

        let contenido = obtenerContenido(this.textContent)


        //Mostrar el contenido en el DOM

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo

 
    })
})





// Funcion para obtener el contenido y la informacion de cada ciudad desde "CIUDADES.JS" 

function obtenerContenido(enlace){
    let contenido ={
        'Barcelona' : barcelona,
        'Roma': roma,
        'París':  paris,
        'Londres': londres
    }
    return contenido[enlace]
}

