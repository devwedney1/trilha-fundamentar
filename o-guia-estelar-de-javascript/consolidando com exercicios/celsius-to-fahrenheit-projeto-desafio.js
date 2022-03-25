/* ### Celsius em fahrenheit

Crie uma função que receba um string em celsius ou fahrenheit e façaa a transformação de uma unidade para outra

c = (F - 32) * 5/9
F = C * 9/5 + 32

Função adicionado por me para praticar

*/
// transformDegree(50F)

function transformDegree(value, degreeInput, degreeOutput) {
    const celsiusExist = degreeInput.toUpperCase().includes('C')
    const fahrenheitExist = degreeInput.toUpperCase().includes('F')
    const kelvinExist = degreeInput.toUpperCase().includes('K')

    let formula
   
    // Fluxo de erro -> Desvio condicional 
    if(!celsiusExist && !fahrenheitExist && !kelvinExist) {
       throw new Error('Grau não identificado')
    }

    if (fahrenheitExist) {
        formula = (fahrenheit, output) => (output == 'C') ? (fahrenheit - 32) * 5/9 : ((fahrenheit - 32) * 5/9) + 273.15
    }

    if (celsiusExist) {
        formula = (celsius, output) => (output == 'F') ? celsius * 9/5 + 32 : celsius + 273.15
    }

    if (kelvinExist) {
        formula = (kelvin, output) => (output == 'F') ? ((kelvin - 273.15) * 9/5 + 32) : (kelvin - 273.15) 
    }

    return formula(Number(value), degreeOutput.toUpperCase()) + degreeOutput.toUpperCase()
}


try{
    console.log(transformDegree('50', 'F', 'K'))
    console.log(transformDegree('10', 'C', 'K'))
    console.log(transformDegree('50', 'K,','C'))
    transformDegree('50', 'Z', 'L')
}catch (Error) {
    console.log(Error.message)
}