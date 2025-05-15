// iniciar aopos o carregamento do HTML
document.addEventListener("DOMContentLoaded", function () {
    //recebendo a informação do botão
    const botao = document.getElementById('btnAlternaTema');
    // recebendo o status do body
    const corpo = document.body;

    // função para alterar o tema ao click do botao
    botao.addEventListener('click', function(){
        if(corpo.classList.contains('claro')){
            corpo.classList.remove('claro');
            corpo.classList.add('escuro');
        }
        else{
            corpo.classList.remove('escuro');
            corpo.classList.add('claro');
        }
    })

})