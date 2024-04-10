import { Container } from "./style"
import { ComponentAnimation } from "../../../../shared/components/ComponentAnimation/ComponentAnimation"


type CartModalProps = {
    isOpen?: boolean,
}
const variants = {
    visible: {x: 0, opacity: 1},
    initial: {x: "-100vh", opacity: 0},
    exit: {x: "-100vh", opacity: 0}
    
}

export const CartModal = ({isOpen} : CartModalProps) => {
    return (
            <Container>
                <ComponentAnimation
                    isOpen={true}
                    variants={variants}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    children={
                        <div className="cart-modal">
                            karalhos
    
                        </div>
                    }
                />                     
               
            </Container>)
}