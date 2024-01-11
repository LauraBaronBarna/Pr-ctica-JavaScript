//Escribe una función que tome un número del 1 al 12 como parámetro y, mediante un switch, devuelva la cantidad de días que tiene el mes correspondiente.

const mes = 12;

switch (true) {
    case mes >=1 && mes <=7 && mes%2 == 0 && mes!==2:
        console.log("El mes tiene 30 días");
        break;
        case mes >=1 && mes <=7 && mes %2 !== 0 && mes !==2:
            console.log("El mes tiene 31 días");
            break;
            case mes== 2:
                console.log("El mes tiene 29 días cada 4 años");
                break;
                case mes >=8 && mes <=12 && mes%2 == 0 && mes !==2:
                    console.log("El mes tiene 31 días");
                    break;
                    case mes >=8 && mes <=12 && mes%2 !== 0 && mes!==2:
                        console.log("El mes tiene 30 días");
                        break;
                default: console.log("Número no válido, ingresa un número de 1 a 12");
            
}

