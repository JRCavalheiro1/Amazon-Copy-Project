import localLogo from "../../../../../../images/local.svg"
import { useState } from "react";
import { Container } from "./style"
import { AddLocalModal } from "./AddLocalModal";

interface localProps {
    name: string
}

export const Local = ({name}: localProps)=> {
    const [showLocalModal, setShowLocalModal] = useState(false);
    const [cityName, setCityName] = useState("");
    const [cep, setCep] = useState("");


    const childToParent = () => {

    }
    const handleClick = () => {
        if(showLocalModal == false) {
            setShowLocalModal(true);
        } else {
            setShowLocalModal(false);
        }
    }

    return (
        <Container>
            <a className="nav-local" 
                onClick={handleClick}
            >
                    <div className="logo-local">
                        <img src={localLogo}/>
                    </div>
                    <div className="span-msg">
                        <span id="s1">Enviar para {name}</span>
                        <span id="s2">Torres 000000</span>
                    </div>
                </a>
                { showLocalModal == true ? <AddLocalModal childToParent={childToParent}/> : undefined }
                
        </Container>
    )
}