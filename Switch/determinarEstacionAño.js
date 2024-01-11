//Determinar la estación del año

//Inicializar la variable y asignarle un dato
const mes = 8

//Inicializar el menú, true indica que si hay un dato, proseguir
switch(true)
{
    case mes >= 3 && mes <=5: // && and
        console.log("Primavera");
        break;
    case mes >= 6 && mes <=8:
        console.log("Verano");
        break;
    case mes >= 9 && mes <=11:
        console.log("Otoño");
        break;
    case mes == 12 || mes >= 1 && mes <=2: // || or
        console.log("Invierno");
        break;
        default:
            console.log("Opción inválida, ingresa un valor correcto");
}