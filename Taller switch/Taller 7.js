//Crea una función que reciba una fruta como argumento y utilice un switch para determinar si es una fruta de hueso, de pepita o de cáscara.

const fruta = "Durazno";

switch (true){
    case fruta == "Durazno" || fruta == "Cereza" || fruta == "Ciruela":
        console.log("Es fruta de hueso");
        break;
        case fruta == "Sandía" || fruta == "Uvas":
            console.log("Es fruta de pepitas");
            break;
            case fruta == "Granadilla":
                console.log("Es fruta de cáscara"); 
                break;
                default: console.log("Ingresa otra fruta");
}