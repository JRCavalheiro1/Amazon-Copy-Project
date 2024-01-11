import  { Container } from "./style"; 
import arrow from "../../../../../../images/arrow.svg";

import { auth, fireStore } from "../../../../../../Firebase/firebase-cfg";
import { Firestore, doc, getDoc } from "firebase/firestore";

import { useState } from "react";

export const User = () => {
    const [userLogged, setUserLogged] = useState(false);
    const [userName, setUserName] = useState("");
    
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