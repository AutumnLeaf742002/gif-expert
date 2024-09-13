import { useState } from "react"

export const AddCategory = ({ setCategories, categories }) => {

    const [inputValue, setInputValue] = useState("")

    const handlerSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        if(categories.find(item => item.trim().toLowerCase() === inputValue.trim().toLowerCase())) return;
        setCategories([inputValue, ...categories])
        setInputValue("")
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={(event) => {
                    setInputValue(event.target.value)
                }}
            />
        </form>
    )
}
