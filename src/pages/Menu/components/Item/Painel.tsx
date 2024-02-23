import { Product} from "./components/Product/Product" 
import { Container } from "./styles"; 
import productData from "../Hero/Components/Data/itens.json";

export const Painel = () => {
    return (
        <Container>
            <div className="product">
                {productData.map((product: any) => {
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