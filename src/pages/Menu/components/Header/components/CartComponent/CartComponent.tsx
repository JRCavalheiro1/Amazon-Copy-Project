import { Container } from "./style";
import cart from "../../../../../../images/cart.svg";

type cart = {
    click? : ()=> void
} 
export const CartComponent = ({click}: cart) => {
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