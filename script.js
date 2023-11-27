// Função tradicional sem parâmetros
function saudacao() {
  console.log("Olá! Bem-vindo à calculadora.");
}

// Função tradicional com parâmetros e retorno de valor
function somar(a, b) {
  return a + b;
}

// Arrow function com parâmetros que retorna um valor
const multiplicar = (a, b) => a * b;

// Utilizando as funções de forma lógica (exemplo de calculadora)
saudacao();

var numero1 = 10;
var numero2 = 5;

var resultadoSoma = somar(numero1, numero2);
console.log(`A soma de ${numero1} e ${numero2} é: ${resultadoSoma}`);

var resultadoMultiplicacao = multiplicar(numero1, numero2);
console.log(`O produto de ${numero1} e ${numero2} é: ${resultadoMultiplicacao}`);
