import { Container } from "./style" 

type itemProps = {
    productImage?: string,
    productPrice?: string,
    productTitle?: string
}


export const Product = ({productImage, productPrice, productTitle} : itemProps) => {
    return (
        <Container>
            <div className="product">
                <div className="product-image">
                    <img src={productImage} width="200px" height="190px"/>
                </div>
                    <p>{productTitle}</p>
                <div className="price">
                    <span>R$</span><h2>{productPrice}</h2>
                </div>
            </div>
        </Container>
        
    )
}