console.log("hola");
//Desestructuracion o
//Asignacion desestructurante

const persona = {
    nombre: "Keivn",
    edad: 27
};

console.log( persona.nombre, persona.edad );

const {nombre, edad} = persona;
console.log(nombre, edad);
//
const retornaPersona = ({nombre, edad}) => {
    console.log('Desestructuración dentro del argumento de una función', nombre, edad )
};

retornaPersona(persona);


//muy utilizado
/*
const useContext = ({nombre, edad, rango = "capitan"}) => 
    {
        return {
        nombree: nombre,
        anios: edad,
        rango: rango
    }
};
const {nombree, anios, rango} = useContext(persona);
console.log(nombree, anios, rango)*/

