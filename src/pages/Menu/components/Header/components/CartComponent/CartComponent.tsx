import { Container } from "./style";
import cart from "../../../../../../images/cart.svg";
import { useState } from "react";

type cart = {
    click? : ()=> void
} 
export const CartComponent = ({click}: cart) => {
    const [totalItens, setTotalItens] = useState(0);
    return (
        <Container>
            <div className="nav-cart-section" onClick={click}>
                    <a className="nav-link-cart-section">
                    <div className="nav-cart">
                        <span className="count">0</span>
                        <img src={cart}/>
                        </div>
                        <span className="cart-text">Carrinho</span> 
                    </a>
            </div>  
        </Container>
    )
};