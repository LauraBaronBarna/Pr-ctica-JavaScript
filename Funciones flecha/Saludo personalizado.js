//Crear un programa que me permita generar un saludo personalizado

const generarSaludo = (nombre,edad) => {
    const mensaje = 'Hola ${nombre} tienes ${edad} años';
    return mensaje;
}

const saludoPersonalizado =generarSaludo ("Laura",23);
console.log(saludoPersonalizado);