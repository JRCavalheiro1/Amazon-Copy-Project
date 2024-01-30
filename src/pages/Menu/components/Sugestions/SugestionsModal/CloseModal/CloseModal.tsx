import closeIconModal from "../../../../../../images/closeModalicon.svg";
import { Container } from "./styles";

import { motion } from "framer-motion";

type closeProps = {
    onClick: () => void
}
export const CloseModal = ({onClick} : closeProps) => {
    return (
        <Container>
            <motion.div
            >
            <div className="sugest-close-modal">
                <img src={closeIconModal} onClick={onClick}/>
            </div>
            </motion.div>
        </Container>
    )
}