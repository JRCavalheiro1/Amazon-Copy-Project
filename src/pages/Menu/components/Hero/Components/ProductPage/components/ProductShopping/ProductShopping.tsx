import { ProductShoppingStyle } from "./style"
import { calculatePricePortion } from "../ProductInfo/ProductInfo"
import localIcon from "../../../../../../../../images/local-color-black.svg";
import { Button } from "../../../../../../../../shared/components/Index";

type producShoppingProps = {
    producShoppingData: any;
}
export const ProductShopping = ({producShoppingData}: producShoppingProps ) => {
   
    return (
        <ProductShoppingStyle>
            <div className="product-shopping">
                <div className="product-shopping-price">
                    <div className="product-price">
                        <span>R$</span><h2>{producShoppingData.price}</h2>
                    </div>
                    <span className="product-shopping-price-portion">à vista no Pix e boleto<br/> 
                    <b>Ou em até 12x de R$ {(calculatePricePortion(producShoppingData.price) / 12).toFixed(2)}/mês</b></span>
                </div>

                <div className="product-shopping-delivery">
                    <div className="free-delivery"><span className="free">Entrega GRÁTIS:</span> <span><b>Segunda-Feira, 11 de Março</b></span></div>
                    <div className="-thuesday-delivery"><span>Ou Entrega mais rápida: <b>Quinta-feira, 7 de Março</b></span></div>
                    <div className="send-to"><img src={localIcon}/><span className="send-local">Enviar para 00000000</span></div>
                </div>

                <div className="product-shoppiung-stock">
                    <h2>Em estoque</h2>
                    <span>Quantidade</span>
                </div>

                <div className="product-shopping-purchase-buttons">
                    <Button style={{borderRadius: "13px"}}>Adicionar ao carrinho</Button>
                    <Button style={{background: "#ffa41c", borderRadius: "13px"}}>Comprar agora</Button>
                </div>

                <div className="product-shopping-delivery-by">
                    <div className="action">
                        <span className="action-by">Enviado por</span> <span className="by">Amazon.com.br</span><br/>
                    </div>
                    <div className="action">
                        <span className="action-by">Vendido por</span> <span className="by">Amazon.com.br</span><br/>
                    </div>
                    <div className="action">
                        <span className="action-by">Devolução</span> <span className="by-devolution">Elegivel para Devolução <br/> Reembolso ou Troca em até <br/> 30 dias após o recebimento</span>
                    </div>
                    <div className="action">
                        <span className="action-by">Pagamento</span> <span className="by-devolution">Transação segura</span>
                    </div>

                </div>
            </div>
        </ProductShoppingStyle>
    )
}