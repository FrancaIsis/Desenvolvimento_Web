//Aguarda o carregamento completo do HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function(){

    //Obtem a referencia ao botão com id "btnVerificar"
    const btn = document.getElementById('btnVerificar');

    //Obtem a referencia ao campo de entrada (input) com id "idade"
    const input = document.getElementById('idade');

    //Obtem a referencia ao elemento onde o resultado será exibido (com id "resultado")
    const resultado = document.getElementById('resultado');

    //Adiciona um ouvinte de evento ao botão para reagir ao clique
    btn.addEventListener('click', function(){
        const idade = parseInt(input.value);
      
        if (idade < 18){
            //textContent: permite ler ou alterar o texto contido dentro de um elemento
            resultado.textContent = 'Menor Idade!';
        
            //Verifica se a idade é exatamente 18
        }else if (idade === 18){
            resultado.textContent = 'Tem exatamente 18 anos!';

        }else{
            resultado.textContent = 'Maior Idade!';
        }
    })
})