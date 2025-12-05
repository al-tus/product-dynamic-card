import './ProductGallery.css'

const ProductGallery = ({children}) => {
    return (
        <div className='product-gallery'>
            <div className="photo-container">
                {children}
            </div>
        </div>
    )
}

export default ProductGallery;