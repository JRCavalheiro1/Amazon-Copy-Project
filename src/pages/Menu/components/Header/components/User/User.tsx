import  { Container } from "./style"; 
import arrow from "../../../../../../images/arrow.svg";

interface UserProps {
    name: string,
    onMouseEnter: ()=> void,
    onMouseLeave: ()=> void,
    openModal: any,
    isOpen: boolean
}
export const User = ({ name, onMouseEnter, onMouseLeave, openModal, isOpen} : UserProps) => {
    return (
        <Container>
            <div className="nav-user" 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
                style={isOpen ? {zIndex: 2} : undefined}
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