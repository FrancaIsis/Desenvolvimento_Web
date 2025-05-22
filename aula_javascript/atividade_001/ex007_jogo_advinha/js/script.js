// iniciar aopos o carregamento do HTML
document.addEventListener("DOMContentLoaded", function () {
  // receber o numero informado pelo usuario
  const numUsuario = document.getElementById("aposta");
  // receber o elemento que mostrara o resultado
  const resposta = document.getElementById("resultado");
  // receber o elemnto que mostrara a dica
  const dica = document.getElementById("obs");
  // numero sorteado
  let numSorteado = Math.floor(Math.random() * 10) + 1; // random é de [0 a ]1, multiplica por 10 pra ir de 0 a 9, floor aRredonda a pra baixo (9.999)

  //testando ao click do botao
  document.getElementById("btnVerificar").addEventListener("click", function () {
      const tentativa = parseInt(numUsuario.value);
      // se o usuario nao digitar um numero
      if(isNaN(tentativa)){
        resposta.textContent = "Digite um número inteiro";
        dica.textContent = '';
        return;
      }

      // se o usuario digitar um numero maior que 10 ou menor que 1
      if(tentativa < 1 || tentativa > 10){
        resposta.textContent = "Digite um número entre 1 e 10";
        dica.textContent = '';
        return;
      }

      if (numSorteado === tentativa) {
        resposta.textContent = "Parabéns, você acertou!";
        dica.textContent = '';
        

      } else if (numSorteado > tentativa) {
        dica.textContent = "Tente um número maior";
        resposta.textContent = '';
      } else {
        dica.textContent = "Tente um número menor";
        resposta.textContent = '';
      }

      
    });
    // document.getElementById("btnVerificar").addEventListener("click", function () {
        
    //     const tentativa = parseInt(numUsuario.value);
    //     while(numSorteado !== tentativa){
    //         const numUsuario = document.getElementById("aposta");
    //         const tentativa = parseInt(numUsuario.value);
    //         if (numSorteado > tentativa) {
    //         dica.textContent = "Tente um número maior";
    //         } else {
    //         dica.textContent = "Tente um número menor";
    //         }
    //     }
    //     resposta.textContent = "Parabéns, você acertou!";

    // });

});
