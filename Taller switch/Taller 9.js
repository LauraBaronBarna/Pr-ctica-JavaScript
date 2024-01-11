//Diseña una función que tome un tipo de transporte (como "coche", "bicicleta", "autobús") y, mediante un switch, devuelva la velocidad máxima permitida en una zona urbana.

const transporte = Coche;

switch (true){
    case "Coche":        
        console.log("La velocidad máxima es de 80");
        break;
        case "Bicicleta":
            console.log("La velocidad máxima es de 30");
            break;
            case "Bus":
                console.log("La velocidad máxima es de 50");
                break;
                default: console.log("Ingresa otro vehículo");
}