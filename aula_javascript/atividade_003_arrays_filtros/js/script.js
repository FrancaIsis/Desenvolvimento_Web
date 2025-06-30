const produtos = [
    {nome: 'Sabonete natural', valor: 15, categoria:'cosmeticos'},
    {nome: 'Shampoo orgânico', valor: 25, categoria:'cosmeticos'},
    {nome: 'Granola Artesanal', valor: 18, categoria:'alimentos'},
    {nome: 'Mel Puro', valor: 22, categoria:'alimentos'},

];
const resultado = document.getElementById('resultado-filtrar');
const categoriaEscolhida = document.getElementById('categoria');
const totalEscolhido = document.getElementById('total');
 
function mostrarProdutos(lista) {
    resultado.innerHTML = "";
    let valorTotal = 0;

    lista.forEach(produto => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${produto.nome}</strong><br>R$ ${produto.valor.toFixed(2)}`;
        resultado.appendChild(div);
        valorTotal += produto.valor;
    });

    totalEscolhido.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
}

categoriaEscolhida.addEventListener("change", () => {
    const filtro = categoriaEscolhida.value;
    if (filtro === "todos") {
        mostrarProdutos(produtos);
    } else {
        const filtrados = produtos.filter(p => p.categoria === filtro);
        mostrarProdutos(filtrados);
    }
});

// inicial
mostrarProdutos(produtos);


// mostrar o resultado dos filtros

