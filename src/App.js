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

// img

import greenSlice from './assets/img/green-apple-with-slice.png';
import yellowSlice from './assets/img/yellow-apple-with-slice.png';
import orangeSlice from './assets/img/orange-apple-with-slice.png';
import redSlice from './assets/img/red-apple-with-slice.png';

import greenA from './assets/img/green-apple-front.png'
import greenB from './assets/img/green-apple-slice.png'
import greenC from './assets/img/green-apple-top.png'
import greenD from './assets/img/green-apple-flip.png'

import yellowA from './assets/img/yellow-apple-front.png'
import yellowB from './assets/img/yellow-apple-slice.png'
import yellowC from './assets/img/yellow-apple-top.png'
import yellowD from './assets/img/yellow-apple-flip.png'

import orangeA from './assets/img/orange-apple-front.png'
import orangeB from './assets/img/orange-apple-slice.png'
import orangeC from './assets/img/orange-apple-top.png'
import orangeD from './assets/img/orange-apple-flip.png'

import redA from './assets/img/red-apple-front.png'
import redB from './assets/img/red-apple-slice.png'
import redC from './assets/img/red-apple-top.png'
import redD from './assets/img/red-apple-flip.png'


//

import ThumbnailList from "./components/ThumbnailList";


function App() {
    const productsInfo = [
        {
            name: 'green apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png',
            mainImg: greenSlice,
            thumbImg: [
                greenA,          // ./assets/img/green-apple-front.png
                greenB,          // ./assets/img/green-apple-slice.png
                greenC,          // ./assets/img/green-apple-top.png
                greenD           // ./assets/img/green-apple-flip.png
            ]

        },
        {
            name: 'yellow apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png',
            mainImg: yellowSlice,
            thumbImg: [
                yellowA,         // ./assets/img/yellow-apple-front.png
                yellowB,         // ./assets/img/yellow-apple-slice.png
                yellowC,         // ./assets/img/yellow-apple-top.png
                yellowD          // ./assets/img/yellow-apple-flip.png
            ]
        },
        {
            name: 'orange apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png',
            mainImg: orangeSlice,
            thumbImg: [
                orangeA,         // ./assets/img/orange-apple-front.png
                orangeB,         // ./assets/img/orange-apple-slice.png
                orangeC,         // ./assets/img/orange-apple-top.png
                orangeD          // ./assets/img/orange-apple-flip.png
            ]

        },
        {
            name: 'red apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png',
            mainImg: redSlice,
            thumbImg: [
                redA,            // ./assets/img/red-apple-front.png
                redB,            // ./assets/img/red-apple-slice.png
                redC,            // ./assets/img/red-apple-top.png
                redD             // ./assets/img/red-apple-flip.png
            ]
        }
    ];

    const productBenefits = [
        "Apples are nutricious",
        "Apples may be good for weight loss",
        "Apples may be good for bone health",
        "They're linked to a lowest risk of diabetes"
    ];

    const [isColorActive, setColorActive] = React.useState(0);
    const [isThumbnailActive, setThumbnail] = React.useState(undefined);
    const orderCode = Math.floor(Math.random() * (10000 - 99999 + 1)) + 99999

    const handlerClickColor = (index) => {
        setColorActive(index);
    }

    const handlerThumbnailMouseOver = (item) => {
        setThumbnail(item)
    }
    const handlerThumbnailMouseOut = () => {
        setThumbnail(undefined)
    }

    return (
   <>
       <ProductCard>
           <ProductGallery>
               <MainImg active={isColorActive} info={productsInfo} thumbnailImg={isThumbnailActive}/>
               <ThumbnailList
                   images={productsInfo[isColorActive].thumbImg}
                   onMouseOver={handlerThumbnailMouseOver}
                   onMouseOut={handlerThumbnailMouseOut}
               />
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
