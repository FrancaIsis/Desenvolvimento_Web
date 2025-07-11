import { voltar } from "../utils/utils";
// letra e
// função para calcular o valor da passagem
export function CalculaPassagem(distancia) {
  
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
