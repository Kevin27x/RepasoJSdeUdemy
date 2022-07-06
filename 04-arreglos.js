console.log("hola");
//Arreglos: Coleccion de información denrtro de una misma variable

const arreglo = [1,2,3,4];
//arreglo.push(1)
//arreglo.push(2)
//arreglo.push(4)


//... operador spread
let arreglo2 = [...arreglo, 5];
//arreglo2.push(5)
//console.log(arreglo2)


//map(callback(contenido, indice, array))
//itera el arreglo, pero crea uno nuevo
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
} );
console.log(arreglo3);

