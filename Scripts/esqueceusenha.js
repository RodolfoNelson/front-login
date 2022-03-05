function validarEmail () {
    const emailValido = 'eve.holt@reqres.in';
    const emailDigitado = document.getElementById('email');
    const sucesso = emailDigitado.value == emailValido ? true : false;
    const alertaElemento = document.getElementById('alerta-enviado');  

    criarMensagemAlerta(sucesso);

    if (sucesso){
        removerClasse(alertaElemento.classList, 'alert-danger');
        criarAlertaSucesso(alertaElemento);
    }
    else {
        removerClasse(alertaElemento.classList, 'alert-success');
        criarAlertaErro(alertaElemento);
    }

    alertaElemento.style.display = 'block';
}

function criarAlertaSucesso(alertaElemento) {
    alertaElemento.classList.add('alert-success');        
}

function criarAlertaErro (alertaElemento) {
    alertaElemento.classList.add('alert-danger');    
}

function removerClasse (listaDeClasses, classe) {
    if (listaDeClasses.contains(classe)){
        listaDeClasses.remove(classe);
    }
}

function criarMensagemAlerta(deuBom) {
    const mensagem = document.getElementById('mensagem-alerta');
    mensagem.innerHTML = deuBom ? 'E-mail enviado com sucesso' : 'E-mail não cadastrado';
}