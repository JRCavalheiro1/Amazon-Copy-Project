import localLogo from "../../../../../../images/local.svg"
import { useState } from "react";
import { Container } from "./style"


export const userLocation = () => {
    if ("geolocation" in navigator) {
        const geolocation = navigator.geolocation;
        const position = geolocation.getCurrentPosition((pos)=> {
            console.log(pos.coords.latitude, pos.coords.longitude);
        });

    } else {
        console.log("Vaitefude");
    }
}

export const Local = ()=> {
    const [locationUser, setLocationUser] = useState("");
    
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