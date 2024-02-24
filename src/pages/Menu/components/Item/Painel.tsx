import { Product} from "./components/Product/Product" 
import { Container } from "./styles"; 
import productData from "../Hero/Components/Data/itens.json";
import { useLocation } from "react-router-dom";

export const Painel = ( ) => {
    const {state} = useLocation();

    const filterProdutc = (productCategory: string | undefined) => {
        return (productData.filter((product) => product.category === productCategory ))
    }
    return (
        <Container>
            <div className="product">
                {filterProdutc(state).map((product: any) => {
                    return (
                        <Product 
                            key={product.id} 
                            productImage={product.image}
                            productPrice={product.price}
                            productTitle={product.title}
                        />
                    )
                } )}
            </div>
        </Container>
    )
}