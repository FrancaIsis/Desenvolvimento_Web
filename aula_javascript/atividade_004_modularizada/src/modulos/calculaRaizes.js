import { voltar } from "../utils/utils";
// letra h
// função para calcular raízes de equação quadrática
export function CalculaRaizes(lista) {  
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