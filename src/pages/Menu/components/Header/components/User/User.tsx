import  { Container } from "./style"; 
import arrow from "../../../../../../images/arrow.svg";

export const User = () => {
    return (
        <Container>
            <div className="nav-user">
               <a className="nav-user-link">
                    <span>Olá, faça seu login</span>
                    <span>Contas e Listas </span> <img src={arrow}/>
               </a>
            </div>
        </Container>
    )
}