// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', function(){    


    //função para realizar o calculo
    function calcular(op){
        //obter o primeiro numero digitado pelo usuario
        const num1 = parseFloat(document.getElementById('num1').value);

        //obter o segundo numeto digitado pelo usuario
        const num2 = parseFloat(document.getElementById('num2').value);
        
        // variavel para armazenar o resultado
        let resultado;

        // verifica a operação escolhida pelo usario
        switch(op){
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;  
            case '/' :
                if (num2!=0){
                    resultado = num1 / num2;
                }
                else{
                    resultado = "Não é possível realizar divisão por zero";
                }

        }

        // mostrando o resultado
        resposta.textContent=resultado
    }
    
    //obter a operação escolhida pelo usuario
    document.getElementById('btnSomar').addEventListener('click', function(){
        calcular('+');
    });

    document.getElementById('btnSubtrair').addEventListener('click', function(){
        calcular('-');
    });
    document.getElementById('btnMultiplicar').addEventListener('click', function(){
        calcular('*');
    });
    document.getElementById('btnDividir').addEventListener('click',function(){
        calcular('/');
    });

});