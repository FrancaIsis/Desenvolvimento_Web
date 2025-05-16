//iniciar após o carregamento do html
document.addEventListener('DOMContentLoaded', function(){
    // recebe o texto digitado
    const texto = document.getElementById('palavra');

    // recebe o elemnto que ira exibir o resultado
    const resultado = document.getElementById('resposta');

    // verificando se é palindromo ao receber o click no botao
    document.getElementById('btnVerificar').addEventListener('click', function(){
        // recebendo o texto digitado e eliminando os espaços vazios
        const valor = texto.value.trim().toLowerCase();
        // fatiando o texto
        const contrario = valor.split('');
        // invertendo a lista
        contrario.reverse();
        // juntando
        const contrarioInvertido = contrario.join('');
        if(valor!= ''){
            if(valor === contrarioInvertido){
                resultado.textContent = 'É um palíndromo';
            } else {
                resultado.textContent = "Não é um palíndromo";
            }
        }
        else{
            resultado.textContent = "Digite algo";
        }
    
        

    });
  });

