// iniciar aopos o carregamento do HTML
document.addEventListener("DOMContentLoaded", function () {
    const valor = document.getElementById('dado').value;
    const resposta = document.getElementById("resultado");
    
    document.getElementById("btnVerificar").addEventListener("click", function () {
        const valor = document.getElementById('dado').value.toLowerCase();

       

        if (valor === 'true' || valor === 'false'){
            resposta.textContent = 'Booleano';
        }
        else if(!isNaN(valor)){
            resposta.textContent = 'Número';
        }
        else{
            resposta.textContent = 'String';
        }
        if(valor == ''){
            resposta.textContent = 'Digite algo';
        }
    })

})