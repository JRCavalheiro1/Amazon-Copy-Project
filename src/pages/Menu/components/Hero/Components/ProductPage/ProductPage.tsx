import { Container } from "./style"
import { useLocation } from "react-router-dom";
import { ProductImage } from "./components/ProductImage/ProductImage";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";
import { ProductShopping } from "./components/ProductShopping/ProductShopping";

export const ProductPage = () => {
    const location = useLocation();
    const productData = location.state;
    
    return (
        <Container>
            <div className="product-page">
                <ProductImage productImageData={productData}/>
                <ProductInfo productInfoData={productData}/>
                <ProductShopping/>               
            </div>

        </Container>
    )
}