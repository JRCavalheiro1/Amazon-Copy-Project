import localLogo from "../../../../../../images/local.svg"
import { useState } from "react";
import { Container } from "./style"
import { AddLocalModal } from "./AddLocalModal";
import { Overlay } from "../../../../../../shared/components/Overlay/Overlay";

interface localProps {
    name: string
}

export const Local = ({name}: localProps)=> {
    const [showLocalModal, setShowLocalModal] = useState(false);
    const [cityName, setCityName] = useState("");
    const [cep, setCep] = useState("");

    const setLocalText= (cityData: any, cepData: any) => {
        setCityName(cityData);
        setCep(cepData);
        setShowLocalModal(!showLocalModal);
    }
   

    return (
        <Container>
            <a className="nav-local" 
                onClick={()=> setShowLocalModal(!showLocalModal)}
            >
                    <div className="logo-local">
                        <img src={localLogo}/>
                    </div>
                    <div className="span-msg">
                        <span id="s1">Enviar para {name}</span>
                        <span id="s2">{cityName == "" ? "Atualizar local" : cityName} {cep == "" ?  undefined : cep}</span>
                       
                    </div>
                </a>
                {showLocalModal == true ? <AddLocalModal setLocalText={setLocalText}/> : undefined} 
                {showLocalModal == true ? <Overlay onClick={()=> setShowLocalModal(!showLocalModal)}/> : undefined}

        </Container>
    )
}