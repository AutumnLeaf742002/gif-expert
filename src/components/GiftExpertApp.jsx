import { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from "./GifGrid"

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(["Naruto", "Dragon ball"])

    return (
        <>
            <AddCategory setCategories={setCategories} categories={categories} />
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
