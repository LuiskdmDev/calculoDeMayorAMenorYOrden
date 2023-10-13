const prompt = require('prompt-sync')();
//No cambiar el nombre de la función ordenarNumeros
console.log("Este programa te ayudará a identificar que posición tienen los números en una lista ordenada de mayor a menor. ")



let numeroUno= parseInt(prompt("Ingresa el primer n°: "));
let numeroDos= parseInt(prompt("Ingresa tu segundo n°: "));

let numeroTres= parseInt(prompt("Ingresa tu tercer n°: "));

    
  

function ordenarNumeros(num1, num2, num3) {
  let mayor, centro, menor;

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("No ingresaste cifras válidas.");
    return null;
  }

  if (num1 === num2 && num2 === num3) {
    return "Los números son iguales";
  }

  if (num1 > num2 && num2 > num3) {
    mayor = num1;
    centro = num2;
    menor = num3;
  } else if (num2 > num3 && num3 > num1) {
    mayor = num2;
    centro = num3;
    menor = num1;
  } else if (num3 > num1 && num1 > num2) {
    mayor = num3;
    centro = num1;
    menor = num2;
  } else if (num1 > num3 && num3 > num2) {
    mayor = num1;
    centro = num3;
    menor = num2;
  } else if (num2 > num1 && num1 > num3) {
    mayor = num2;
    centro = num1;
    menor = num3;
  } else if (num3 > num2 && num2 > num1) {
    mayor = num3;
    centro = num2;
    menor = num1;
  } else {
    mayor = num1;
    centro = num2;
    menor = num3;
  }

  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}

module.exports = ordenarNumeros;

const resultado = ordenarNumeros(numeroUno, numeroDos, numeroTres);
if (numeroUno === numeroDos && numeroTres === numeroDos) {
  console.log(resultado);
} else if (numeroUno === numeroDos){
  console.log("Tienes 2 n° iguales: ", numeroUno)
} else if(numeroTres === numeroDos){
  console.log("Tienes 2 n° iguales: ", numeroTres)
} else if(numeroUno === numeroTres){
  console.log("Tienes 2 n° iguales: ", numeroUno)
} else {
  console.log("¿Que deseas saber?")
  console.log("a) Muestrame sólo el n° mayor")
  console.log("b) Muestrame sólo el n° central")
  console.log("c) Muestrame sólo el n° menor")
  console.log("d) ordename de menor a mayor")
  console.log("e) ordename de mayor a menor")
  let orden = prompt("Ingresa tu respuesta: ").toLowerCase();
  if (orden === "a") {
  console.log(`El n° mayor es: ${resultado.mayor}`)
  } else if (orden === "b"){
    console.log(`El n° central es: ${resultado.centro}`)
  } else if (orden === "c"){
    console.log(`El n° menor es: ${resultado.menor}`)
  } else if (orden === "d"){
    console.log(`Tus n° ordenados de mayor a menor son ${resultado.ordenMayorAMenor}`)
  } else if (orden === "e"){
    console.log(`Tus n° ordenados de menor a mayor son ${resultado.ordenMenorAMayor}`)
  } else{
    console.log("No pusiste una alternativa valida")
  }}