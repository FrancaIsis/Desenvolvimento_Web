// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', function(){
    
    //obter o numero digitado pelo usuario
    const num = parseInt(document.getElementById('num').value);

    //obter a referencia ao botao com id btnVerificar
    const btn = document.getElementById('btnVerificar');

    //obter a referencia ao elemento onde o resultado será exibido
    const resultado

    //resultado
    let resultado;

    // adiciona o ouvinte do evento ao botão para reagit ao clique

    if(num > 0){
            resultado = "Número positivo";
    }else if(num < 0){
            resultado = "Número negativo";
    }
    else{

    }

    
})