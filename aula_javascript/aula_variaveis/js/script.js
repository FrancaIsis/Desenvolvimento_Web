//Exemplo com var
var x = 10;
var x = 20;// declaração permitida
console.log(x);// resultado: 20

// Exemplo com let
let y = 30;
// let y = 40; //Erro: redeclaração não permitida
y = 40; // Reatribuição permitida
console.log(y); //Resultado:40

// Exemplo com const
const z = 50;
// z = 60; //Erro: reatribuição nao permitida
console.log(z); // resultado 50

// escopo de bloco (diferença entre var e let/const)
{
    var a = 1;//vaza para fora do bloco
    let b = 2;// restrita ao bloco
    const c = 3;// restrita ao bloco
}
console.log(a);//1
//console.log(b);//erro
//console.log(c);//erro
