const resultado = document.getElementById("resultado");

//capturando os botoes

const letras = document.querySelectorAll(".letra");

//escutando os eventos

letras.forEach((letra) => {
  // percorre cada botao dentro da lista
  letra.addEventListener("click", () => {
    //cada botao na lista de botoes tera um evento escutador
    //ao click vai executar a função anonima que chama a função criarFormulario()
    escolherOpcao(letra.id); // id do botao que esta no html
  });
});

//menu
function escolherOpcao(letraId) {
  switch (letraId) {
    case "letraA":
      criarFormulario(1, function(lista){
        const number = lista[0];
        VerificaPar(number);
      });      
      break;
    case "letraB": //3
      criarFormulario(3, function(lista){
        VerificaNumero(lista);//pega todo mundo da lista
      });
      break;
    case "letraC":
      criarFormulario(1, function(lista){
        const number = lista[0];
        VerificaVelocidade(number);
      });
      break;
    case "letraD":
      criarFormulario(1, function(lista){
        const number = lista[0];
        CalculaSalario(number);
      });
      break;
    case "letraE":
      criarFormulario(1, function(lista){
        const number = lista[0];
        CalculaPassagem(number);
      });
      break;
    case "letraF":
      criarFormulario(1, function(lista){
        const number = lista[0];
        CalculaBissexto(number);
      });
      break;
    case "letraG":
      criarFormulario(3, function(lista){
        VerificaTriangulo(lista); //3
      });
      break;
    case "letraH":
      criarFormulario(3, function(lista){
        CalculaRaizes(lista); //3
      });
      break;
  }
}

// criando o formulario
function criarFormulario(quantidade, retorno) {
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

// FUNÇÕES

// validar entrada
function validarEntrada(entrada) {
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
function voltar(){
  const voltar = document.getElementById("voltar");
  voltar.innerHTML = `<a href = "#topo" class = "botao-voltar">Voltar</a>
  `;
}
// letra a
// função para verificar se é par ou ímpar
function VerificaPar(numero) {


  if (numero % 2 == 0) {
    resultado.textContent = "Numero par.";
    voltar();

  }
  if (numero % 2 != 0) {
    resultado.textContent = "Número ímpar.";
    voltar();
  }
}

// letra b
// função para verificar se o numero é maior, menor ou igual
function VerificaNumero(lista) {
  const [primeiro, segundo, terceiro] = lista;
  
 
  let maior = primeiro;
  let menor = segundo;

  if (segundo > maior) {
    maior = segundo;
  }
  if (terceiro > maior) {
    maior = terceiro;
  }
  if (segundo < menor) {
    menor = segundo;
  }
  if (terceiro < menor) {
    menor = terceiro;
  }

  if (primeiro == segundo && segundo == terceiro) {
    resultado.textContent = "Os números informados são iguais";
    voltar();
  } else {
    resultado.innerHTML = `Maior número: ${maior}<br>
    Menor número: ${menor}`;
    voltar();
  }
}
// letra c
// função para verificar se o veiculo esta acima da velocidade
function VerificaVelocidade(velocidade) {  
 
  if (velocidade < 60) {
    resultado.textContent = `Sua velocidade atual é: ${velocidade}km/h. Continue dentro do limite de 60 km/h estabelecido.`;
    voltar();
  } else if (velocidade == 60) {
    resultado.textContent = `Sua velocidade atual é: ${velocidade}km/h. Este é o limite máximo estabelecido. Cuidado!!`;
    voltar();
  } else {
    resultado.textContent = `Sua velocidade atual é: ${velocidade}km/h. Você ultrapassou o limite máximo de 60 km/h. Reduza a velocidade!!`;
    voltar();
  }
}
// letra d
// função para calcular o salário
function CalculaSalario(salario) {
  
  let aumento, novoSalario;

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
  resultado.textContent = `O valor do novo salário é R$ ${novoSalario.toFixed(2)} reais`;
  voltar();
}

// letra e
// função para calcular o valor da passagem
function CalculaPassagem(distancia) {
  
  let valorFinal, valorUnitario;
  
  if (isNaN(distancia) || distancia < 0) {
    resultado.textContent = "Informe um valor válido.";
  } else if (distancia < 200) {
    valorUnitario = 0.7;
  } else if (distancia >= 200) {
    valorUnitario = 0.4;
  }
  valorFinal = distancia * valorUnitario;
  resultado.textContent = `Prezado cliente, o valor da sua passagem para ${distancia} km a serem percorridos é de R$${valorFinal} reais.`;
  voltar();
}

// letra f
// função para calcular se o ano é bissexto
function CalculaBissexto(ano) {
  
  if (isNaN(ano) || ano < 0) {
    resultado.textContent = "Informe um valor válido.";
  } else if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    resultado.textContent = `O ano ${ano} é bissexto!`;
    voltar();
  } else {
    resultado.textContent = `O ano ${ano} não é bissexto!`;
    voltar();
  }
}

// letra g
// função para verificar se 3 segmentos de reta formam um triângulo
function VerificaTriangulo(lista) {
    //verificando valores invalidos
  const [a, b, c] = lista;

  if(a <= 0 || b <= 0 || c <= 0){
    resultado.textContent =
      "O valor informado é inválido. Informe um valor maior que zero.";
      return;
  }
  if (a < b + c && b < a + c && c < b + a){
    resultado.textContent = "É um triângulo";
    voltar();
  }else {
    resultado.textContent = "Não é um triângulo";
    voltar();
  }
}

// letra h
// função para calcular raízes de equação quadrática
function CalculaRaizes(lista) {  
  const [a, b, c] = lista;

  if (a != 0) {
    delta = b ** 2 - 4 * a * c;
    if (delta > 0) {
      x1 = (-b + delta ** 0.5) / (2 * a);
      x2 = (-b - delta ** 0.5) / (2 * a);
      resultado.textContent = `
            A raízes da expressão ${a}𝑥²${b}𝑥+${c} são: ${x1} e ${x2}.`;
            voltar();
    } else {
      resultado.textContent = "A equação não possui raízes reais.";
      voltar();
    }
  } else {
    resultado.textContent = "O valor de a não pode ser zero.";
    voltar();
  }
}
