// Verifique se um número é par ou ímpar

const numero = 23;
verificaParImpar(numero);

function verificaParImpar(numero) {
  if (numero % 2 === 0) {
    console.log("O número " + numero + " é par.");
  } else {
    console.log("O número " + numero + " é ímpar.");
  }
}
