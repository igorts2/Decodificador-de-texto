function capturarTexto() {
    ocultarConteudo();
    const mensagem = document.getElementById("entrada").value.toLowerCase();
    const resultadoCriptografado = criptografar(mensagem);
    const resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.querySelector("h1").textContent = resultadoCriptografado;
    document.getElementById("copyButton").style.display = 'block';
}
function capturarTextoCriptografado() {
    ocultarConteudo();
    const mensagemCriptografada = document.getElementById("entrada").value.toLowerCase();
    const resultadoDescriptografado = descriptografar(mensagemCriptografada);
    const resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.querySelector("h1").textContent = resultadoDescriptografado;
    document.getElementById("copyButton").style.display = 'block';
}

function criptografar(mensagem) {
    let resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
        switch (mensagem[i]) {
            case 'e':
                resultado += 'enter';
                break;
            case 'i':
                resultado += 'imes';
                break;
            case 'a':
                resultado += 'ai';
                break;
            case 'o':
                resultado += 'ober';
                break;
            case 'u':
                resultado += 'ufat';
                break;
            default:
                resultado += mensagem[i];
        }
    }
    return resultado;
}
function descriptografar(mensagemCriptografada) {
    let resultadoDescriptografado = "";
    let i = 0;
    while (i < mensagemCriptografada.length) {
        if (mensagemCriptografada.startsWith('enter', i)) {
            resultadoDescriptografado += 'e';
            i += 'enter'.length;
        } else if (mensagemCriptografada.startsWith('imes', i)) {
            resultadoDescriptografado += 'i';
            i += 'imes'.length;
        } else if (mensagemCriptografada.startsWith('ai', i)) {
            resultadoDescriptografado += 'a';
            i += 'ai'.length;
        } else if (mensagemCriptografada.startsWith('ober', i)) {
            resultadoDescriptografado += 'o';
            i += 'ober'.length;
        } else if (mensagemCriptografada.startsWith('ufat', i)) {
            resultadoDescriptografado += 'u';
            i += 'ufat'.length;
        } else {
            resultadoDescriptografado += mensagemCriptografada[i];
            i++;
        }
    }
    return resultadoDescriptografado;
}



function ocultarConteudo() {
    const imagem = document.querySelector("#resultadoContainer img");
    const textoP = document.querySelector("#resultadoContainer p")
    imagem.style.display = 'none';
    textoP.style.display = 'none';


}

function copiarTexto() {
    /* Obtém o elemento de resultado de texto */
    var copyText = document.querySelector("#resultadoContainer h1");

    /* Cria uma área de texto temporária para copiar o texto */
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = copyText.textContent;
    document.body.appendChild(tempTextArea);

    /* Seleciona o texto do elemento de entrada de texto */
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); /* Para dispositivos móveis */

    /* Copia o texto para dentro do clipboard */
    document.execCommand("copy");

    /* Remove a área de texto temporária */
    document.body.removeChild(tempTextArea);

    /* Alerta o usuário que o texto foi copiado */
    alert("Texto copiado: " + copyText.textContent);
}
