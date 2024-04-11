import { Container } from "./style"
import { ComponentAnimation } from "../../../../shared/components/ComponentAnimation/ComponentAnimation"
import { Button } from "../../../../shared/components/Index"
import trashIcon from "../../../../images/trashIcon.svg";

type CartModalProps = {
    isOpen?: boolean,
}
const variants = {
    visible: {x: 0, opacity: 1},
    initial: {x: "100vh", opacity: 0},
    exit: {x: "100vh", opacity: 0}
    
}

export const CartModal = ({isOpen} : CartModalProps) => {
    return (
            <Container>
                <ComponentAnimation
                    key="cart-modal"
                    style={{top: 0, position: "absolute", right: 0}}
                    isOpen={true}
                    variants={variants}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    transition={{duration: 0.4}}
                    children={
                        <div className="cart-modal">
                            <div className="cart-m-total-cost">
                                <span>Subtotal</span>
                                <h2>R$ 498,00</h2>
                            </div>
                            <div className="free-delivery">
                                <p id="normal-p">
                                   <p id="green-p"> Seu pedido se qualifica para <b>Frete GRÁTIS</b>.</p> 
                                   Selecione Frete GRÁTIS ao finalizar o pedido.<br/> <a id="link-p" href="#">Veja detalhes.</a>
                                </p>
                            </div>
                            <div className="go-to-cart-page">
                                <Button 
                                    type="button"
                                    style={{background: "#f2f2f2", border: "1px solid #d9d5d5", padding: "3px", fontSize: "10px"}}>
                                        Ir para o carrinho
                                    </Button>
                            </div>

                            <div className="product">
                                <div className="product-visualize">
                                        <div className="product-img">
                                            <img src="https://m.media-amazon.com/images/I/61V5FRUgX8L._AC_SY450_.jpg"/>
                                            <h2>R$ 286,00</h2>
                                        </div>
                                       
                                        <div className="trash">
                                            <img src={trashIcon}/>
                                        </div>
                                        
                                </div>
                            </div>
                        </div>
                    }
                />                     
               
            </Container>)
}