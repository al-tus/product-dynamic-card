import './MainImg.css'

const MainImg = ({info, active, thumbnailImg}) => {
    return (
        thumbnailImg
        ? <img src={thumbnailImg} alt=""/>
        : <img src={info[active]?.mainImg} alt=""/>
    )
}

export default MainImg;