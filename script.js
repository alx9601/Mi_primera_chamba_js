
let contenidoTitulo="Nombre";

let titulo = document.querySelector(".logo .nombre");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre"){
    titulo.innerHTML = "Otro Nombre";
} else{
    console.log("no se cumple");
}

// FUNCIONES

let nombre = "Fernando";
let ciudad = "Lima";
let gusto = "chocolate";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto){
    let contenido = `Me llamo ${nombre}, naci en ${ciudad} y vivo 
    en Caballito. Me gusta el ${gusto} y salir a pasear en dias de sol. 
    Me encantaría aprender a programar para poder ayudar a 
    las personas a mostrar lo que hacen.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre,ciudad,gusto);

//MENU NAVEGACION

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};