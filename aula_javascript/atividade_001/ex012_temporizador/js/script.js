// Carrega o HTML por completo
document.addEventListener('DOMContentLoaded', function(){
    //recebendo o contador do html
    const cont = document.getElementById('contador');
    let tempo = 10;
    const intervalo = setInterval(() => {
      tempo--;//diminui o tempo
      if (tempo >= 0) {
        cont.textContent = tempo;// mostra o tempo
      } else {
        clearInterval(intervalo);//interrupção
        cont.textContent = "Tempo esgotado!";
      }
    }, 1000);//set interval, executando a cada 1 segundo, entao essa função vai rodar a cada segundo
});