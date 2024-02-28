import { Container } from "./style"
import product from "../Data/itens.json";

export const ProductPage = () => {
    return (
        <Container>
            <div className="product-page">
                <div className="product-image">
                    <div className="image-container">
                        <img src={product.product[1].image}/>
                    </div>
                </div>
                <div className="product-informations">

                </div>

                <div className="product-shopping">

                </div>
            </div>

        </Container>
    )
}