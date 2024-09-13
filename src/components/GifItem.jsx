export const GifItem = ({ url, title }) => {
    return (
        <div className="w-full h-full">
            <img src={ url } alt="gif" />
            <p>{ title }</p>
        </div>
    )
}