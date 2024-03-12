
let contenidoTitulo="Mi web";

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
let pais = "Perú";
let ciudad = "Lima";
let gusto = "ceviche";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, pais, ciudad, gusto){
    let contenido = `Me llamo ${nombre}, soy de ${pais} y vivo 
    en ${ciudad}. Me gusta el ${gusto} y salir a pasear en dias de sol. 
    Me encantaría aprender a programar para poder ayudar a 
    las personas a mostrar lo que hacen.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre,pais,ciudad,gusto);

//MENU NAVEGACION

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

//FORMULARIO

const form = document.getElementById("form");
const nameform = document.getElementById("nombre");
const textform = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  textform.innerHTML = "";

  if (nameform.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    textform.innerHTML = warnings;
  } else {
    textform.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});