import { Container, Centralize, Content } from "./style"
import { Form } from "./component/Form/Form";
import { ConditionsText } from "../../shared/components/ConditionsText/ConditionsText";
import { Footer } from "../../shared/components/Footer/Footer";


import icon from "../../images/icon2.png";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <Container>
            <header> 
                <img className="icon" src={icon}/>
            </header>
            <Centralize> 
                <Content>
                        <Form/>
                        <ConditionsText/>
                        <hr className='line'/>
                        <p className='login-acc'>Você já tem uma conta? <Link to="/signin">Fazer login</Link></p>   
                </Content>
            </Centralize>
                <Footer/>
        </Container>
    )
}
