import { Container } from "./styles"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../Card/Card"
import nextIcon from "../../../../../../images/next.svg";
import prevIcon from "../../../../../../images/prev.svg";
import { images } from "../Images/images-data";
import { useState } from "react";
import { wrap } from "popmotion";

type posterProps = {
    image: string
}

const variants = {
   enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
        }
   },
   center: {
        zIndex: 1,
        x: 0,
   },

   exit: (direction: number)=> {
        return {
            zIndex: 1,
            x: direction < 0 ? 1000 : -1000,
        }
   }
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
}


export const Poster = ({image} : posterProps) => {
    const [[page, direction], setPage] = useState([0, 0]);
    
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, direction]);
    }

    return (
        <Container>
            <div className="slide-show">
                <AnimatePresence initial={false} custom={direction}>
                    <div className="image">
                        <motion.img
                            key={page}
                            src={images[imageIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                           
                            drag="x"
                            onDragEnd={(e, {offset, velocity}) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                 
                                if (swipe > -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe < swipeConfidenceThreshold) {
                                    paginate(-1);
                                }

                            }}
                            style={{maxWidth: "1500px"}}
                        />
                            <div className="direction">
                                <div className="prev-button" onClick={()=> paginate(-1)}>
                                    <img src={prevIcon}/>
                                </div>
                                <div className="next-button" onClick={()=> paginate(1)}>
                                    <img src={nextIcon}/>
                                </div>
                            </div>
                    </div>
                </AnimatePresence>
            </div>

            
        </Container>
    )
} 