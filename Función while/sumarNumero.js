//Crear un programa que me permita sumar números hasta que la suma sea mayor

//Inicializar la valiable suma en 0
let suma = 0;
//inicializar el primer número
let numero = 1;
//mientas que la suma actual sea menor o igual a 50
while(suma<=50) {
     //Agregamos el número actual a la suma
    suma +=numero;
    //Incrementar el número actual en 1 para obtener el siguiente número
    numero ++;
}
console.log("La suma de números hasta que sea mayor a 50 es de: " + suma)