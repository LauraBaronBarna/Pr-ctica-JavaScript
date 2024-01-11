//Escribe una función que acepte una marca de automóvil como parámetro y, mediante un switch, retorne el país de origen de esa marca.   

const marca = "Ferrari";

switch (true){
    case marca == "Ferrari" || marca == "Apollo" || marca == "FIAT":
        console.log("El país de origen es Italia");
        break;
        case marca == "Honda" || marca == "Nissan":
            console.log("El país de origen es Japón");
            break;
            default: console.log("Ingresa otra marca");
}