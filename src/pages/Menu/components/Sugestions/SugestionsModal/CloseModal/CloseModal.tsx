import closeIconModal from "../../../../../../images/closeModalicon.svg";
import { Container } from "./styles";
type closeProps = {
    onClick: () => void
}
export const CloseModal = ({onClick} : closeProps) => {
    return (
        <Container>
            <div className="sugest-close-modal">
                <img src={closeIconModal} onClick={onClick}/>
            </div>
        </Container>
    )
}