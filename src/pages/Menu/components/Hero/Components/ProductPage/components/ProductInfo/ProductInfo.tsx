import payIcon from "../../../../../../../../images/payIcon.png"
import deliveryIcon from "../../../../../../../../images/deliveryIcon.png"
import devolutionIcon from "../../../../../../../../images/devolutionIcon.png"
import freeDeliveryIcon from "../../../../../../../../images/freeDeliveryIcon.png"
import { ProductInfoStyle } from "./style";
import rateIcon from "../../../../../../../../images/star.svg"

type ProductInfoProps = {
    productInfoData : any;
}
export const ProductInfo = ({productInfoData}: ProductInfoProps) => {

    const priceToInt = Number.parseInt(productInfoData.price);
    const priceWithoutDiscont = (priceToInt*0.10) + priceToInt;
    const installmentPrice = priceWithoutDiscont / 12;
    

    return (
        <ProductInfoStyle>
        <div className="product-informations">
                    <div className="product-title-info">
                        <h1 className="product-title">{productInfoData.title}</h1>
                        <a className="product-brand">Marca: Amazon</a>
                        <div className="product-rate">
                            <p className="product-rate-value">5,0</p> <img src={rateIcon}/>
                        </div>
                    </div>
                    
                    <hr className="horizontal-line"/>

                    <div className="product-price-info">
                        <div className="product-price">
                            <span className="coin">R$</span> <h2 className="price">{productInfoData.price}</h2>
                        </div>
                        <span className="price-portion-text">à vista no Pix e boleto (10% off)</span> <br/>
                        <span className="price-portion"> <b>ou R${priceWithoutDiscont} em até 12x de R${installmentPrice.toFixed(2)} sem juros </b></span>

                        <div className="purchase-icons">
                            <div className="purchase-mode-icon">
                                <img  src={payIcon}/>
                                <a>Pagamentos e <br/>Segurança</a>
                            </div>

                            <div className="purchase-mode-icon">
                                <img src={deliveryIcon}/>
                                <a>Enviado pela <br/>Amazon</a>
                            </div>

                            <div className="purchase-mode-icon">
                                <img src={freeDeliveryIcon}/>
                                <a>Entrega <br/>gratuita</a>
                            </div>

                            <div className="purchase-mode-icon">
                                <img src={devolutionIcon}/>
                                <a>Política de <br/>devolução</a>
                            </div>
                        </div>
                    </div>

                    <hr className="horizontal-line"/>

                    <div className="product-about-info">
                            <p className="product-about-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellendus et? Quas modi error<br/> 
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.<br/>
                            quia maiores repellat laudantium porro vel, placeat et quod non consequuntur commodi sed neque facere quibusdam.
                            </p>
                    </div>
                </div>

                
        </ProductInfoStyle>
    )

}