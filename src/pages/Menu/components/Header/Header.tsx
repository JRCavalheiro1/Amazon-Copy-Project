import { Container } from "./style";
import { Local, Search, User, Ordered, CartComponent} from "./components/Index";
import logoMenu from "../../../../images/logo-menu.png";
import { useState } from "react";

interface HeaderProps {
    name: string
}
export const Header = ({name}: HeaderProps) => {
    
    return (
        <Container>
                <div className="logo">
                    <img src={logoMenu}/>
                </div>
                <Local/>
                <Search/>
                <User name={ name !== '' ? name : 'faça seu login'} />
                <Ordered/>
                <CartComponent/>
        </Container>
    )
}