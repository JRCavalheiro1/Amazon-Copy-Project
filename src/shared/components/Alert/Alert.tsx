import { AlertContainer } from './style';
import iconAlert from "../../../images/umapoha.png";


export const Alert = () => {
    return (
        <AlertContainer>
        <div className='alert-msg'> 
            <img className='alert' src={iconAlert}/> <p id='p1'> As senhas devem ter pelo menos 6 caracteres</p>
        </div>
        </AlertContainer>
    )
}

interface alert2Props {
    message: string | undefined;
    icon: any
}
export const Alert2 = ({message, icon} : alert2Props) => {
    return ( 
        <AlertContainer>
            <img className='alert2' src={icon} /> <p id='p2'>{message}</p> 
        </AlertContainer>
    )
}

