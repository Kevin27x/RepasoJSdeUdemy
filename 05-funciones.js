console.log("hola");
//funciones

function saludar(nombre){
    return `Hola, ${nombre}`;
};

console.log( saludar('goku') )


//si guardamos la funcion dentrro de una const, evitamos que el nombre de la función sea "aplastado" por una variable con mismo nombre

const saludar2 = function (nombre) {
    return `Hola, ${nombre}`;
}
console.log( saludar2 );

//funciones flecha

const saludar3 = (nombre) => `hola ${nombre}`;
console.log(saludar3("kevin"));

//tarea: 
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');

console.log(usuarioActivo);

//tarea hecha
const getUsuarioActivo2 = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre
    }
)

console.log(getUsuarioActivo2('Kevin'));