import { useEffect, useState } from "react"
import { getGifList } from "../helpers/getGifList"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState(["", "", ""])
    const [isLoading, setIsLoading] = useState(true)

    const get = async () => {

        const data = await getGifList(category)

        setImages(data)
        setIsLoading(false)
    }

    useEffect(()=>{
        get()
    }, [])

    return (
        {
            images,
            isLoading,
        }
    )
}
