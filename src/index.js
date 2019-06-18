const botonComenzar =document.getElementById ("comenzar")
const seccionBienve =document.getElementById ("bienvenida")
const seccionPreg =document.getElementById("preguntar")
const boton1 =document.getElementById("cifrar")
const boton2 =document.getElementById("descifrar")
const seccionCifrado =document.getElementById ("cifrado")
const seccionDescifrado =document.getElementById ("descifrado")
const botonReg =document.getElementById("regresar")
const botonReg2 =document.getElementById ("regresar2")


const mostrarPreg= () => {
    seccionPreg.classList.remove("desaparecer")
    seccionBienve.classList.add("desaparecer")
}

const mostrarCif = () => {
    seccionCifrado.classList.remove("desaparecer")
    seccionPreg.classList.add("desaparecer")
}

const mostrarDescif =() =>{
    seccionDescifrado.classList.remove("desaparecer")
    seccionPreg.classList.add("desaparecer")
}

const regrePre =() => {
    seccionPreg.classList.remove("desaparecer")
    seccionCifrado.classList.add("desaparecer")
    seccionDescifrado.classList.add("desaparecer")
}

botonComenzar.addEventListener("click", mostrarPreg)
boton1.addEventListener("click", mostrarCif)
boton2.addEventListener("click", mostrarDescif)
botonReg.addEventListener("click", regrePre)
botonReg2.addEventListener("click", regrePre)

//Esto ya es de la sección del cifrado y descifrado

const botOcultar =document.getElementById("ocultar")
const botMostrar =document.getElementById("mostrar")
const secOcult =document.getElementById("palaCif")
const secDesc =document.getElementById("palaDescif")


const cifrado = () =>{
    let palabra = document.getElementById ("palabra").value;
    let offset = parseInt(document.getElementById("offset").value);
    let nuevaPalabra = cipher.encode (offset, palabra);
    secOcult.innerHTML= nuevaPalabra
}

const descifrado = () =>{
    let palabra = document.getElementById ("palabra").value;
    let offset = parseInt(document.getElementById("offset").value);
    let nuevaPalabra = cipher.decode (offset, palabra);
    secDesc.innerHTML= nuevaPalabra
}


botOcultar.addEventListener("click", cifrado)
botMostrar.addEventListener("click", descifrado)