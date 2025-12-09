import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FaShareAlt } from 'react-icons/fa';
import './OverlayActions.css'

const OverlayActions = ({onClick, isFavorite, onShare}) => {
    return (
        <>
            <div className="overlay-actions">

               <button onClick={() => onClick()}>
                   { isFavorite ? <FaHeart /> : <FaRegHeart/> }
               </button>
                <button onClick={() => onShare()}>
                    <FaShareAlt  />
                </button>
            </div>
        </>
    )
}

export default OverlayActions;