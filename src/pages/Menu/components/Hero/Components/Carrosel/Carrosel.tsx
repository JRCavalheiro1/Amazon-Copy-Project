import { motion } from "framer-motion";
import { Container } from "./style";
import prevBtn from "../../../../../../images/prev-btn.svg";
import nextBtn from "../../../../../../images/next-btn.svg";


type carroselProps = {
    data?: Array<any> | undefined,
    h1?: string
}

export const Carrosel = ({h1, data} : carroselProps) => {
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
                    <motion.div className="inner-carrousel">
                            {data?.map((data: any)=> {
                                return (
                                    <motion.div key={data.item.id} className="carrousel-item">
                                        <img src={data.item.url} width={data.item.width}/>
                                    </motion.div>
                                )
                            })} 
                    </motion.div> 
                </div>
                
                <div className="drag-section">
                    <motion.div className="drag-bar">
                    </motion.div>
                </div>
              </div>
                
        </Container>
    )
}