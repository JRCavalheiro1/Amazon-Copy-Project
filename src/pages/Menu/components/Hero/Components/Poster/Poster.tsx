import { Container } from "./styles"
import { motion } from "framer-motion"
import { Card } from "../Card/Card"

type posterProps = {
    image: string
}
export const Poster = ({image} : posterProps) => {
    return (
        <Container>
            <div className="slide-show">
                <motion.img
                    src={image}
                    style={{maxWidth: "1500px"}}
                />
                    <div className="card-poster">
                        <Card/>
                        <Card/>
                    </div>

            </div>

            
        </Container>
    )
} 