// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', function(){
    
    //obter o numero digitado pelo usuario
    const input = document.getElementById('num');

    //obter a referencia ao botao com id btnVerificar
    const btn = document.getElementById('btnVerificar');

    //obter a referencia ao elemento onde o resultado será exibido
    const resultado = document.getElementById('resposta')

    // adiciona o ouvinte do evento ao botão para reagir ao clique
    btn.addEventListener('click',function(){

        const num = parseInt(input.value);     
        if(num > 0){
                resultado.textContent = "Número positivo";
        }else if(num < 0){
                resultado.textContent = "Número negativo";
        }
        else{
            resultado.textContent = "Zero";
        }   
        

    })

    
})