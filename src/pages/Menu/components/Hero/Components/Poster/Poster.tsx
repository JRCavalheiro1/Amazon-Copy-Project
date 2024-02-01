import { Container } from "./styles"
import { motion } from "framer-motion"
import { Card } from "../Card/Card"
import nextIcon from "../../../../../../images/next.svg";
import prevIcon from "../../../../../../images/prev.svg";

type posterProps = {
    image: string
}
export const Poster = ({image} : posterProps) => {
    return (
        <Container>
            <div className="slide-show">
                <div className="image">
                    <motion.img
                        src={image}
                        style={{maxWidth: "1500px"}}
                    />
                        <div className="direction">
                            <div className="prev-button">
                                <img src={prevIcon}/>
                            </div>
                            <div className="next-button">
                                <img src={nextIcon}/>
                            </div>
                        </div>
                </div>

            </div>

            
        </Container>
    )
} 