const resultado = document.getElementById("resultado");

//capturando os botoes

const botoes = document.querySelectorAll(".btnLetra");

//escutando os eventos

botoes.forEach(botao =>{// percorre cada botao dentro da lista
  botao.addEventListener("click", () =>{//cada botao na lista de botoes tera um evento escutador
    //ao click vai executar a função anonima que chama a função criarFormulario()
    criarFormulario(botao.id);// id do botao que esta no html
  });
});

// criando o formulario

function criarFormulario(botaoId){
    const formulario = document.getElementById("formulario");
    
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
    const btnVerificar = document.getElementById("btnVerificar");
    
    //add evento ao botao para validar a entrada
    btnVerificar.addEventListener("click", () =>{ // função anonima
      const entrada = document.getElementById("numero").value;
      const numero = validarEntrada(entrada);
      if(numero===null){
        return;
      }

      switch(botaoId){
        case "btnLetraA":
          VerificaPar();
          break;
        case "btnLetraB":
          VerificaNumero();
          break;
        case "btnLetraC":
          VerificaVelocidade();
          break;
        case "btnLetraD":
          CalculaSalario();
          break;
        case "btnLetraE":
          CalculaPassagem();
          break;
        case "btnLetraF":
          CalculaBissexto();
          break;
        case "btnLetraG":
          VerificaTriangulo();
          break;
        case "btnLetraH":
          CalculaRaizes();
          break;
      }
    });

}

// FUNÇÕES

// validar entrada
function validarEntrada(entrada) {
    //const resultado = document.getElementById("resultado");

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
  const input = document.getElementById("numero").value;
  validarEntrada(input);

  // casting do input
  const numero = parseInt(input);

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
// letra c
// função para verificar se o veiculo esta acima da velocidade
function VerificaVelocidade() {
  const input = document.getElementById("numero").value;
  validarEntrada(input);
  // casting input
  const velocidade = parseInt(input);
  if (velocidade < 60) {
    resultado.textContent = `Sua velocidade atual é: ${velocidade}km/h. Continue dentro do limite de 60 km/h estabelecido.`;
  } else if (velocidade == 60) {
    resultado.textContent = `Sua velocidade atual é: ${velocidade}km/h. Este é o limite máximo estabelecido. Cuidado!!`;
  } else {
    resultado.textContent = `Sua velocidade atual é: ${velocidade}km/h. Você ultrapassou o limite máximo de 60 km/h. Reduza a velocidade!!`;
  }
}
// letra d
// função para calcular o salário
function CalculaSalario() {
  const input = document.getElementById("numero").value;
  validarEntrada(input);
  let aumento, novoSalario;
  // casting
  const salario = parseFloat(input.value);
  if (isNaN(salario) || salario < 0) {
    resultado.textContent = "Informe um valor válido.";
  } else if (salario < 1000) {
    aumento = 0.1;
  } else if (salario > 1500) {
    aumento = 0.05;
  } else {
    aumento = 0;
  }
  novoSalario = salario * aumento + salario;
  resultado.textContent = `O valor do novo salário é R$${novoSalario} reais`;
}

// letra e
// função para calcular o valor da passagem
function CalculaPassagem() {
  const input = document.getElementById("numero").value;
  validarEntrada(input);
  let valorFinal, valorUnitario;
  //casting
  const distancia = parseInt(input.value);
  if (isNaN(distancia) || distancia < 0) {
    resultado.textContent = "Informe um valor válido.";
  } else if (distancia < 200) {
    valorUnitario = 0.7;
  } else if (distancia >= 200) {
    valorUnitario = 0.4;
  }
  valorFinal = distancia * valorUnitario;
  resultado.textContent = `Prezado cliente, o valor da sua passagem para ${distancia} km a serem percorridos é de R$${valorFinal} reais.`;
}

// letra f
// função para calcular se o ano é bissexto
function CalculaBissexto(){
    const input = document.getElementById('numero').value;
    validarEntrada(input);
    //casting
    const ano = parseInt(input.value);
    if (isNaN(ano) || ano < 0) {
    resultado.textContent = "Informe um valor válido.";
    }
    else if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        resultado.textContent = `O ano ${ano} é bissexto!`;
    }
    else{
        resultado.textContent = `O ano ${ano} não é bissexto!`;
    }    
}

// letra g
// função para verificar se 3 segmentos de reta formam um triângulo
function VerificaTriangulo(){
    const input1 = document.getElementById('segmento1');
    const input2 = document.getElementById('segmento2');
    const input3 = document.getElementById('segmento3');
    // casting
    const segmento1 = parseFloat(input1.value);
    const segmento2 = parseFloat(input2.value);
    const segmento3 = parseFloat(input3.value);

    //verificando valores invalidos
    if (segmento1 <= 0){
        resultado.textContent = "O valor informado para o primeiro segmento é inválido. Informe um valor maior que zero.";   
    }else if(segmento2 <= 0){
        resultado.textContent = "O valor informado para o segundo segmento é inválido. Informe um valor maior que zero.";   
    }else if(segmento3 <= 0){
        resultado.textContent = "O valor informado para o terceiro segmento é inválido. Informe um valor maior que zero.";   
    }else if (segmento1 < segmento2 + segmento3 && segmento2 < segmento1 + segmento3 && segmento3 < segmento2 + segmento1){
        resultado.textContent = "É um triângulo";
    }else{
        resultado.textContent = "Não é um triângulo";
    }
}

// letra h
// função para calcular raízes de equação quadrática
function CalculaRaizes(){
    const inputa = document.getElementById('a');
    const inputb = document.getElementById('b');
    const inputc = document.getElementById('c');
    let delta, x1, x2;

    // casting
    const a = parseInt(inputa.value);
    const b = parseInt(inputb.value);
    const c = parseInt(inputc.value);

    if (a != 0){
        delta = (b**2)-(4*a*c);
        if (delta > 0){
            x1 = (- b + (delta) ** 0.5)/ (2*a);
            x2 = (- b - (delta) ** 0.5)/ (2*a);
            resultado.textContent = `
            A raízes da expressão ${a}𝑥²${b}𝑥+${c} são: ${x1} e ${x2}.`;
        }else{
            resultado.textContent = "A equação não possui raízes reais.";
        }
    }else{
        resultado.textContent = "O valor de a não pode ser zero.";
    }
}
