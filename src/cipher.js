window.cipher = {
  encode : (offset,palabra) =>{
    let nuevaPalabra =""
    for (let i= 0; i< palabra.length; i++){
      let ascii = palabra.charCodeAt(i);
      let nuevaAscii = (ascii-65 + offset)%26+65;
      let nuevaLetra = String.fromCharCode(nuevaAscii);
      let nuevaPalabra = nuevaPalabra + nuevaLetra;
    }
  return nuevaPalabra
  }

  decode: (offset,palabra) =>{
    let nuevaPalabra =""
    for (let i= 0; i< palabra.length; i++){
      ascii = palabra.charCodeAt(i);
      nuevaAscii = (ascii+65-offset)%26+65;
      nuevaLetra = String.fromCharCode(nuevaAscii);
      nuevaPalabra = nuevaPalabra + nuevaLetra;
    }
    return nuevaPalabra
  }
};

