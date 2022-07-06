import getHeroById from './bases/08-importYexport'

//promesas

const promesa = new Promise((resolve, reject) => {
    
    const heroe = getHeroById();
    resolve(heroe)
    
});

promesa.then((heroe) => {
    console.log(heroe);
})