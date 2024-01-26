import  { Container } from "./style"; 
import { UserModal } from "../UserModal/UserModal";
import arrow from "../../../../../../images/arrow.svg";

import { auth, fireStore } from "../../../../../../Firebase/firebase-cfg";
import { Firestore, doc, getDoc } from "firebase/firestore";

import { useState } from "react";

interface UserProps {
    name: string,
    onMouseEnter: ()=> void,
    onMouseLeave: ()=> void,
    openModal: any,
}
export const User = ({ name, onMouseEnter, onMouseLeave, openModal} : UserProps) => {
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
                <div>
                    {openModal}
                </div>
            </div>
        </Container>
    )
}