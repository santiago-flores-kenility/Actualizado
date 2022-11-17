function calcular(operando1, operando2, operacion) {
    if (isNaN(operando1 || operando2)) return "Alguno de los operadores no es un número"
    switch (operacion) {
        case "suma":
            return suma(operando1, operando2)
            break;
        case "resta":
            return resta(operando1, operando2)
            break;
        case "multiplicacion":
            return multiplicacion(operando1, operando2)
            break;
        case "division":
            return division(operando1, operando2)
            break;
        default:
            return "Está mal escrita la operacion"
            break;
    }
}

function suma(op1, op2) {
    return op1 + op2
}

function resta(op1, op2) {
    return op1 - op2
}

function multiplicacion(op1, op2) {
    return op1 * op2
}

function division(op1, op2) {
    return  (op2==0)?"No se puede dividir por cero":op1 / op2
}

console.log(calcular(5, 4, "suma"));
console.log(calcular("EE", 4, "resta"));
console.log(calcular(5, 4, "multiplicac"));
console.log(calcular(5, 0, "division"));
console.log(calcular());
