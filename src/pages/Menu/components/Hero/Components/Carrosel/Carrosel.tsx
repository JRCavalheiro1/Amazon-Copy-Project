import { motion } from "framer-motion";
import { Container } from "./style";
import prevBtn from "../../../../../../images/prev-btn.svg";
import nextBtn from "../../../../../../images/next-btn.svg";


type carroselProps = {
    data?: Array<any> | undefined
}

export const Carrosel = ({data} : carroselProps) => {
    return (
        <Container>
            <div className="carrosel">
                <div className="inner-carrosel">
                    <motion.div>
                        {data?.map((item: any)=> {
                            return (
                                <div>
                                    <h1>{item.h1}</h1>
                                </div>
                            )
                        })} 
                </motion.div>    
                <div className="buttons">
                    <div className="prev-button">
                        <img src={prevBtn}/>
                    </div>
                    <div className="next-button">
                        <img src={nextBtn}/>  
                    </div>
                </div>
                </div>
            </div>
        </Container>
    )
}