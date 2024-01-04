import { Container } from "./style"
import { Local, Search, LayoutTools} from "./components/Index"

import logoMenu from "../../../../images/logo-menu.png";

export const Header = ()=> {
    return (
        <Container>
            <header>
                <div className="logo">
                    <img src={logoMenu}/>
                </div>
                <Local/>
                <Search/>

                {/*<LayoutTools/>*/}
            </header>
        </Container>
    )
}