import { Container } from "./style" 
import star from "../../../../../../images/star.svg";
import { Link } from "react-router-dom";

type itemProps = {
    product?: any,
    
}


export const Product = ({product} : itemProps) => {
    return (
        <Container>
            <div className="product">
                <div className="product-image">
                    <img src={product.image} width={product.imageWidthSize} height={product.imageHeightSize}/>
                </div>
                    <Link 
                        to="../product" 
                        state={{image: product.image, title: product.title, price: product.price, imageOption: product.imageOption}}> 
                            {product.title} 
                    </Link>
                <div className="price">
                    <span>R$</span><h2>{product.price}</h2> <img src={star}/>
                </div>
            </div>
        </Container>
        
    )
}