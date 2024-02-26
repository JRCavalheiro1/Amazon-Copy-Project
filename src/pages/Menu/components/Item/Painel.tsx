import { Product} from "./components/Product/Product" 
import { Container } from "./styles"; 
import productData from "../Hero/Components/Data/itens.json";
import { useLocation } from "react-router-dom";

export const Painel = () => {
    const {state} = useLocation();

    const filterProduct = (productCategory: string | undefined) => {
        return (productData.filter((product) => product.category === productCategory)) //filter the products according to the category
    }
    return (
        <Container>
            <div className="product">
                {filterProduct(state).map((product: any) => {
                    return (
                        <Product key={product.id} product={product}/>
                    )
                })}
            </div>
        </Container>
    )
}