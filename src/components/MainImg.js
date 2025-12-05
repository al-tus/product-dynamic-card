import './MainImg.css'

const MainImg = ({info, active}) => {
    return (
        <img src={info[active]?.mainImg} alt=""/>
    )
}

export default MainImg;