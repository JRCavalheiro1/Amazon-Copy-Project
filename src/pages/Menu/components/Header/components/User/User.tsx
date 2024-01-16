import  { Container } from "./style"; 
import { UserModal } from "./UserModal";

import arrow from "../../../../../../images/arrow.svg";

import { auth, fireStore } from "../../../../../../Firebase/firebase-cfg";
import { Firestore, doc, getDoc } from "firebase/firestore";

import { useState } from "react";

interface UserProps {
    name: string
}
export const User = ({ name } : UserProps) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <Container>
            <div className="nav-user">
               <a className="nav-user-link"> 
                    <span>Olá, {name}</span>
                    <span>Contas e Listas </span> <img src={arrow}/>
                </a>
                <UserModal/> 
            </div>
        </Container>
    )
}