import './Button.css'

const Button = ({onClick, count, onPlus, onMinus}) => {

        if (count === 0) {
            return (
                <button className='button' onClick={() => onClick()}>ADD TO CARD</button>
            )
        }
        return (
            <div className='card-counter'>
                <button className='minus' onClick={() => onMinus()}>-</button>
                <span>{count}</span>
                <button className='plus' onClick={() => onPlus()}>+</button>
            </div>
        )
}

export default Button;