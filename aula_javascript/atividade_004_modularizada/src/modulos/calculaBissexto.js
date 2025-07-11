
import { voltar } from "../utils/utils";
// letra f
// função para calcular se o ano é bissexto
export function CalculaBissexto(ano) {
  
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