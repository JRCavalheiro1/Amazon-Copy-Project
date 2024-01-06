
import { Container } from "./style";
import glassLogo from "../../../../../../images/glass.svg";

export const Search = () => {
    return (
        <Container>
           <div className="nav-search">
                        <select name="todos">
                            <option>Todos</option>
                            <option>product</option>
                            <option>product3</option>
                            <option>product4</option>
                        </select>
                        
                        <input className="input-search" type="text" placeholder="Pesquisa Amazon.com.br"/>
                        <div className="submit">
                            <input className="input-submit" type="submit" value="" />
                            <img className="glass-logo" src={glassLogo}/>
                        </div>
                        
                 </div>
        </Container>
    )
}