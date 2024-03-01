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
    const priceToInt = Number.parseInt(productData.price);
    const priceWithoutDiscont = (priceToInt*0.10) + priceToInt;
    const installmentPrice = priceWithoutDiscont / 12;

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
                    <h1 className="product-title">{productData.title}</h1>
                    <a>Marca</a>
                    <p className="product-rate">karalho</p>
                    <h2 className="product-price">{productData.price}</h2>
                    <span>à vista no Pix e boleto (10% off) ou R${priceWithoutDiscont} em até 12x de R${installmentPrice.toFixed(2)} sem juros </span>
                </div>

                <div className="product-shopping">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo reprehenderit eius assumenda vitae quae magnam,
                        <br/> laboriosam nostrum vero est corrupti aspernatur at asperiores dolore quisquam minus quia perferendis fugiat.</p>
                </div>
            </div>

        </Container>
    )
}