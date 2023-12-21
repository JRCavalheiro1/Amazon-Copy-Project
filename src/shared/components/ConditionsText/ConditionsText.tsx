import { ContainerConditions } from "./style"
import { Link } from "react-router-dom"
export const ConditionsText = () => {
    return (
        <ContainerConditions>
            <p>
                Ao criar uma conta, você concorda com as  
                <a href="#"> Condições de<br/>Uso</a> da Amazon. Por favor verifique a <a href="#">Notificação de<br/> Privacidade,</a> 
                <a href="#"> Notificação de Cookies</a> e a <a href="#">Notificação de<br/> Anúncios Baseados em Interesse.</a>
            </p>
 
        </ContainerConditions>
    )
}