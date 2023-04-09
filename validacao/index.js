function ValidarCampos() {
    const emailValidado = ValidarEmail();
    document.getElementById('recuperar-senha-butn').disabled = !emailValidado;
    
    const senha = SenhaValidada();
    document.getElementById('butn-login').disabled = !emailValidado || !SenhaValidada;
    }    

function emailValido(){
    const email = document.getElementById("email").value;
    if(!email) {
        return false;
    }
    return ValidarEmail(email);
}

function SenhaValida(){
    const senha = document.getElementById('senha').value;
    if (!senha) {
        return false;
    }
    return true;
}

function ValidarEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}