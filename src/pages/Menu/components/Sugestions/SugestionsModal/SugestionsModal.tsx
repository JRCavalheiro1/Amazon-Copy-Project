import { ContentModal } from "./ContentModal/ContentModal"
import { CloseModal } from "./CloseModal/CloseModal"
import { motion, AnimatePresence } from "framer-motion"


type modalProps = { 
    name: string,
    isOpen: boolean,
    onClick: ()=> void
}

const variants = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}
export const SugestionsModal = ({name, isOpen, onClick}: modalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                >
                    <ContentModal name={name}/> <CloseModal onClick={onClick}/>
                </motion.div>
            ) }
        </AnimatePresence>        
    )
}