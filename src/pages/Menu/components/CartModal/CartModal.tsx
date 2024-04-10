import { Container } from "./style"
import { ComponentAnimation } from "../../../../shared/components/ComponentAnimation/ComponentAnimation"


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
                                <button>Ir para o carrinho</button>
                            </div>

                            <div className="product">
                                <div className="product-visualize">
                                        <div className="product-img">
                                            <img/>
                                        </div>
                                        <div className="product-cost"> 
                                            <h2>R$ 286,00</h2>
                                        </div>

                                        <div className="product-presets">
                                            <button className="remove"> lixo</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    }
                />                     
               
            </Container>)
}