//Crea una función que reciba un código de país (por ejemplo, "USA", "ESP", "FRA") y utilice un switch para imprimir el idioma oficial correspondiente a ese país.

const país = "FRN";

switch (true){
    case país == "USA":
        console.log("El idioma es inglés");
        break;
        case país == "ESP" || país == "COL" ||país == "MEX":
            console.log("El idioma es español");
            break;
            case país == "FRN":
                console.log("El idioma es francés");
                break;
                default: console.log("País no válido, ingresa otro código");

}