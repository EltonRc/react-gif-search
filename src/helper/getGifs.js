export const apiGifs = async(categoria) =>{
    const url= `https://api.giphy.com/v1/gifs/search?api_key=mm86qsXuJSpQRIHVdJMCx17vGmfJoV8D&q=${categoria}&limit=20`;
    const rpta = await fetch(url);
    const {data} = await rpta.json();
  
    const gifs = data.map( e =>{
        return{ 
            id: e.id,
            title: e.title,
            url: e.images.downsized_medium.url
        }
    })
    return gifs;
  }