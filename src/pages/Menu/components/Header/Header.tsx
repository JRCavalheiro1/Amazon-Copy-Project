import { Container } from "./style"
import { Local, Search, LayoutTools} from "./components/Index"
import localLogo from "../../../../images/local.svg"

import logoMenu from "../../../../images/logo-menu.png";

export const Header = ()=> {
    return (
        <Container>
                <div className="logo">
                    <img src={logoMenu}/>
                </div>
                
                <Local/>

                
                <div className="nav-search">
                    <label>
                        <select name="todos">
                            <option>Todos</option>
                            <option>product2</option>
                            <option>product3</option>
                            <option>product4</option>
                        </select>
                        
                        <input className="input-search" type="text" placeholder="Pesquisa Amazon.com.br"/>
                        <input className="input-submit" type="submit"/>
                    </label>
                 </div>

                {/*<LayoutTools/>*/}
            
        </Container>
    )
}