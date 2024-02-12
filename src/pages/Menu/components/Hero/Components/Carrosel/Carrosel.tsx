import { motion, useTransform, useScroll } from "framer-motion";
import { Container } from "./style";
import prevBtn from "../../../../../../images/prev-btn.svg";
import nextBtn from "../../../../../../images/next-btn.svg";
import { useDragControls } from "framer-motion"; 
import { useRef, useState } from "react";

type carroselProps = {
    data?: Array<any> | undefined,
    h1?: string
}




//x 0 - -3140
export const Carrosel = ({h1, data} : carroselProps) => {
    const control = useDragControls();
    const scrollBarRef = useRef<HTMLDivElement | null>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);

   const {scrollY} = useScroll({
    target: scrollBarRef,
   })

   const x = useTransform(scrollY, [0, 1],  ["0", "-3140"]);



    
    return (
        <Container>
              <div className="external-carrousel" >
                <h1>{h1}</h1>
                

                <div className="carrousel">
                    <motion.div
                        ref={targetRef}
                        style={{ x}}
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
                <div className="prev-button">
                    <img src={prevBtn}/>
                </div>
                <div className="next-button" >
                    <img src={nextBtn}/>
                </div>
                
              </div>
                
        </Container>
    )
}