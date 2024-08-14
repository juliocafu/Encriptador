let inputext = "";
let outputext = "";


function encriptar(text){  //Función para encriptar el texto
    let encriptartexto = text 
        .replace (/e/g, "enter")
        .replace (/i/g, "imes")
        .replace (/a/g, "ai")
        .replace (/o/g, "ober")
        .replace (/u/g, "ufat");
        return encriptartexto;
}

function desencriptar(text){  //Función para desencriptar el texto
    let desencriptartexto = text 
        .replace (/enter/g, "e")
        .replace (/imes/g, "i")
        .replace (/ai/g, "a")
        .replace (/ober/g, "o")
        .replace (/ufat/g, "u");
        return desencriptartexto;    
}

//Proceso de encriptación con validación de caracteres especiales y minúsculas

document.getElementById("encriptarBoton").addEventListener("click", function(){
    let inputext = document.getElementById("entradaTexto").value.toLowerCase();
    if (/^[a-z\s]*$/.test(inputext)) {  //Valiación de letras minúsculas y espacios
        let encriptartexto = encriptar(inputext);
        document.getElementById("salidaTexto").value = encriptartexto;
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");   
    }
});

//Proceso de desencriptación con validación de caracteres especiales y minúsculas

document.getElementById("desencriptarBoton").addEventListener("click", function() {
    let inputext = document.getElementById("entradaTexto").value.toLowerCase();
    if (/^[a-z\s]*$/.test(inputext)) { //Valiación de letras minúsculas y espacios
        let desencriptartexto = desencriptar (inputext);
        document.getElementById ("salidaTexto").value = desencriptartexto;
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
    }
});

//Proceso para copiar el texto dentro del portapapeles

document.getElementById("copiaBoton").addEventListener ("click", function() {
    let outputext = document.getElementById("salidaTexto");
    outputext.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
})

