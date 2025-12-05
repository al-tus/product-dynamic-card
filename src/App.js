import ProductCard from "./components/ProductCard";
import ProductGallery from "./components/ProductGallery";
import ProductDetails from "./components/ProductDetails";
import ProductHeader from "./components/ProductHeader";
import PriceDisplay from "./components/PriceDisplay";
import BenefitsList from "./components/BenefitsList";
import Button from "./components/Button";
import ColorSelector from "./components/ColorSelector";
import MainImg from "./components/MainImg";
import React from "react";


function App() {
    const productsInfo = [
        {
            name: 'green apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png',
            mainImg: 'https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png'
        },
        {
            name: 'yellow apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png',
            mainImg: 'https://i.ibb.co.com/7NVkCKbK/Adobe-Express-file.png'
        },
        {
            name: 'orange apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png',
            mainImg: 'https://pngfre.com/wp-content/uploads/apple-poster.png'
        },
        {
            name: 'red apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png'
        }
    ];

    const productBenefits = [
        "Apples are nutricious",
        "Apples may be good for weight loss",
        "Apples may be good for bone health",
        "They're linked to a lowest risk of diabetes"
    ];

    const [isColorActive, setColorActive] = React.useState(0);
    const orderCode = Math.floor(Math.random() * (10000 - 99999 + 1)) + 99999

    const handlerClickColor = (index) => {
        setColorActive(index);
    }

    return (
   <>
       <ProductCard>
           <ProductGallery>
               <MainImg active={isColorActive} info={productsInfo}/>
           </ProductGallery>
           <ProductDetails>
                <ProductHeader ID={orderCode}/>
                <PriceDisplay />
                <ColorSelector info={productsInfo} onClick={handlerClickColor} className={isColorActive}/>
                <BenefitsList benefits={productBenefits} />
                <Button />
           </ProductDetails>
       </ProductCard>
   </>
  );
}

export default App;
