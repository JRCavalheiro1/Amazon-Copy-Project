import { Container } from "./style";
import { Local, Search, User, Ordered} from "./components/Index";
import logoMenu from "../../../../images/logo-menu.png";


export const Header = ()=> {
    return (
        <Container>
                <div className="logo">
                    <img src={logoMenu}/>
                </div>
                
                <Local/>
                <Search/>
                <User/>
                <Ordered/>
        </Container>
    )
}