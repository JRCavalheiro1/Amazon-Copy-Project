import { Container } from "./style";
import { Local, Search, User, Ordered, CartComponent } from "./components/Index";
import logoMenu from "../../../../images/logo-menu.png";
import { useState } from "react";
import { UserModal } from "./components/UserModal/UserModal";

interface HeaderProps {
    name: string,
}
export const Header = ({name}: HeaderProps) => {
    const [modalOpen, setModalOpen] = useState(false);

   

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
                    onMouseEnter={()=> console.log("aaa")}    
                    onMouseLeave={()=> console.log("aaa")}/>
                
                <Ordered/>
                <CartComponent/>
            </div>
        </Container>
    )
}