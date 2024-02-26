import { Container } from "./style" 

type itemProps = {
    product?: any
    
}


export const Product = ({product} : itemProps) => {
    return (
        <Container>
            <div className="product">
                <div className="product-image">
                    <img src={product.image} width="200px" height="190px"/>
                </div>
                    <p>{product.title}</p>
                <div className="price">
                    <span>R$</span><h2>{product.title}</h2>
                </div>
            </div>
        </Container>
        
    )
}