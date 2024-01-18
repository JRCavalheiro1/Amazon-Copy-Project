
import { Container } from "./style";
import glassLogo from "../../../../../../images/glass.svg";

export const Search = () => {
    return (
        <Container>
           <div className="nav-search">
                        <select className="select-search" name="todos">
                            <option>Todos</option>
                        </select>
                        <input className="input-search" type="text"  placeholder="Pesquisa Amazon.com.br"/>
                        <div className="submit">
                            <input className="input-submit" type="submit" value="" />
                            <img className="glass-logo" src={glassLogo}/>
                        </div>
                 </div>
        </Container>
    )
}