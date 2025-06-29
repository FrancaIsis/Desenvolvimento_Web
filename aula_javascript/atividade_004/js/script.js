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
    const PrimeiroInput = document.getElementById('numberOne');
    const SegundoInput = document.getElementById('numberTwo');
    const TerceiroInput = document.getElementById('numberThree');
    // casting input
    const primeiroNumero = parseInt(PrimeiroInput.value);
    const segundoNumero = parseInt(SegundoInput.value);
    const terceiroNumero = parseInt(TerceiroInput.value);
    let maior = primeiroNumero;
    let menor = primeiroNumero;

    
    if(segundoNumero > maior){
        maior = segundoNumero;
    }
    if(terceiroNumero > maior){
        maior = terceiroNumero;
    }
    if(segundoNumero < menor){
        menor = segundoNumero;
    }
    if(terceiroNumero < menor){
        menor = terceiroNumero;
    }
   

    if(primeiroNumero == segundoNumero && segundoNumero == terceiroNumero){
        resultado.textContent = "Os números informados são iguais";
    }else{
        resultado.innerHTML = `Maior número: ${maior}<br>
    Menor número: ${menor}`;
    }

}
verificar.addEventListener('click',VerificaNumero);
// letra c
// funçã para verificar se o veiculo esta acima da velocidade
function VerificaVelocidade(){
    const input = document.getElementById('velocidade');
// casting input
    const velocidade = parseInt(input.value);
    if(velocidade < 60){
        resultado.innerHTML = `Sua velocidade atual é: ${velocidade}km/h. Continue dentro do limite de 60 km/h estabelecido.`;
    }
    else if(velocidade == 60){
        resultado.innerHTML = `Sua velocidade atual é: ${velocidade}km/h. Este é o limite máximo estabelecido. Cuidado!!`;
    }
    else{
        resultado.innerHTML = `Sua velocidade atual é: ${velocidade}km/h. Você ultrapassou o limite máximo de 60 km/h. Reduza a velocidade!!`;

    }
}
verificar.addEventListener('click',VerificaVelocidade);