import { Container } from "./style"
import { useLocation } from "react-router-dom";
import { ProductImage } from "./components/ProductImage/ProductImage";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";
import { ProductShopping } from "./components/ProductShopping/ProductShopping";
import { ProductImageModal } from "./components/ProductImageModal/ProductImageModal";
import { useState } from "react";
import { CartModal } from "../../../CartModal/CartModal";
import { Overlay } from "../../../../../../shared/components/Overlay/Overlay";

export const ProductPage = () => {
    const location = useLocation();
    const productData = location.state;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const addItemToCar = () => {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <Container>
            <div className="product-page">
                <ProductImage productImageData={productData}/>
                <ProductInfo productInfoData={productData}/>
                <ProductShopping producShoppingData={productData}
                    onClick={addItemToCar}
                />
                <CartModal isOpen={modalIsOpen} productData={productData}/> 
                {modalIsOpen && <Overlay onClick={()=> setModalIsOpen(!modalIsOpen)}/>}
            </div>
        </Container>
    )
}