import { Container } from "./style";
import { Local, Search, User, Ordered, CartComponent } from "./components/Index";
import logoMenu from "../../../../images/logo-menu.png";
import { useState } from "react";
import { UserModal } from "./components/UserModal/UserModal";
import { CartModal } from "./components/CartModal/CartModal";
import { Overlay } from "../../../../shared/components/Overlay/Overlay";
interface HeaderProps {
    name: string,
}
export const Header = ({name}: HeaderProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <div className="nav-header">
                <div className="logo">
                    <img src={logoMenu}/>
                </div>
                <Local name={name !== '' ? name : ''}/>
                <Search/>
                <User 
                    name={ name !== '' ? name : 'faça seu login'}
                    onMouseEnter={()=> setModalIsOpen(!modalIsOpen)}    
                    onMouseLeave={()=> setModalIsOpen(!modalIsOpen)}
                    isOpen={modalIsOpen}
                    openModal={modalIsOpen && <UserModal/>}/>
                <Ordered/>
                <CartComponent click={()=> setIsOpen(!isOpen)}/>
                {isOpen && <CartModal/>}
                
            </div>
        </Container>
    )
}