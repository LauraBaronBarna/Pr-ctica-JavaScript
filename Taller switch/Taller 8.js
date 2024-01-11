//Elabora una función en JavaScript que reciba una categoría de producto (por ejemplo, "electrónica", "ropa", "alimentación") y utilice un switch para imprimir un mensaje indicando la sección del supermercado donde encontrar ese tipo de producto.

const categoría =Ropa;

switch (true){
    case "Ropa":       
        console.log("Se encuentra en el segundo piso");
        break;
        case "Electrónica":
            console.log("Se encuentra en el sótano");
            break;
            case "Alimentación":
                console.log("Se encuentra en el primer piso");
                break;
                default: console.log("Ingresa otra categoría");
}