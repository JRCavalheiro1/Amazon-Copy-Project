import { Container } from "./style"
import product from "../Data/itens.json";
import { ImageOption } from "./components/ImageOption/ImageOption"; 

export const ProductPage = () => {
    return (
        <Container>
            <div className="product-page">
                
                <div className="product-image">
                    <div className="img-options">
                        <ImageOption imageIndex={product.product[1].image}/>
                        <ImageOption imageIndex={product.product[1].image}/>
                        <ImageOption imageIndex={product.product[1].image}/>
                    </div>
                        <div className="img-main">
                            <img src={product.product[1].image} className="img-principal"/>
                        </div>
                </div>
                <div className="product-informations">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo reprehenderit eius assumenda vitae quae magnam,
                        <br/> laboriosam nostrum vero est corrupti aspernatur at asperiores dolore quisquam minus quia perferendis fugiat.</p>
                </div>

                <div className="product-shopping">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo reprehenderit eius assumenda vitae quae magnam,
                        <br/> laboriosam nostrum vero est corrupti aspernatur at asperiores dolore quisquam minus quia perferendis fugiat.</p>
                </div>
            </div>

        </Container>
    )
}