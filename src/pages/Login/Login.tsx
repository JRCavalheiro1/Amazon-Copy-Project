
import { Container, Centralize, Content } from "./styles";
import { FormLogin } from "./components/Form/FormLogin";

import { Button } from "../../shared/components/Index";
import { Footer } from "../../shared/components/Footer/Footer";
import img from "../../images/icon2.png";


import { useNavigate, Link } from "react-router-dom";


export const Login = () => {

    
    const navigate = useNavigate();
   
    return (
        <Container>
            <header>
                <img src={img}/>
            </header>
            
            <Centralize>
                <Content>
                    
                    <FormLogin/>
                    
                </Content>

                <h5>Novo no Amazon?</h5>
                <Button
                    type="button"
                    style={{
                        width: "34.8rem", 
                        backgroundColor: "#fff", 
                        border: " 1px solid #d0d0d0",
                        boxShadow: "inset 0px 1px 30px 0px rgba(233, 233, 233, 0.12)",
                    }}
                    onClick={()=>navigate("/signup")}
                >
                    Criar sua conta da Amazon
                </Button>

            </Centralize>
            <Footer/>
        </Container>
    )
}