// realizar os imports
import { criarFormulario } from "./utils/utils";
import { VerificaPar } from "./modulos/verificaPar";
import {VerificaNumero} from "./modulos/verificaNumero";
import {VerificaVelocidade} from "./modulos/verificaVelocidade";
import {CalculaSalario} from "./modulos/calculaSalario";
import {CalculaPassagem} from "./modulos/calculaPassagem";
import {CalculaBissexto} from "./modulos/calculaBissexto";
import {VerificaTriangulo} from "./modulos/verificaTriangulo";
import { CalculaRaizes } from "./modulos/calculaRaizes";

//capturando os elementos

const resultado = document.getElementById("resultado");
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

//função que chama os eventos

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

function init(){
    escolherOpcao();
}

init();