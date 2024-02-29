import { Container } from "./style"
import product from "../Data/itens.json";
import { ImageOption } from "./components/ImageOption/ImageOption"; 
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const ProductPage = () => {
    const [mainImage, setMainImage] = useState("")
    const location = useLocation();
    const productData = location.state;
    

    const handleChangeImage = (index: string) => {
        setMainImage(index);
    }

    return (
        <Container>
            <div className="product-page">
                
                <div className="product-image">
                    <div className="img-options">
                        {productData.imageOption.map((currentImage: string) =>
                            <ImageOption imageIndex={currentImage} handleChangeImage={()=> handleChangeImage(currentImage)}/>
                        )}
                    </div>
                        <div className="img-main">
                            <img src={mainImage ? mainImage : productData.image} className="img-principal"/>
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