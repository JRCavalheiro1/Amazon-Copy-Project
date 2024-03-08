import { ProductImageModalStyle } from "./style";


type ProducImageModalProps = {
    productImage?: string;
}
export const ProductImageModal = ({productImage}: ProducImageModalProps) => {
    return (
        <ProductImageModalStyle>
            <div className="product-image-modal">
                <div className="modal-image-inside" >
                    <img src={productImage}/>   
                </div>
            </div>
        </ProductImageModalStyle>
    )
}