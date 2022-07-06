const apiKey = 'tS1N0dQ9sSW5HRq3m7HO4QLt79MNBLAL';
//fetch retorna una promesa
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
console.log("ad")
peticion
    .then(res => res.json())
    .then( ( {data } ) => {
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
    .catch( e => console.warn(e))