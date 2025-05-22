document.addEventListener('DOMContentLoaded', function(){
    //let contador = document.getElementById("contador");
    // const btnAdicionar = document.getElementById("btnAdicionar");
    // const btnSubtrair = document.getElementById("btnSubtrair");
    // const btnZerar = document.getElementById("btnZerar");

    // inicializando o contador
    //let contInicio = parseInt(contador.value);
   // let contInicio = 0;

    // criando a função adicionar
    function contar(btn){
        let contInicio = parseInt(document.getElementById('contador').value);
        let resposta;
        
        

        switch(btn){
            case '+':
                resposta = contInicio + 1;
                break;
            case '-':
                resposta = contInicio - 1;
                break;
            case '0':
                resposta = 0;
                break;
        }
       
        contador.textContent = resposta;
    }
    
    // evento dos cliques dos botões

    document.getElementById("btnAdicionar").addEventListener('click', function(){
        contar('+');
    });
    document.getElementById("btnSubtrair").addEventListener('click', function(){
        contar('-');
    });
    document.getElementById("btnZerar").addEventListener('click', function(){
        contar('0');
    });

});