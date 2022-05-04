let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let tamanhoSenha = document.querySelector("#valor");
let senha = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let listaCaracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!$%#";
let novaSenha = "";


tamanhoSenha.innerHTML = sliderElement.value;

slider.oninput = function(){
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha(){
    
    let pass = "";
    
    for(let i = 0, n = listaCaracteres.length; i < sliderElement.value; i++ ){
        pass += listaCaracteres.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide");
    senha.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha(){
    alert("Senha Copiada!");
       /* Copie o texto dentro do campo de texto, neste caso, na variável novaSenha */
    navigator.clipboard.writeText(novaSenha);
}