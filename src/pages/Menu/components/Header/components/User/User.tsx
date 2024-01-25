import  { Container } from "./style"; 
import { UserModal } from "../UserModal/UserModal";
import { Overlay } from "../../../../../../shared/components/Overlay/Overlay";
import arrow from "../../../../../../images/arrow.svg";

import { auth, fireStore } from "../../../../../../Firebase/firebase-cfg";
import { Firestore, doc, getDoc } from "firebase/firestore";

import { useState } from "react";

interface UserProps {
    name: string,
    onMouseEnter: ()=> void,
    onMouseLeave: ()=> void,
}
export const User = ({ name, onMouseEnter, onMouseLeave} : UserProps) => {
    const [showModal, setShowModal] = useState(false);
    const [dataToHeader, setDataToHeader] = useState(false);

    return (
        <Container>
            <div className="nav-user" 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
                >
               
               <a className="nav-user-link"> 
                    <span>Olá, {name}</span>
                    <span>Contas e Listas </span> <img src={arrow}/>

                </a>
                <UserModal/>
                
                {showModal == true ? <Overlay /> : undefined}  
                
            </div>
        </Container>
    )
}