import { Container } from "./style";
import cart from "../../../../../../images/cart.svg";

export const CartComponent = ()=> {
    return (
    
    <Container>
        <div className="nav-cart-section">
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