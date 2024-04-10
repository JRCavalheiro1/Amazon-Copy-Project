import { ContentModal } from "./ContentModal/ContentModal"
import { CloseModal } from "./CloseModal/CloseModal"
import { motion, AnimatePresence } from "framer-motion"
import { ComponentAnimation } from "../../../../../shared/components/ComponentAnimation/ComponentAnimation"

type modalProps = { 
    name: string,
    isOpen: boolean,
    onClick: ()=> void
    key?: string
}

const variants = {
    visible: {x: 0, opacity: 1},
    initial: {x: "-100vh", opacity: 0},
    exit: {x: "-100vh", opacity: 0}
    
}
export const SugestionsModal = ({name, isOpen, onClick}: modalProps) => {
    return (
            <ComponentAnimation 
                isOpen={isOpen}
                key="modal"
                style={{position: "absolute", top: 0, zIndex: 2}}
                variants={variants}
                initial="initial"
                animate="visible"
                exit="exit"
                transition={{duration: 0.4}}
                children={
                    <>
                    <ContentModal name={name}/>
                    <CloseModal onClick={onClick}/> 
                    </>
                }
            />
    )
}