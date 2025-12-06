import './ThumbnailList.css'

const ThumbnailList = ({images, onMouseOver, onMouseOut}) => {
    if (!images || images.length === 0) return null;

    return (
        <>
            <div className="thumbnail-list">
                <ul>
                    {images?.map((img, index) => {
                        return (
                            <button key={index} onMouseOver={() => onMouseOver(img)} onMouseOut={() => onMouseOut()}>
                                <li>
                                    <img src={img} alt=""/>
                                </li>
                            </button>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default ThumbnailList