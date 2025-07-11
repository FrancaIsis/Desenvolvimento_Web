import { voltar } from "../utils/utils";
// letra g
// função para verificar se 3 segmentos de reta formam um triângulo
export function VerificaTriangulo(lista) {
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