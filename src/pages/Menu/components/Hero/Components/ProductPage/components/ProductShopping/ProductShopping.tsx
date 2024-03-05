import { ProductShoppingStyle } from "./style"
import { calculatePricePortion } from "../ProductInfo/ProductInfo"

type producShoppingProps = {
    producShoppingData: any;
}
export const ProductShopping = ({producShoppingData}: producShoppingProps ) => {
   
    return (
        <ProductShoppingStyle>
            <div className="product-shopping">
                <div className="product-shopping-price">
                    <h2>{producShoppingData.price}</h2>
                    <span className="product-shopping-price-portion">à vista no Pix e boleto<br/> 
                    <b>Ou em até 12x de R$ {(calculatePricePortion(producShoppingData.price) / 12).toFixed(2)}/mês</b></span>
                </div>

                <div className="product-shopping-delivery">
                    <span>Entrega GRÁTIS: <b>Segunda-Feira, 11 de Março</b></span>
                    <span>Ou Entrega mais rápida: <b>Quinta-feira, 7 de Março</b></span>
                </div>

            </div>
        </ProductShoppingStyle>
    )
}