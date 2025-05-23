//Aguarda o evento 'DOMContentLoaded' que é disparado quando o HTML está completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Obtem referencia ao botao com ID 'calcularBtn'
    const botao = document.getElementById('calculaBtn');

    //Adiciona um listener de evento de clique ao botao
    botao.addEventListener('click',() => {
        //Obtem referencia ao input com ID 'ladoInput'
        const input = document.getElementById('ladoInput');
        //Converte o valor do input para numero decimal
        const lado = parseFloat(input.value);

        //Verifica se o valor é inválido (não é número ou  é menor/igual a zero)
        if(isNaN(lado) || lado<=0){
            //mostra mensagem de erro se o valor dor inválido
            mostrarMensagem('Por favor, insira um valor válido maior que zero.');
            return;//Sai da função se o valor for inválido
        }

        //Calcula a área do quadrado com o lado fornecido
        const area = calcularAreaQuadrado(lado);
        //Mostra o resultado do cálculo
        mostrarMensagem(`A área do quadrado com lado ${lado} é: ${area}`);
    });
});

// função que calcula a área de um quadrado (lado x lado)
function calcularAreaQuadrado(lado){
    return lado * lado;
}

//função que exibe mensagens no elemento com ID 'resultado'
function mostrarMensagem(texto){
    const resultado = document.getElementById('resultado');
    resultado.textContent = texto;
}