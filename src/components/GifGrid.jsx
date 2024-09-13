import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { Loading } from "./Loading"

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <div className="w-full p-2">
            <h1 className="text-2xl">{ category }</h1>
            
            {
                <div className="w-full h-56 flex gap-4 justify-center">
                    {
                        images.map(data => {

                            if(isLoading)
                            {
                                return(
                                    <div className="w-56 h-56">
                                        <Loading /> 
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div className="w-56 h-56">
                                        <GifItem key={data.id} url={data.images.downsized_medium.url} title={data.title} />
                                    </div>
                                )
                            }

                        })
                    }
                </div>
            }

        </div>
    )
}