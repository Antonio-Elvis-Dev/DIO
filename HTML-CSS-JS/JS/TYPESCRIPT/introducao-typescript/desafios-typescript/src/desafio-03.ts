let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;



campoSaldo.innerHTML = 0

function somarAoSaldo(soma: Number) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', function () {
    if (soma !== null) {
        somarAoSaldo(soma.value);
    }
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
