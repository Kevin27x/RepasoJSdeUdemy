console.log("hola");
//Desestructuracion de arreglos o
//Asignacion desestructurante de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letra, numeros] = retornaArreglo();
console.log(letra, numeros);

//tarea

const useState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}]
};

const arr = useState('Adios');
console.log(arr)