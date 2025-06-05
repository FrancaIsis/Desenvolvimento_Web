const produtos = [
    {nome: 'Sabonete natural', valor: 15, categoria:'cosmetico'},
    {nome: 'Shampoo orgânico', valor: 25, categoria:'cosmetico'},
    {nome: 'Granola Artesanal', valor: 18, categoria:'alimento'},
    {nome: 'Mel Puro', valor: 22, categoria:'alimento'},

];

const categoriaEscolhida = document.getElementById('categoria').value;
console.log(categoriaEscolhida)

// filtrar

// document.getElementById('categoria').addEventListener('change', function(){
//     const categoriaEscolhida = categoria.value;
//     const generoAlimenticio = categoriaEscolhida.filter(function(produtos){
//         return produtos.categoria == 'categoria';
//     });

// exibindo o resultado
//     document.getElementById('resultado-filtrar').innerHTML = `
//     <strong>${generoAlimenticio}</strong>
//     `;
    
// });