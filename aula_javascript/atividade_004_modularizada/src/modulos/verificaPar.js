
import { voltar } from "../utils/utils";
export function VerificaPar(numero) {


  if (numero % 2 == 0) {
    resultado.textContent = "Numero par.";
    voltar();

  }
  if (numero % 2 != 0) {
    resultado.textContent = "Número ímpar.";
    voltar();
  }
}