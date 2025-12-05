import './ProductHeader.css'

const productHeader = ({ID}) => {

    return(
        <>
            <div className="product-header">
                <h1>Delicious Apples</h1>
                <span>Code: {ID}</span>
            </div>
        </>
    )
}

export default productHeader;