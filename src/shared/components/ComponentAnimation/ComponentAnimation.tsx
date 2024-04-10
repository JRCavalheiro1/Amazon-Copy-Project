import { 
    motion, 
    AnimatePresence, 
    Variants, TargetAndTransition, 
    VariantLabels, 
    AnimationControls,
    Transition
    } from "framer-motion"

import { CSSProperties } from "react"

type componentAnimationProps = {
    isOpen?: boolean,
    key?: string,
    variants?: Variants,
    animate?: boolean | TargetAndTransition | VariantLabels | AnimationControls | undefined,
    initial?: boolean | VariantLabels | undefined,
    exit?: TargetAndTransition | VariantLabels | undefined,
    transition?: Transition | undefined
    children?: any,
    style?: CSSProperties | undefined

}
export const ComponentAnimation = ({isOpen, key, variants, animate, initial, exit, children, style, transition} : componentAnimationProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key={key}
                    style={style}
                    variants={variants}
                    animate={animate}
                    initial={initial}
                    exit={exit}
                    transition={transition}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}