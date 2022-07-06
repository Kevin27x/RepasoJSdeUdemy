//importar data
import heroes, { arrAleatorio } from './data/heroes';
console.log(arrAleatorio)
console.log(heroes);
//buscar un elemento dentro de un arreglo. con métoodo find. 
//Capturamos un único elemento
const getHeroById = (id) => heroes.find(e => e.id === id);

const hero = getHeroById(2);
console.log(hero)

//uso de filter. Filtramos un conjunto de elementos.

const getHeroesByOwner = (owner) => heroes.filter( e => e.owner === owner);

const arrOwner = getHeroesByOwner('DC');
console.log(arrOwner)

export default getHeroById;

