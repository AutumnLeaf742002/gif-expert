export const GifItem = ({ url, title }) => {
    return (
        <div className="w-full h-full">
            <img className="w-60 h-auto" src={ url } alt="gif" />
            <p>{ title }</p>
        </div>
    )
}