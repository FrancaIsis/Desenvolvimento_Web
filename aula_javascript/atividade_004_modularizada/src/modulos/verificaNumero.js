import { voltar } from "../utils/utils";
export function VerificaNumero(lista) {
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