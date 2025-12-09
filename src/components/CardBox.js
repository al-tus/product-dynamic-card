import './CardBox.css'

const CardBox = ({isCardOpen, count}) => {
    return (
        <>
            <div className={`card-box ${isCardOpen ? 'is-active' : ''}`}>
                { count >= 1 ? <p className='counter'>{count}</p> : null }

               <span className="material-symbols-outlined">
                    shopping_cart
                </span>
            </div>

        </>
    )
}

export default CardBox;