const apiKeyGif = import.meta.env.VITE_APIKEYGIF;
const gifUrlHeader ='https://api.giphy.com/v1/gifs/search?'

export const getGifList = async(category)=>{
    const res = await fetch(`${gifUrlHeader}api_key=${apiKeyGif}&limit=3&q=${category.trim()}`)
    const {data} = await res.json()
    return data
}