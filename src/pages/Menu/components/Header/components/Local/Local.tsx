import localIcon from "../../../../../../images/local.svg"

import { Container } from "./style"
export const Local = ()=> {
    return (
        <Container>
                <img src={localIcon}/> 
                <p>A entrega será feita em Torres 95560000</p>
                <h3>Atualizar local</h3>        
        </Container>
    )
}