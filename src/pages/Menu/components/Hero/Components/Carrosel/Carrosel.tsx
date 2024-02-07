import { Container } from "./style";

type carroselProps = {
    data?: Array<any> | undefined
}

export const Carrosel = ({data} : carroselProps) => {
    return (
        <Container>
            <div className="carrosel">
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                <h1>aaaa</h1>
                
                <div className="inner-carrosel">
                    {data?.map((item: any)=> 
                    (
                            <div>
                                <h1>{item.h1}</h1>
                            </div>
                    )
                    )}    

                </div>
            </div>
        </Container>
    )
}