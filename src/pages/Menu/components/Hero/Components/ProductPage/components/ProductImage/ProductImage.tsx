import { ImageOption } from "../../components/ImageOption/ImageOption"; 
import { ProductImageModal } from "../ProductImageModal/ProductImageModal";
import { ProductImageStyle } from "./style";
import { createElement, useState, useRef } from "react";


type produtctImageProps = {
    productImageData: any;
}

export const ProductImage = ({productImageData} : produtctImageProps) => {
    const [mainImage, setMainImage] = useState(productImageData.image)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mainImageZoom, setMainImageZoom] = useState({backgroundImage: `url(${mainImage})`});

    const lens = useRef<HTMLDivElement | null>(null);

    
    //function zoom take the image of image main field
    //return result that is the zoom spot of the image 
   
    const handleMouseMove = (e: any) => {
        const {offsetX, offsetY, currentTarget} = e.nativeEvent;
        //const {offsetWidth, offsetHeight} = currentTarget;
       
       
       
        lens.current!.style.left = `${offsetX}px`;
        lens.current!.style.top = `${offsetY}px`;

        const xPercentage = (offsetX / (lens.current!.clientWidth - 50) * 35) ;
        const yPercentage = (offsetY / (lens.current!.clientHeight - 50) * 50) ;
        
        setMainImageZoom((prev)=> ({...prev, backgroundImage: `url(${mainImage})`, backgroundPosition: `${xPercentage}% ${yPercentage}%`}))
    }
    return (
        <ProductImageStyle>
            <div className="product-image">
                <div className="img-options">
                    {productImageData.imageOption.map((currentImage: string) =>
                        <ImageOption imageIndex={currentImage} handleChangeImage={()=> setMainImage(currentImage)}/>
                    )}
                </div> 
                <div className="img-main">
                    <img src={mainImage} id="img-principal" 
                        onMouseEnter={()=> setModalIsOpen(!modalIsOpen)} 
                        onMouseLeave={()=> setModalIsOpen(!modalIsOpen)}
                        onMouseMove={(e)=> handleMouseMove(e)}
                        
                        />
                        
                    {modalIsOpen && <div id="lens" ref={lens}/>}    
                </div>
                
                <div>
                    {modalIsOpen &&  <ProductImageModal backgroundImageStyle={mainImageZoom}/>}
                </div>
            </div>
    </ProductImageStyle>
    )
}