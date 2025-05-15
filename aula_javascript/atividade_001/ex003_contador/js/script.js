// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener("DOMContentLoaded", function () {
  //variavel para armazenar o texto digitado
  const texto = document.getElementById("texto");
  //variavel para capturar o status do elemento contador
  const contador = document.getElementById("contador");

  // usando um evento de escuta para capturar o texto digitado pelo usuario
  texto.addEventListener("input", function () {
    // função a ser executada no metodo listener evento input
    // o ocntador será modificado em tempo real mostrando o tamanho da variavel texto
    contador.textContent = texto.value.length;
  });
});
