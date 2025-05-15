// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener("DOMContentLoaded", function () {
    // recebendo o elemento quadrado do html
    const quadrado = document.getElementById('quadrado');
    // mudando a cor do quadrado de acordo com o click do usuario
    document.getElementById('btnVermelho').addEventListener('click', function(){
        quadrado.style.backgroundColor = 'red';
    });

    document.getElementById('btnVerde').addEventListener('click', function(){
        quadrado.style.backgroundColor = 'green';
    });

    document.getElementById('btnAzul').addEventListener('click', function(){
        quadrado.style.backgroundColor = 'blue';
    });
    

});
