/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C 

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

let grade = 101
let gradeA = grade >= 90 && grade <= 100
let gradeB = grade >= 80 && grade <= 89
let gradeC = grade >= 70 && grade <= 79
let gradeD = grade >= 60 && grade <= 69
let gradeF = grade < 60

let gradeFinal;

if(gradeA) {
    gradeFinal = "A"
} else if(gradeB) {
    gradeFinal = "B"
} else if(gradeC) {
    gradeFinal = "C"
} else if(gradeD) {
    gradeFinal = "D"
} else if(gradeF) {
    gradeFinal = "F"
} else {
    gradeFinal = "Nota inválida"
}

console.log(gradeFinal)