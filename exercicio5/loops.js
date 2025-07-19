const number = 7;
for (let i = 1; i <= 10; i++) {
  const resultado = number * i;
  console.log(`${number} x ${i} = ${resultado}`);
}

const numbers = [10, 20, 30, 40];
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
  soma = soma + numbers[i];
}
console.log("O resultado da soma é:", soma);

const valores = [12, 5, 3, 10, 4, 50];
let menor = valores[0];
for (let i = 1; i < valores.length; i++) {
  if (valores[i] < menor) {
    menor = valores[i];
  }
}

console.log("O menor valor no grupo é:", menor);
