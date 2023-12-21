import { useState } from "react";
import { Container } from './style';
import arrow from "../../../../images/seta1.png";
import arrow2 from "../../../../images/seta2.png";

export const Help = ()=> {

    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => {
        if(dropdown == false) {
            setDropdown(true);
        } else {
            setDropdown(false);
        }
    } 
    return (
        <Container>
            <ul className="list-config">
                        <li onClick={handleClick}> <img src={dropdown ? arrow2 : arrow} />  <a href="#"> Precisa de ajuda?</a></li>
                        <li style={{display: dropdown ? `block` : `none`}}>
                            <a className="a1" href="#">Esqueci a senha</a>
                            <a className="a1" href="#">Outros problemas de acesso</a>
                        </li>
                    </ul>
        </Container>
    )
}