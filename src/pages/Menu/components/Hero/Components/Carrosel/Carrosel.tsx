import { motion, useTransform, useMotionValue, clamp } from "framer-motion";
import { Container } from "./style";
import prevBtn from "../../../../../../images/prev-btn.svg";
import nextBtn from "../../../../../../images/next-btn.svg";
import { useRef, useState, useEffect } from "react";

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
            x: -direction
        }
    },
    exit: (direction: number)=> {
        return { 
            x: -direction
        }
    }
}



//x 0 - -3140
export const Carrosel = ({h1, data} : carroselProps) => {
    const [control, setControl] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    //const refWidth = carouselRef.current?.clientWidth;
    const [width, setWidth] = useState(0);
    const [id, setId] = useState(0);

    const sizes = [1250, 1250, 800];


    const directions = (newDirection: number) => {
        setControl(control + newDirection)
    }
    
    const paginate = (newId: number) => {
        setId(id + newId);
        if(newId < sizes.length ) {
            directions(+sizes[id]);
        } else if (newId >= sizes.length) {
            directions(-sizes[id])
        }

        console.log(id);
    }
    return (
        <Container>
              <div className="external-carrousel" >
                <h1>{h1}</h1>
                

                <div className="carrousel">
                    <motion.div
                        ref={carouselRef}
                        variants={variants}
                        custom={control}
                        initial="inital"
                        animate="animate"
                        exit="exit"
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
                <div className="prev-button" onClick={()=> paginate(-1)}>
                    <img src={prevBtn}/>
                </div>
                <div className="next-button" onClick={()=> paginate(+1)} >
                    <img src={nextBtn}/>
                </div>
                
              </div>
                
        </Container>
    )
}