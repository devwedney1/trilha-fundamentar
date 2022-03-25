/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receita: []
    * despesas: []

Agora, crie um função que irá calular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [1222, 200, 300],
    expenditure: [2000, 3000, 22]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total

}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calcultateExpenditure = sum(family.expenditure)

    const total = calculateIncomes - calcultateExpenditure

    const istOk = total >= 0

    let balanceText = "Negativo"

    if (istOk) {
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total}`)
}

calculateBalance()