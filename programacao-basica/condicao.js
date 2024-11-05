let dayOfTheWeek = (day) => {
    switch (day) {
        case 1:
            return 'Sunday'
        case 2:
            return 'Monday'
        default:
            return 'Another day'
    }
}

console.log(dayOfTheWeek(1))

let numberCheck = (num) => {
    if (num > 0) {
        return 'Número positivo'
    } else if (num < 0) {
        return 'Número negativo'
    } else {
        return 'Número 0'
    }
}

console.log(numberCheck(10))


let compararNumeros = (num1, num2) => {
    if (num1 < num2) {
        return 'Número 2 é maior'
    } else if (num1 === num2) {
        return 'Os números são iguais'
    } else {
        return 'Número 1 é maior'
    }
}

console.log(compararNumeros(10, 10))

let x = 2
let y = 2

if (x == y) {
    console.log('As variáveis são iguais')
} else {
    console.log('As variáveis são diferentes')
}

let idade = 17

if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}