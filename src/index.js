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