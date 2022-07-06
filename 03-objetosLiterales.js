console.log("hola");
//objetos literales

const persona = {
    nombre : 'Tony',
    apellido : 'Cels',
    edad : 45,
    direccion : {
        ciudad : "New york",
        zip: 123123123
    }
};

//console.log({persona});
console.log(persona)

//mutacion del estado de la app. 
//copia de la referencia, no está duplicando el objeto. Ambos son el mismo objeto
const persona2 = persona;

//... operador spread
//para crear un clon. Ahora, persona3 y persona son objetos distintos
const persona3 = { ...persona }
