const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

console.log('-------------------------------');

// Exercício A: Calculando a média das notas
const averageGrades = students.map(value => (value.grades.reduce((total, num) => total + num, 0) / 3));
for(let i = 0; i < students.length; i++) {
    console.log(`${students[i].name}, média: ${averageGrades[i].toFixed(1)}`);
}
console.log('-------------------------------');

// Exercício B: Determinando a aprovação
for(let i = 0; i < students.length; i++) {
    console.log(`${students[i].name}: ${averageGrades[i] >= 70 ? 'Aprovado(a)' : 'Reprovado(a)'}`);
}
console.log('-------------------------------');

// Exercício C: Contando aprovados e reprovados
let approved = 0;
let unapproved = 0;
for(const student of students) {
    let averageGrade = (student.grades.reduce((total, num) => total + num, 0) / 3);
    if(averageGrade < 70) {
        unapproved++;
    } else {
        approved++;
    }
}
console.log(`Aprovados: ${approved}; Reprovados: ${unapproved}.`);
console.log('-------------------------------');

// Exercício D: Encontrando a maior média
console.log("Maior média: " + Math.max(...students.map(value => Number((value.grades.reduce((total, num) => total + num, 0) / 3).toFixed(1)))));
console.log('-------------------------------');

// Exercício E: Calcule a média geral da Turma
console.log("Média geral: " + (averageGrades.reduce((total, num) => total + num, 0) / 5).toFixed(1));
console.log('-------------------------------');