import { motion } from "framer-motion";
import { Container } from "./style";
import prevBtn from "../../../../../../images/prev-btn.svg";
import nextBtn from "../../../../../../images/next-btn.svg";


type carroselProps = {
    data?: Array<any> | undefined,
    h1?: string
}

export const Carrosel = ({data, h1} : carroselProps) => {
    return (
        <Container>
            <div className="carrousel">
                <h1>{h1}</h1>
                    <motion.div className="inner-carrosel">
                        {data?.map((data: any)=> {
                            return (
                                <motion.div key={data.item.id} className="carrosel-item">
                                    <img src={data.item.url} width={data.item.width}/>
                                </motion.div>
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
        </Container>
    )
}