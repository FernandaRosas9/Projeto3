// Criar um sistema de classificação de notas!- 0-59: F |- 60-69: D | - 70-79: C | - 80-89: B |- 90-100: A

const nota = 87;
classificarNota(nota);

function classificarNota(nota) {
    if (nota >= 90 && nota <= 100) { 
        console.log("Tirou A"); 
    }
    else if (nota >= 80 && nota <= 89) {
        console.log("Tirou B"); 
    }
    else if (nota >= 70 && nota <= 79) {
        console.log("Tirou C"); 
    }   
    else if (nota >= 60 && nota <= 69) {
        console.log("Tirou D"); 
    }
    else if (nota >= 0 && nota <= 59) {
        console.log("Tirou F"); 
    }
    else {
        console.log("Nota inválida");
    }
}

