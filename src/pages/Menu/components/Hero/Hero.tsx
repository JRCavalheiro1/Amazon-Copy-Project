import { Container } from "./style";

import { Poster, Carrosel } from "./Index";
import { DataNavcarouselItemsAZ} from "./Components/Data/Data"; 

export const Hero = () => { 
    return (
        <Container>
            <div className="hero">
                <Poster/>
                <Carrosel h1="Navegue pelas categorias, de A a Z" data={DataNavcarouselItemsAZ}/>
            </div>
            
            
            {/*
                -componente cartaz com imagem
                    -componente card de opções
                
                -componente saldao, mais vendidos, compre por categoria
                - 
            */}
        </Container>
    )
}