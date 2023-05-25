function encriptar(text) {
    let encriptado = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] === 'e') {
        encriptado += 'enter';
      } else if (text[i] === 'i') {
        encriptado += 'imes';
      } else if (text[i] === 'a') {
        encriptado += 'ai';
      } else if (text[i] === 'o') {
        encriptado += 'ober';
      } else if (text[i] === 'u') {
        encriptado += 'ufat';
      } else {
        encriptado += text[i];
      }
    }
    return encriptado;
  }
  
  function desencriptar(text) {
    let encriptado = '';
    for (let i = 0; i < text.length; i++){
        if(text[i] === 'enter') {
            encriptado += 'e';
        }else if (text[i] === 'imes'){
            encriptado += 'i';
        }else if(text[i] === 'ai'){
            encriptado += 'a';
        }else if(text[i] === 'ober'){
            encriptado += 'o';
        }else if(text[i] === 'ufat'){
            encriptado += 'u';
        }else{
            encriptado += text[i];
        }
    }
    return encriptado;
  }
  
  function encriptarTexto() {
    const textoInput = document.getElementById("texto-input");
    const textoEncriptado = encriptar(textoInput.value);
    document.getElementById("texto2").innerHTML = textoEncriptado;
  }
  
  function desencriptarTexto() {
    const textoInput = document.getElementById("texto-input");
    const textoDencriptado = desencriptar(textoInput.value);
    document.getElementById("texto2").innerHTML = textoDencriptado;
  }