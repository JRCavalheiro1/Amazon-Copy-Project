import { motion } from "framer-motion";

type overlayProps = {
    onClick? : ()=> void
    onMouseEnter?: ()=> void,
}
export const Overlay = ({onClick, onMouseEnter}: overlayProps) => {
    return (
            <motion.div onClick={onClick} onMouseEnter={onMouseEnter}
                key="overlay"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.4}}
                style={ {
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    background: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                    cursor: "default",
                }}  
            >
            </motion.div>
    )
}