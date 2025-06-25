// verificar e resultado globais
let verificar = document.getElementById('btnVerificar');
let resultado = document.getElementById('resultado');

// letra a
// função para verificar se é par ou ímpar
function VerificaPar(){
    const input = document.getElementById('numero');
    
    // casting do input
    const numero = parseInt(input.value);

    if(numero % 2 == 0){
        resultado.textContent = "Numero par.";
    }else{
        resultado.textContent = "Número ímpar.";
    }

}
verificar.addEventListener('click',VerificaPar);

// letra b
// função para verificar se o numero é maior, menor ou igual
function VerificaNumero(){

}