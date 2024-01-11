//Verificar si un número es par o impar

const número = 2;

switch (número %2){
    case 0:     console.log("El número es par");
        break;
        case 1:
            console.log("El número es impar");
            break;
            default:     console.log("El dato no es válido");
}