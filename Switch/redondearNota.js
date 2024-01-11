// Crear un programa que me permita redondear la nota final de un estudiante

const nota = 5.5;
//const notaRedondeada = Math.round(nota);
// Redondear la nota  aun solo digito
const notaRedondeada = nota.toFixed(1);

console.log("La nota que redondeada es: ", notaRedondeada);

switch(true) {
    case notaRedondeada >=0 && notaRedondeada <=2:
        console.log("Perdiste la materia, repitela el otro semestre");
        break;
        case notaRedondeada >= 3 && notaRedondeada <=5:
            console.log("Pasaste la materia, felicitaciones !!!");
            break;
            default:
                console.log("Ingresa una nota vÃ¡lida al programa");
}