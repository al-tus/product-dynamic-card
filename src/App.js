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

import greenSlice from './assets/img/green-apple-with-slice.png';
import yellowSlice from './assets/img/yellow-apple-with-slice.png';
import orangeSlice from './assets/img/orange-apple-with-slice.png';
import redSlice from './assets/img/red-apple-with-slice.png';
import ThumbnailList from "./components/ThumbnailList";




function App() {
    const productsInfo = [
        {
            name: 'green apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png',
            mainImg: greenSlice,
            thumbImg: [
                'https://fruitmasters.com/wp-content/uploads/2020/04/2020_Packshot_Granny_Smith_500x500px.png',
                'https://static.vecteezy.com/system/resources/previews/060/359/668/non_2x/half-green-apple-cut-detail-juicy-white-flesh-seeds-stem-free-png.png',
                'https://static.vecteezy.com/system/resources/previews/055/532/797/non_2x/freshly-cut-half-green-apple-with-a-leaf-isolated-on-a-clean-transparent-background-for-healthy-eating-visuals-fresh-half-green-apple-isolated-on-transparent-background-free-png.png',
                'https://static.vecteezy.com/system/resources/previews/049/388/702/non_2x/green-apple-top-view-png.png'
            ]
        },
        {
            name: 'yellow apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png',
            mainImg: yellowSlice,
            thumbImg: [
                'https://fruitmasters.com/wp-content/uploads/2020/04/2020_Packshot_Granny_Smith_500x500px.png',
                'https://static.vecteezy.com/system/resources/previews/060/359/668/non_2x/half-green-apple-cut-detail-juicy-white-flesh-seeds-stem-free-png.png',
                'https://static.vecteezy.com/system/resources/previews/055/532/797/non_2x/freshly-cut-half-green-apple-with-a-leaf-isolated-on-a-clean-transparent-background-for-healthy-eating-visuals-fresh-half-green-apple-isolated-on-transparent-background-free-png.png',
                'https://static.vecteezy.com/system/resources/previews/049/388/702/non_2x/green-apple-top-view-png.png'
            ]
        },
        {
            name: 'orange apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png',
            mainImg: orangeSlice,
            thumbImg: [
                'https://fruitmasters.com/wp-content/uploads/2020/04/2020_Packshot_Granny_Smith_500x500px.png',
                'https://static.vecteezy.com/system/resources/previews/060/359/668/non_2x/half-green-apple-cut-detail-juicy-white-flesh-seeds-stem-free-png.png',
                'https://static.vecteezy.com/system/resources/previews/055/532/797/non_2x/freshly-cut-half-green-apple-with-a-leaf-isolated-on-a-clean-transparent-background-for-healthy-eating-visuals-fresh-half-green-apple-isolated-on-transparent-background-free-png.png',
                'https://static.vecteezy.com/system/resources/previews/049/388/702/non_2x/green-apple-top-view-png.png'
            ]

        },
        {
            name: 'red apple',
            url: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png',
            mainImg: redSlice,
            thumbImg: [
                'https://fruitmasters.com/wp-content/uploads/2020/04/2020_Packshot_Granny_Smith_500x500px.png',
                'https://static.vecteezy.com/system/resources/previews/060/359/668/non_2x/half-green-apple-cut-detail-juicy-white-flesh-seeds-stem-free-png.png',
                'https://static.vecteezy.com/system/resources/previews/055/532/797/non_2x/freshly-cut-half-green-apple-with-a-leaf-isolated-on-a-clean-transparent-background-for-healthy-eating-visuals-fresh-half-green-apple-isolated-on-transparent-background-free-png.png',
                'https://static.vecteezy.com/system/resources/previews/049/388/702/non_2x/green-apple-top-view-png.png'
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
