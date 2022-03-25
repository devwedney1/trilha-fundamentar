// 1. Declare uma variável de nome weight
//let weight

// 2. QUe tipo de dado é a variável acima ?

//console.log(typeof weight)

/* 

    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: boolean
        


*/

//let name = "Lucas"
//let age = 23
//let stars = 23.5
//let isSubscribed = true


/* 

    4. A variável student abaixo é de que tipo de dados ?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> Kg.

        Atenção, substiua <name> <age> e <weight> pelos valores de cada propriedade do objeto

*/

let student = {
    name: "Lucas",
    age: 23,
    weight: 73.2,
    isSubscribed: true
}

//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg.`)

/* 
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

*/

let students = []


/*

    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e coloca o objeto, mas usar o objeto criado e inserir ele no Array)

*/

sutdents = [
    student
]

console.log(student)

/* 
    7. Coloque no console o valor da posição zero do Array acima

*/

//console.log(students[0])

/* 

    8. Crie um novo student e coloque na posição 1 do Array students

*/

const Wedney = {
    name: "Alves",
    age: 22,
    weight: 77,
    isSubscribed: true
}

students[1] = Wedney

console.log(students)

/* 

    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1

*/

console.log(a)
var a = 1
