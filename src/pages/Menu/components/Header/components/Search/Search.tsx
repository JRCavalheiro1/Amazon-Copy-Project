
import { Container } from "./style";

export const Search = () => {
    return (
        <Container>
            <div className="nav-search">
            <label>
                <select name="Select">
                    <option>Todos</option>
                    <option>Caralho</option>
                    <option>arranjo</option>
                    <option>sorte</option>
                    <option>Cars</option>
                    <option>Cars</option>
                </select>

                <input placeholder="Pesquisa Amazon.com.br"/>
                <button>send</button>
            </label>
            </div>
        </Container>
    )
}