import { Container } from "./styles";
import { card1Data } from "../../../Components/Poster/Card/Card-data";
import { CSSProperties } from "react";

type cardProps = {
    widthImg?: string,
    heightImg?: string,
    heightCard?: string,
    style?: CSSProperties | undefined,
    src?: string,
    p?: string,
    h1?: string
    a?: string
    href?: string
    children? : any
}
export const Card = ({src, p, h1, a, href, widthImg, heightImg, heightCard, style}: cardProps)=> {
    return (
        <Container>
            <div className="card" style={style}>
                    <h1>{h1}</h1>
                    <img className="card-image" style={{width: widthImg, height: heightImg}} src={src}/>
                    <p className="card-paragraph">{p}</p>
                    <a href={href}>{a}</a>
            </div>
        </Container>
    )
}

export const CardDiff = ({h1, a, href, widthImg, heightImg}: cardProps) => {
    return (        
        <Container>
            <div className="card">
                <h1>{h1}</h1>
            
                {card1Data.map((card)=> (
                    <div key={card.id}>
                        <img style={{width: widthImg, height: heightImg}} src={card.url}/>
                        <p>{card.name}</p>        
                    </div>
                    ))}

                <a href={href}>{a}</a>
            </div>       
        </Container>
    )
}