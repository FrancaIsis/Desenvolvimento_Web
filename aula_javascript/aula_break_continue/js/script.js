//aguarda o carregamento completo do HTML antes de de executar o script
document.addEventListener('DOMContentLoaded', function(){

    // obtem a referencia ao elemento <ul> com id "listaBreakContinue"
    const ul = document.getElementById('listaBreakContinue');

    // Função que limpa todo o conteúdo da lista (zera o conteudo da <ul>)
    const limpar = () => ul.innerHTML = '';

    // Função que adiciona um item <li> com o texto especificado dentro da <ul>
    const add = texto => {
        //Cria um elemento <li>
        const li = document.createElement('li');
        //Define o texto do <li>
        li.textContent = texto;
        // Adiciona o <li> dentro da <ul>
        // append: adiciona um elemento filho dentro de outro elemento HTML.
        ul.appendChild(li);
    };

    // Evento ao clicar no botão com id "btnBreak"
    document.getElementById('btnBreak').addEventListener('click', function(){
        limpar();
        //loop de 1 a 50
        for (let i = 1; i <= 50; i++){

            // se o numero for divisivel por 13...
            if(i % 13 === 0){
                // adiciona mensagem
                add('Parou no '+ ' (divisivel por 13!)');
                // Encerra o loop imediatamente
                break;
            }
            // Caso nao seja divisivel por 13, apenas adiciona o numero na listagem
            add(li);
        }
    });
    // evento ao clicar no botao com id "btnContinue"
    document.getElementById('btnContinue').addEventListener('click', function() {
        limpar();

        // loop de 1 a 5
        for (let i = 1; i <=5; i++){

            // se o numero for 3, pula a iteração atual (nao adiciona o 3)
            if (i===3) continue;
            // adiciona o numero normalmente se nao for 3
            add (i);
        }
    });
});