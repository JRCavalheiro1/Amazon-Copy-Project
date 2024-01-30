import { ContentModal } from "./ContentModal/ContentModal"
import { CloseModal } from "./CloseModal/CloseModal"
import { motion, AnimatePresence } from "framer-motion"


type modalProps = { 
    name: string,
    isOpen: boolean,
    onClick: ()=> void
    key: string
}

const variants = {
    visible: {x: 0, opacity: 1},
    initial: {x: "-100vh", opacity: 0},
    
}
export const SugestionsModal = ({name, isOpen, onClick, key}: modalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key={key}
                    style={{position: "absolute", top: 0, zIndex: 2}}
                    variants={variants}
                    initial="initial"
                    animate="visible"
                    exit="initial"
                    transition={{duration: 0.4}}
                >
                    <ContentModal name={name}/> 
                    <CloseModal onClick={onClick}/>
                </motion.div>
            ) }
        </AnimatePresence>        
    )
}