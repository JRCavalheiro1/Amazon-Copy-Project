import { Container } from "./style";

import { Poster, Carrosel } from "./Index";
import { DataNavItemsAZ, DataCategory } from "./Components/Data/Data"; 

export const Hero = () => { 
    return (
        <Container>
            <Poster/>
            <Carrosel h1="Navegue pelas categorias, de A a Z" data={DataNavItemsAZ} />
            
            
            {/*
                -componente cartaz com imagem
                    -componente card de opções
                
                -componente saldao, mais vendidos, compre por categoria
                - 
            */}
        </Container>
    )
}