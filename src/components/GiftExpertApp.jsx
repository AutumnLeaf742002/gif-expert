import { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from "./GifGrid"

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(["Naruto", "Dragon ball"])

    return (
        <>
            <header className='w-full bg-gray-600 h-12 flex justify-center items-center'>
                <AddCategory setCategories={setCategories} categories={categories} />
            </header>
            <ol>
                {
                    categories.map(category => {
                        return(
                            <GifGrid key={category} category={category} />
                        )
                    })
                }
            </ol>
        </>
    )
}
