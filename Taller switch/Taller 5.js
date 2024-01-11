//Desarrolla una función que reciba un nombre de color como argumento y, mediante un switch, imprima un mensaje indicando si es un color primario o secundario.

const color = "amarillo";

switch (true){
    case color == "amarillo" || color == "azul" || color == "rojo":
        console.log("Es un color primario");
        break;
        case color == "verde" || color == "morado" || color == "rosado":
            console.log("Es un color secundario");
            break;
            default: console.log("Escoge otro color");

}