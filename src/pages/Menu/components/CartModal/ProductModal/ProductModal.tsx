import trashIcon from "../../../../../images/trashIcon.svg";
import { Container } from "./style";

export const ProductModal = () => {
    return (
        <Container>
            <div className="product">
                <hr className="horizontal-line"/>
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
        </Container>
    )
}