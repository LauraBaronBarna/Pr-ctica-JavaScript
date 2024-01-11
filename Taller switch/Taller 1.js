//Implementa una función que acepte una cadena de texto representando una fruta y utilice un switch para imprimir un mensaje indicando si es una fruta tropical o no.

const fruta = "lulo";

switch (true){
    case fruta == "maracuyá" || fruta == "lulo"||fruta == "kiwi"||fruta == "papaya"||fruta == "guanábana":
        console.log("Es una fruta tropical");
        break;
        default: console.log("No es una fruta tropical");
}