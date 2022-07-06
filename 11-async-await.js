const getImagen = async() => {
    const apiKey = 'tS1N0dQ9sSW5HRq3m7HO4QLt79MNBLAL';
    const data = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const respuesta = await data.json();
    return respuesta;
}

getImagen().then( ({data}) => {
    try {
        const {url} = (data.images.original);
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img)
    } catch (e) {
        console.error(e)
    }
});

