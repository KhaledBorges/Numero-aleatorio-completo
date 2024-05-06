function mudarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function sortear() {

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);

    if (numeroMinimo > numeroMaximo) {
        mudarTexto('#numeros__sorteados', 'O número mínimo é maior que o número máximo.');
    } 

    else {
    if (quantidade > (numeroMaximo - numeroMinimo + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }
    else {

        alterarStatusBotao();
        
        let sorteados = [];
        let numero;

        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);

            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
            }
            sorteados.push(numero);
    }
    

    mudarTexto('#numeros__sorteados', `Número(s) sorteado(s): ${sorteados}`);

    } 
}
    }

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
   let botao = document.getElementById('btn-reiniciar');
   if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
   } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
   }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';
    mudarTexto('#numeros__sorteados', 'Números sorteados:  nenhum até agora')
    alterarStatusBotao()
}


