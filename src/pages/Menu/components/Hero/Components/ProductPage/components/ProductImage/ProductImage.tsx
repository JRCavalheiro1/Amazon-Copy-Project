import { ImageOption } from "../../components/ImageOption/ImageOption"; 
import { ProductImageStyle } from "./style";
import { useState } from "react";


type produtctImageProps = {
    productImageData: any;
}
export const ProductImage = ({productImageData} : produtctImageProps) => {
    const [mainImage, setMainImage] = useState("")
    
    const handleChangeImage = (index: string) => {
        setMainImage(index);
    }
    return (
        <ProductImageStyle>
            <div className="product-image">
                <div className="img-options">
                    {productImageData.imageOption.map((currentImage: string) =>
                        <ImageOption imageIndex={currentImage} handleChangeImage={()=> handleChangeImage(currentImage)}/>
                    )}
                </div>
                <div className="img-main">
                    <img src={mainImage ? mainImage : productImageData.image} className="img-principal"/>
                </div>
            </div>
    </ProductImageStyle>
    )
}