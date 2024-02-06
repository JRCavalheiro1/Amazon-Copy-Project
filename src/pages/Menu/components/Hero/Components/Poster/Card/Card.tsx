import { Container } from "./styles";
import { card1Data } from "../../../Components/Poster/Card/Card-data";

type cardProps = {
    width?: string,
    height?: string,
    src?: string,
    p?: string,
    h1?: string
    a?: string
    href?: string

}
export const Card = ({src, p, h1, a, href, width, height}: cardProps)=> {
    return (
        <Container>
            <div className="card">
                    <h1>{h1}</h1>
                    <img className="card-image" style={{width: width, height: height}} src={src}/>
                    <a href={href}>{a}</a>
            </div>
        </Container>
    )
}

export const CardDiff = ({h1, a, href, width, height}: cardProps) => {
    return (        
        <Container>
            <div className="card ">
                <h1>{h1}</h1>
            
                {card1Data.map((card)=> (
                    <div key={card.id}>
                        <img style={{width: width, height: height}} src={card.url}/>
                        <p>{card.name}</p>        
                    </div>
                    ))}

                <a href={href}>{a}</a>
            </div>       
        </Container>
    )
}