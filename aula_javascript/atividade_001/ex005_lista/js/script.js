// Carrega o HTML por completo
document.addEventListener('DOMContentLoaded', function(){

    // receber o elemento inserido no id 'lista' do html
    const lista = document.getElementById('lista');
    // receber a ul
    const ulLista = document.getElementById('suaLista');

    const observacao = document.getElementById('obs');

    // função para limpar a lista
    const limpar = () => ulLista.innerHTML = '';

    // função para inserir 
    document.getElementById('btnInserir').addEventListener('click', function(){
        // pegando o texto digitado
        const texto = lista.value.trim();
        if (texto !== ''){
            const li = document.createElement('li');
            li.textContent = texto;
            ulLista.appendChild(li);
            lista.value = '';
            observacao.textContent = '';
        }
        else{
            observacao.textContent = 'Digite um item';
        }
    });

    // função para limpar 
    document.getElementById('btnLimpar').addEventListener('click', function(){
        limpar();
    });
    
});