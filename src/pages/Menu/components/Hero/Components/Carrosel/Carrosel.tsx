import { motion } from "framer-motion";
import { Container } from "./style";
import prevBtn from "../../../../../../images/prev-btn.svg";
import nextBtn from "../../../../../../images/next-btn.svg";
import { useDragControls } from "framer-motion"; 
import { useRef, useState } from "react";

type carroselProps = {
    data?: Array<any> | undefined,
    h1?: string
}


const variants = {
    enter: {
        x: 0,
    }
}

export const Carrosel = ({h1, data} : carroselProps) => {
    const control = useDragControls();
    const scrollBarRef = useRef(null);
    const [counter, setCounter] = useState(0);

    console.log(counter);
    return (
        <Container>
              <div className="external-carrousel">
                <h1>{h1}</h1>
                <div className="prev-button">
                    <img src={prevBtn}/>
                </div>
                <div className="next-button">
                    <img src={nextBtn}/>
                </div>

                <div className="carrousel">
                    <motion.div
                        variants={variants}
                        initial="enter"
                         //x 0 - -3140
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
                
                <div className="drag-section" ref={scrollBarRef}>
                    <motion.div
                        drag="x"
                        dragConstraints={scrollBarRef}
                        dragElastic={0}
                        dragMomentum={false}
                        className="drag-bar"
                        onDrag={()=> setCounter(counter + 1)}
                        >
                    </motion.div>
                </div>
              </div>
                
        </Container>
    )
}