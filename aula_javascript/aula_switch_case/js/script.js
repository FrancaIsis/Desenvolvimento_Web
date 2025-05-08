// Aguarda o carregamento completo do HTML anters de rodar o script
document.addEventListener('DOMContentLoaded', function(){

    //Obtem o botao com id "btnMostarDia"
    const botao = document.getElementById('btnMostrarDia');

    //Obtem o campo de entrada com id "numeroDia" (onde o usuario digita o numero)
    const entrada = document.getElementById('numeroDia');

    // Obtem o elemento com id "respostaDia", onde sera exibido o nome do dia
    const saida = document.getElementById('respostaDia');

    //Adicione um evento ao botao para executar uma função quando ele for clicado
    botao.addEventListener('click', function(){

        //converte o valor digitado pelo usuario (string) em um numero inteiro - Casting
        const numero = parseInt(entrada.value);

        // Verifica o valor da variavel "numero" e exibe o dia correspondente
        switch (numero){
            case 1:
                saida.textContent = 'Domingo';
                break;
            case 2:
                saida.textContent = 'Segunda - feira';
                break;
            case 3:
                saida.textContent = 'Terça - feira';
                break;
            case 4:
                saida.textContent = 'Quarta - feira';
                break;
            case 5:
                saida.textContent = 'Quinta - feira';
                break;
            case 6:
                saida.textContent = 'Sexta - feira';
                break;
            case 7:
                saida.textContent = 'Sábado';
                break;
            default:
                saida.textContent = 'Número inválido';
                break;
        }

    })
})