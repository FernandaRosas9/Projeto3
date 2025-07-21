// c) Crie uma verificação que diga se uma pessoa pode dirigir 
// (precisa ser maior de idade E ter habilitação)

let idade = 18; //precisa ser maior de idade
let temHabilitação = true; // precisa ter habilitação

//Verificação pra saber se a pessoa pode dirigir
if (idade >= 18 && temHabilitação) {
    console.log ("Pode dirigir");
} else {
    console.log ("Não pode dirigir");
}