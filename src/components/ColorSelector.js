import './ColorSelector.css'

const colorSelector = ({info, className, onClick}) => {

    return (
        <>
            <div className="color-selector">
                <h3>SELECT A COLOR</h3>
                {info.map((image, index) => {
                    return(
                        <button
                            key={index}
                            className={className === index ? 'active' : ''}
                            onClick={() => onClick(index)}
                        >
                            <img src={image.url} alt={image.name}/>
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default colorSelector;