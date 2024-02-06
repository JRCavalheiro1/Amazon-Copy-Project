import { Container } from "./styles";


type cardProps = {
    width?: string,
    height?: string,
    src?: string,
    src2?: string,
    src3?: string,
    src4?: string,
    p?: string,
    h1?: string
    map: any

}
export const Card = ({map}: cardProps)=> {
    return (
        <Container>
            <div className="card">
                    <h1>{map}</h1>
                    <img src={map}/>
                    
                    <p>{map}</p>
                    
            </div>
        </Container>
    )
}