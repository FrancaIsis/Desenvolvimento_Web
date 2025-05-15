// Carrega o HTML por completo
document.addEventListener('DOMContentLoaded', function(){

    
    // receber a ul
    const ulLista = document.getElementById('suaTabuada');



    // função para limpar a lista
    const limpar = () => ulLista.innerHTML = '';

    // função para tabuada
    document.getElementById('btnTabuada').addEventListener('click', function(){
        // receber o elemento inserido no id 'numero' do html
        const num = document.getElementById('numero').value.trim();
        // transformando em inteiro
        fator = parseInt(num);
        for(let i=0; i<=10; i++){
            const li = document.createElement('li');
            li.textContent = fator * i;
            ulLista.appendChild(li);
        }
        
    });

    // função para limpar 
    document.getElementById('btnLimpar').addEventListener('click', function(){
        limpar();
    });
    
});