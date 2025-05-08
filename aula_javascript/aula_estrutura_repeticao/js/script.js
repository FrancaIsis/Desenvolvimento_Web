// Aguarda o carregamento completo HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', function(){

    //obtem a referencia ao elemento <ul> com id "saida"
    const ul = document.getElementById('saida');

    // Função que limpa o conteudo da lista (zera o innerHTML da <ul>)
    const limpar = () => ul.innerHTML = '';// função anonima q é repassada para a variavel

    // Função que adiciona um <li> com texto dentro da <ul>
    const addItem = texto =>{
        // Cria um novo elemento <li>
        const li = document.createElement('li');
        // Define o texto do <li>
        li.textContent = texto;
        //Adiciona o <li> como filho da <ul>
        ul.appendChild(li);
    };

    // Evento para o botão com id "btnWhile"
    document.getElementById('btnWhile').addEventListener('click', function(){
        // limpa a lista antes de começar
        limpar();
        // inicializa a variavel de controle
        let i = 1;
        // enquanto i for menor ou igual a 3
        while (i <=3 ){
            //Adiciona item com numero atual
            addItem('while: '+ i);
            i++;
        }
    });

    // evento para o botao com id "btnDoWhile"
    document.getElementById('btnDoWhile').addEventListener('click', function (){
        limpar();
        const senhaCorreta = '123';
        // variavel para armazenar a entrada do usuario
        let tentativa;
        // contador de tentativas
        let tentativas = 0;

        do{
            // solicita a senha
            tentativa = prompt('Digite a senha (tente 123): ');
            // conta mais uma tentativa
            tentativas++;
            // repete ate a senha estar correta
        } while (tentativa != senhaCorreta);
        // mostra resultado: interpolação é feita com crase ``
        addItem(`Senha correta após ${tentativas} tentativas!`);
    });

    // Evento para o botao com id "btnFor"
    document.getElementById('btnFor').addEventListener('click', function(){
        limpar();
        for (let i = 1; i<= 5; i++){
            // adiciona item para cada numero
            addItem('for: ' + i);
        }
    });
});