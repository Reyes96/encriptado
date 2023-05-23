// selectores
const text = document.querySelector('#text');
const formulario = document.querySelector('form')
const mensaje = document.querySelector('#mensaje');

const historial = document.querySelector('#mensajes');
const info = document.querySelector('#info');

const encriptador = document.querySelector('#enc');
const desencriptador = document.querySelector('#denc');

const divAlertas = document.querySelector('#alertas');

let valor;
let resultado;
const letras =/^([a-zA-Z0-9_-\s\u00f1\u00d1])/;

//Eventos
mensaje.addEventListener('input', (e)=>valor = mensaje.value);
encriptador.addEventListener('click', encriptar);
desencriptador.addEventListener('click',desencriptar)

//Funciones
function encriptar(e) {
    if(!letras.test(valor)){
        crearAlerta('Solo debes escribir valores alfanumericos')
    }else{
        
    if (mensaje.value === '') {
        crearAlerta('Debes escribir un mensaje para encriptarlo');
     }else {
        encriptancia(valor);
        text.removeChild(text.children[0]);
        const texto = document.createElement('P');
        texto.textContent = resultado.toLowerCase(); 
        texto.classList.add('p');
        text.appendChild(texto);
        crearHistorial();
        resetInput();
    }
    }
}
function desencriptar(e){
    console.log('clic');
    if (mensaje.value === '') {
        crearAlerta('Debes escribir un mensaje para desencriptarlo');
    } else {
        desencriptancia(valor);
        text.removeChild(text.children[0]);
        const texto = document.createElement('P');
        texto.textContent = resultado; 
        texto.classList.add('p');
        text.appendChild(texto);
        resetInput();
    }
}

function crearHistorial() {
    info.remove();
    const divMensajes = document.createElement('DIV');
    const pMensaje = document.createElement('P');
    pMensaje.textContent =resultado.toLowerCase();
    divMensajes.classList.add('encriptaciones');
    historial.appendChild(divMensajes);
    divMensajes.appendChild(pMensaje);
  



    divMensajes.addEventListener('click', () => {
        const mensajeSeleccionado = document.querySelectorAll('.selected');
      
            mensajeSeleccionado.forEach(mensaje =>{
                if(mensaje){
                    mensaje.classList.remove('selected');
                }
            })
           
            if (divMensajes.classList.contains('selected')) {
                divMensajes.classList.remove('selected');
                resetInput();
            } else {
                divMensajes.classList.add('selected')
                console.log(divMensajes.firstChild);
                mensaje.value=divMensajes.firstChild.textContent;
                valor=divMensajes.firstChild.textContent;
            }
    })
}

function resetInput() {
    formulario.reset();
}
function encriptancia(texto){

    resultado=texto;
    resultado=resultado.replace(/e/igm, 'enter'); 
    resultado=resultado.replace(/i/igm, 'imes');
    resultado=resultado.replace(/a/igm, 'ai');
    resultado=resultado.replace(/o/igm, 'ober'); 
    resultado=resultado.replace(/u/igm, 'ufat');
    return resultado;
}
function desencriptancia(texto){
    resultado=texto;
    resultado=resultado.replace(/enter/ig, 'e'); 
    resultado=resultado.replace(/imes/ig, 'i');
    resultado=resultado.replace(/ai/ig, 'a');
    resultado=resultado.replace(/ober/ig, 'o'); 
    resultado=resultado.replace(/ufat/ig, 'u');

    console.log(resultado);
    return resultado;
}

function crearAlerta(mensaje) {
    while (divAlertas.firstChild) {
        divAlertas.removeChild(divAlertas.firstChild);
    }
    alerta = document.createElement('P');
    alerta.classList.add('alertas');
    alerta.textContent = mensaje;
    divAlertas.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}




