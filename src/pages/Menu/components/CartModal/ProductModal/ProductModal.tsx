import trashIcon from "../../../../../images/trashIcon.svg";
import { Container } from "./style";

type productProps = {
    props: any,
}
export const ProductModal = ({props} : productProps) => {
    return (
        <Container>
            <div className="product">
                <hr className="horizontal-line"/>
                <div className="product-visualize">
                    <div className="product-img">
                        <img src={props.image}/>
                            <h2>{props.price}</h2>
                    </div>
                    <div className="trash">
                        <img src={trashIcon}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}