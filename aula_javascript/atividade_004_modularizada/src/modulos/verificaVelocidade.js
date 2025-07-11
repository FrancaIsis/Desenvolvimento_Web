import { voltar } from "../utils/utils";
export function VerificaVelocidade(velocidade) {  
 
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