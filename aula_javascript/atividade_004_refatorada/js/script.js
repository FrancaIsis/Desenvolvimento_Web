//capturando os botoes
const letraA = document.getElementById("letraA");
const letraB = document.getElementById("letraB");
const letraC = document.getElementById("letraC");
const letraD = document.getElementById("letraD");
const letraE = document.getElementById("letraE");
const letraF = document.getElementById("letraF");
const letraG = document.getElementById("letraG");
const letraH = document.getElementById("letraH");

//escutando os eventos

letraA.addEventListener("click", VerificaPar);

// criando o formulario

function criarFormulario(botao){
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");

    formulario.innerHTML = `
        <form>
            <label for="numero">Digite o número: </label>
            <input type="number" id="numero" placeholder="Digite um número" required>
            <button type="button" id="btnVerificar" class="botao">Enviar</button>
            <button type="button" id="btnVoltar" class="botao">Voltar</button>
        </form>
    `;
    resultado.textContent = "";

    // pegando os dados do formulario e o botpo verificar
    const numero = document.getElementById("numero");
    const btnVerificar = document.getElementById("btnVerificar");
    //add evento ao botao para validar a entrada
    btnVerificar.addEventListener("click", () =>{ // função anonima
      const entrada = document.getElementById("numero").value;
      const numero = validarEntrada(entrada);
      
      if (botaoId === "btnLetraA"){
        
      }
    });

}

// FUNÇÕES

// validar entrada
function validarEntrada(entrada) {
    const resultado = document.getElementById("resultado");

    if (entrada === null || entrada.trim() === '') {
        resultado.textContent = 'Campo não pode ser vazio!';
        return null;
    }
    const num = Number(entrada);
    if (isNaN(num)) {
        resultado.textContent = 'Favor digitar um número!';
        return null;
    }
    return num;
}
// letra a
// função para verificar se é par ou ímpar
function VerificaPar() {
  const input = document.getElementById("numero");

  // casting do input
  const numero = parseInt(input.value);

  if (numero % 2 == 0) {
    resultado.textContent = "Numero par.";
  }
  if (numero % 2 !=0){
    resultado.textContent = "Número ímpar.";
  }
}

// letra b
// função para verificar se o numero é maior, menor ou igual
function VerificaNumero() {
  const PrimeiroInput = document.getElementById("numberOne");
  const SegundoInput = document.getElementById("numberTwo");
  const TerceiroInput = document.getElementById("numberThree");
  // casting input
  const primeiroNumero = parseInt(PrimeiroInput.value);
  const segundoNumero = parseInt(SegundoInput.value);
  const terceiroNumero = parseInt(TerceiroInput.value);
  let maior = primeiroNumero;
  let menor = primeiroNumero;

  if (segundoNumero > maior) {
    maior = segundoNumero;
  }
  if (terceiroNumero > maior) {
    maior = terceiroNumero;
  }
  if (segundoNumero < menor) {
    menor = segundoNumero;
  }
  if (terceiroNumero < menor) {
    menor = terceiroNumero;
  }

  if (primeiroNumero == segundoNumero && segundoNumero == terceiroNumero) {
    resultado.textContent = "Os números informados são iguais";
  } else {
    resultado.innerHTML = `Maior número: ${maior}<br>
    Menor número: ${menor}`;
  }
}