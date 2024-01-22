import localLogo from "../../../../../../images/local.svg"
import { useState } from "react";
import { Container } from "./style"
import { AddLocalModal } from "./AddLocalModal";

interface localProps {
    name: string
}

export const Local = ({name}: localProps)=> {
    const [locationUser, setLocationUser] = useState("");
    
    return (
        <Container>
            <a className="nav-local">
                    <div className="logo-local">
                        <img src={localLogo}/>
                    </div>
                    <div className="span-msg">
                        <span id="s1">Enviar para {name}</span>
                        <span id="s2">Torres 000000</span>
                    </div>
                </a>

                <AddLocalModal/>
        </Container>
    )
}