const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDecencriptar = document.querySelector(".btnDecencriptar");
const resultado = document.querySelector('.resultado');
const btnCopiar = document.querySelector('.btnCopiar');
const validar = document.querySelector('.validar');

(() => {
    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDecencriptar.addEventListener('click', decencriptarTexto);
    resultado.addEventListener('click', copiarTexto);
})();

function encriptarTexto() {
    let texto = document.querySelector("#texto").value;
    if (removerAcentos(texto)) {
        return;
    }
    let textoEncriptado = texto.replace(/e/img, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/mg, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/mg, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/mg, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/mg, 'ufat');
    
    mostrarHTML(textoEncriptado);
}

function removerAcentos(texto) {
    if (texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== texto) {
        const alerta = document.createElement('div');
        alerta.textContent = 'Ingrese un texto sin acentos';
        alerta.classList.add('error');
        setTimeout(() => {
            alerta.remove();
        }, 1500);
        validar.appendChild(alerta);
        return true;
    }
    if (texto !== texto.toLowerCase()) {
        const alerta = document.createElement('div');
        alerta.textContent = 'Ingrese un texto sin mayúsculas';
        alerta.classList.add('error');
        setTimeout(() => {
            alerta.remove();
        }, 1500);
        validar.appendChild(alerta);
        return true;
    }
    return false;
}

function mostrarHTML(textoEncriptado) {
    resultado.innerHTML = `
        <textarea>${textoEncriptado}</textarea>
        <button class="btnCopiar">Copiar</button>
    `;
}

function copiarTexto(e) {
    if (e.target.classList.contains('btnCopiar')) {
        const textoEncriptado = document.querySelector('.resultado textarea').value;
        navigator.clipboard.writeText(textoEncriptado).then(() => {;
        });
    }
}

function decencriptarTexto() {
    let texto = document.querySelector("#texto").value;
    if (!texto) {
        alert("Por favor, ingrese un texto para desencriptar.");
        return;
    }
    
    texto = texto.toLowerCase();
    let textoDesencriptado = texto.replace(/enter/mg, 'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/mg, 'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/mg, 'a');
    textoDesencriptado = textoDesencriptado.replace(/ober/mg, 'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/mg, 'u');
    
    mostrarHTML(textoDesencriptado);
}
