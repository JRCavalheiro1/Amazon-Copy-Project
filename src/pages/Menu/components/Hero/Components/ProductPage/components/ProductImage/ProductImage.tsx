import { ImageOption } from "../../components/ImageOption/ImageOption"; 
import { ProductImageModal } from "../ProductImageModal/ProductImageModal";
import { ProductImageStyle } from "./style";
import { createElement, useState } from "react";


type produtctImageProps = {
    productImageData: any;
}

export const ProductImage = ({productImageData} : produtctImageProps) => {
    const [mainImage, setMainImage] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mainImageZoom, setMainImageZoom] = useState("");
    
    //function zoom take the image of image main field
    //return result that is the zoom spot of the image 

    const zoomImageFunction = (imgClassName: any) => {
        const image = document.getElementById(imgClassName);
        const lens = createElement("div", {className: "image-lens"});
        //image?.parentElement?.insertBefore(lens, image);

        
    }

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
                <div 
                    className="img-main"
                    onMouseEnter={()=> setModalIsOpen(!modalIsOpen)} 
                    onMouseLeave={()=> setModalIsOpen(!modalIsOpen)}>
                    <img src={mainImage ? mainImage : productImageData.image} id="img-principal"/>
                </div>

                <div>
                    {modalIsOpen && <ProductImageModal productImage={mainImage}/> }
                </div>
            </div>
    </ProductImageStyle>
    )
}