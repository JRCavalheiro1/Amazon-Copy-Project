import  { Container } from "./style"; 
import arrow from "../../../../../../images/arrow.svg";
import { auth } from "../../../../../../Firebase/firebase-cfg";
import { onAuthStateChanged } from "firebase/auth";

import { useState } from "react";

export const User = () => {
    const [userName, setUserName] = useState('');
    onAuthStateChanged(auth, (user)=> {
        if(user) {
            
        }
    })

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