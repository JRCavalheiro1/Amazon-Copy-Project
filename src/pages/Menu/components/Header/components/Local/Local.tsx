import localLogo from "../../../../../../images/local.svg"

import { Container } from "./style"
export const Local = ()=> {
    return (
        <Container>
            <a className="nav-local">
                    <div className="logo-local">
                        <img src={localLogo}/>
                    </div>
                    <div className="span-msg">
                        <span id="s1">A entrega será feita em Torres 95560000</span>
                        <span id="s2">Atualizar local</span>
                    </div>
                </a>
        </Container>
    )
}