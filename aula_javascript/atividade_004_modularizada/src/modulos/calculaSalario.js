import { voltar } from "../utils/utils";
// letra d
// função para calcular o salário
export function CalculaSalario(salario) {
  
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