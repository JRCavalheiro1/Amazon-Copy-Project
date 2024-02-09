import { Container } from "./styles"
import { motion } from "framer-motion"
import { Card, CardDiff } from "../Poster/Card/Card"
import nextIcon from "../../../../../../images/next.svg";
import prevIcon from "../../../../../../images/prev.svg";
import { images } from "../Images/images-data";
import { useState } from "react";
import { cardsData } from "../Poster/Card/Card-data";

let controler = 0;

const variants = {
    enter : {
        x: `0%`
    },

    exit: (direction: number) => {
        return {
            x: `${controler}%` }
    },
    
    center: (direction: number)=> {
        return {
            x: `${controler}%` //0%, 100%, 200%, 300%
        }
    }
}

export const Poster = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    
    const paginate = (newDirection: number)=> {
        setPage([page + newDirection, newDirection])
        
        if(newDirection == 1) {
            controler += 100
            if(controler > 0) controler = -300

        } else if (newDirection == -1) {
            controler -= 100
            if(controler < -300) controler = 0;
        }
    }    

    return (
        <Container>
           <div className="slide"> 
                <motion.div className="inner-slide">
                    {images.map((item) => {
                        return (
                            <motion.div
                                custom={direction} 
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", duration: 0.35, bounce: 0}}
                                key={item.id}
                                className="image-item">
                                    <img src={item.image} className="image"/>
                            </motion.div>
                        )
                    })}
                
                </motion.div>
                <div className="buttons">
                    <div className="prev-button" onClick={()=> paginate(1)}>
                        <img src={prevIcon}/>
                    </div>
                    <div className="next-button" onClick={()=> paginate(-1)}>
                        <img src={nextIcon}/>
                    </div>
                </div>
                
                <div className="cards">
                   <CardDiff 
                        h1="Veja Echo e Fire TV com Alexa"
                        a="Confira tudo em Dispositivos Amazon" 
                        href="#" 
                        widthImg="140px"
                        heightImg="120px"  
                    />
                    {cardsData.map((card:any)=> (
                        <Card 
                            key={card.id} 
                            h1={card.h1}
                            p={card.p}
                            src={card.url}
                            a={card.a}
                            widthImg={card.width}
                            heightImg={card.height}
                            heightCard={card.heightCard}
                            style={{
                                height: card.heightCard,
                            }}
                        />
                    ))}    

                </div>
           </div>
        </Container>
    )
} 