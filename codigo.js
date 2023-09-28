/*Ejercicio 1:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase*/


function contarCaracteres() { //Nombramos la funcion
    const frase = prompt("Ingresar una frase: ") //Pedimos la frase
    const caracter = prompt("Ingresar caracter a contar: ") //Pedimos el caracter a contar

    let contador = 0; //Inicializamos el contador
    for (let i = 0; i < frase.length; i++) { //Recorremos la frase

        if (frase[i] === caracter) //  Si en la frase hay caracteres iguales
        contador++;//Incrementamos el contador
    }
    return contador; //Retornamos el contador
}

contarCaracteres(); // Llamamos a la función


/*Ejercicio 2:
Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números*/

function contarImpares(numero) { //Nombramos la funcion

    let contador = 0;   //Inicializamos el contador
    while (contador < 50) { //Recorremos el número
        if (numero % 2 !== 0) { //Si el número es impar
            console.log(numero); //Imprimimos el número
            contador++; //Incrementamos el contador
        }
        numero++; //Incrementamos el número
    }
}

const pedirNumero = parseInt(prompt("Ingresa un número:")); //Pedimos un número y que lo pase a entero

contarImpares(pedirNumero); // Llamamos a la función

