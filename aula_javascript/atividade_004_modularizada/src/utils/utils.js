
// criando o formulario
export function criarFormulario(quantidade, retorno) {
  const formulario = document.getElementById("formulario");
  let entradasHTML = "";
  //estrutura de controle pra pegar os valores digitados
  for (let i = 1; i <= quantidade; i++) {
    entradasHTML+= `<label>Digite o valor:</label>
      <input type="number" id="numero${i}" placeholder="Digite o número" required><br>`;
  }

  formulario.innerHTML = `
    <form>
      ${entradasHTML}
      <button type="button" id="btnVerificar" class="botao">Enviar</button>
    </form>
  `;
  resultado.textContent = "";

  const btnVerificar = document.getElementById("btnVerificar");
  btnVerificar.addEventListener("click", () => {
    const numeros = [];
    for (let i = 1; i <= quantidade; i++) {
      const valor = document.getElementById(`numero${i}`).value;
      const numero = validarEntrada(valor);
      if (numero === null) return; // para se inválido
      numeros.push(numero);
    }
    retorno(numeros);
  });
}

// validar entrada
export function validarEntrada(entrada) {
  //const resultado = document.getElementById("resultado");

  if (entrada === null || entrada.trim() === "") {
    resultado.textContent = "Campo não pode ser vazio!";
    return null;
  }
  const num = Number(entrada);// já transforma em numero
  if (isNaN(num)) {
    resultado.textContent = "Favor digitar um número!";
    return null;
  }
  return num;
}

//ancora
export function voltar(){
  const voltar = document.getElementById("voltar");
  voltar.innerHTML = `<a href = "#topo" class = "botao-voltar">Voltar</a>
  `;
}