import { Container } from "./style"
import product from "../Data/itens.json";
import { ImageOption } from "./components/ImageOption/ImageOption"; 
import { useState } from "react";

export const ProductPage = () => {
    const [mainImage, setMainImage] = useState("https://m.media-amazon.com/images/I/61u2D+u2wFL._AC_SY450_.jpg")


    const handleChangeImage = (index: string) => {
        setMainImage(index);
    }

    return (
        <Container>
            <div className="product-page">
                
                <div className="product-image">
                    <div className="img-options">
                        {product.product[0].imageOption?.map((currentImage) =>
                            <ImageOption imageIndex={currentImage} handleChangeImage={()=> handleChangeImage(currentImage)}/>
                        )}
                    </div>
                        <div className="img-main">
                            <img src={mainImage} className="img-principal"/>
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