//Diseña una función en JavaScript que tome un tipo de animal como parámetro y utilice un switch para devolver el sonido característico de ese animal.

const animal = "perro";

switch (true){
    case animal == "león":
        console.log("rawr");
        break;
        case animal == "gato":
            console.log("meow");
            break;
            case animal == "perro":
                console.log("woof");
                break;
                default: console.log("Animal no válido, ingresa otro");
}