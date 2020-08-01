export const getGifs = async( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=IPRAcVAr73zVQhl4wni8Ga3F5OSGO81g`;
    const resp = await fetch(url);
    if(resp.ok){
        const { data } = await resp.json();

        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        return gifs;
    }
};