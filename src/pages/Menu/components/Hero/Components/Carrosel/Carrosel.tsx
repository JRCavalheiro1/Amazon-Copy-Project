import { motion, useTransform, useMotionValue } from "framer-motion";
import { Container } from "./style";
import prevBtn from "../../../../../../images/prev-btn.svg";
import nextBtn from "../../../../../../images/next-btn.svg";
import { useRef, useState, useEffect } from "react";
import React from "react";

type carroselProps = {
    data?: Array<any> | undefined,
    h1?: string
}


const variants = {
    inital: {
        x: 0
    },
    animate: (direction: number)=> {
        return { 
            x: direction
        }
    },
}

const variantsDragBar = {
    initial: {
        x: 0,
    },
    animate: (direction: number) => {
        return {
            x: direction
        }
    }
}




//x 0 - -3140
export const Carrosel = ({h1, data} : carroselProps) => {
    const [control, setControl] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [dragDirection, setDragDirection] = useState(0);    

    const carouselref = React.createRef<HTMLDivElement>();
    const carouselWidth = carouselref.current?.offsetWidth;

    const scrollBarRef = useRef<HTMLDivElement>(null);

    const next = () => {
        setControl(control + 1110);
        if(control >=  (carouselref.current ? carouselref.current.offsetWidth : 0)) {
            setControl(3330);
        }
    }   

    const prev = () => {
        setControl(control - 1110);
        if(control <= (carouselref.current ? carouselref.current.offsetWidth : 0)) {
            setControl(0);
        }
    }
    

    const onDragStart = () => {
        setControl(control);
        setIsDrag(true)
    }
    const onDraggin = (e: any) => {
       isDrag ? setControl((e.clientX * 0.25)) : undefined
       if(control >=  (carouselref.current ? carouselref.current.offsetWidth : 0)){
        setControl(3300);
       }
    }
    
    const onDragEnd = () => {
        setControl(control)
        setIsDrag(false)
    }
    
    return (
        <Container>
              <div className="external-carrousel" >
                <h1>{h1}</h1>
                

                <div className="carrousel" ref={carouselref}>
                    <motion.div
                        variants={variants}
                        custom={-control}
                        initial="inital"
                        animate="animate"
                        exit="exit"
                        transition={{spring: 0, duration: 0.35}}
                        className="inner-carrousel">
                            {data?.map((data: any)=> {
                                return (
                                    <motion.div 
                                        key={data.item.id} className="carrousel-item">
                                        <img src={data.item.url} width={data.item.width}/>
                                    </motion.div>
                                )
                            })} 
                    </motion.div> 
                </div>
                <div className="prev-button" onClick={()=> prev()}>
                    <img src={prevBtn}/>
                </div>
                <div className="next-button"  onClick={()=> next()}>
                    <img src={nextBtn}/>
                </div>
                

<div className="drag-section" ref={scrollBarRef}>
                    <motion.div
                        drag="x"
                        variants={variantsDragBar}
                        animate="animate"
                        transition={{spring: 0, duration: 0.35}}
                        dragConstraints={scrollBarRef}
                        dragElastic={0}
                        dragMomentum={false}
                        className="drag-bar"
                        draggable
                        onDragStart={()=> onDragStart()}
                        onDrag={(e)=> onDraggin(e)}
                        onDragEnd={()=> onDragEnd()}
                        >
                    </motion.div>
                </div>
              </div>
                
        </Container>
    )
}