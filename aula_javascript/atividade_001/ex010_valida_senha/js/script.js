// iniciar aopos o carregamento do HTML
document.addEventListener("DOMContentLoaded", function () {
    const senha = document.getElementById('senha');
    const resposta = document.getElementById("resultado");

     // funções para verificar cada situação
        function maiuscula(senhaVerificada){
            for(let i; i < senhaVerificada.length; i++){
                const letra = senhaVerificada[i];
                if(letra >= 'A' && letra <= 'Z'){
                    return true;
                }
                else{
                    return false;
                }
            }
        }

        function minuscula(senhaVerificada){
            for(let i; i < senhaVerificada.length; i++){
                const letra = senhaVerificada[i];
                if(letra >= 'a' && letra <= 'z'){
                    return true;
                }
                else{
                    return false;
                }
            }
        }

        function numero(senhaVerificada){
            for(let i; i < senhaVerificada.length; i++){
                const letra = senhaVerificada[i];
                if(letra >= '0' && letra <= '9'){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        
    
    document.getElementById("btnVerificar").addEventListener("click", function () {
        const senhaVerificada = senha.value.trim();
        
        // chamando cada função
        const verificaMaiuscula = maiuscula(senhaVerificada);
        const verificaMinuscula = minuscula(senhaVerificada);
        const verificaNumero = numero(senhaVerificada);
        const tamanho = senhaVerificada.length >=8;
       
        // verificando se as condições sao verdadeiras
        if(verificaMaiuscula && verificaMinuscula && verificaNumero && tamanho){
            resposta.textContent = 'Senha forte';
        }
        else{
            resposta.textContent = 'Senha fraca';
        }
    })

})