/* ### Celsius em fahrenheit

Crie uma função que receba um string em celsius ou fahrenheit e façaa a transformação de uma unidade para outra

c = (F - 32) * 5/9
F = C * 9/5 + 32

Função adicionado por me para praticar

*/
// transformDegree(50F)
function transformDegree(degree) {
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    if(!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado')
    }

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fharenheit => (fharenheit - 32) * 5/9
    let degreeSign = 'C'

    if(celsiusExist) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try{
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50z')
}catch(error){
    console.log(error.message)
}