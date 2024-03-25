import { ProductImageModalStyle } from "./style";


type ProducImageModalProps = {
    backgroundImageStyle?: any;
}
export const ProductImageModal = ({backgroundImageStyle}: ProducImageModalProps) => {
    return (
        <ProductImageModalStyle>
            <div className="product-image-modal" style={backgroundImageStyle}>
            </div>
        </ProductImageModalStyle>
    )
}