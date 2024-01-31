
import { Container } from "./style";
import glassLogo from "../../../../../../images/glass.svg";
import { useState } from "react";
import { Overlay } from "../../../../../../shared/components/Overlay/Overlay";

export const Search = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <Container>
           <div className="nav-search" style={isClicked ? {zIndex: 2} : undefined}>
                        <select className="select-search" name="todos"
                        style={isClicked ? 
                              {borderTopColor:"#ff9900", borderBottomColor: "#ff9900", borderLeftColor: "#ff9900"} : undefined}
                        >
                            <option>Todos</option>
                        </select>
                        <input 
                            className="input-search" 
                            type="text" 
                            placeholder="Pesquisa Amazon.com.br"
                            onClick={()=> setIsClicked(true )}
                            style={isClicked ? {borderTopColor:"#ff9900", borderBottomColor: "#ff9900"} : undefined}
                            />
                            
                        <div className="submit" >
                            <input className="input-submit" type="submit" value="" 
                                style={isClicked ? 
                                    {borderTopColor:"#ff9900", borderBottomColor: "#ff9900", borderRightColor: "#ff9900"} : undefined}
                            />
                            <img className="glass-logo" src={glassLogo}/>
                        </div>
                 </div>
        {isClicked && <Overlay onClick={()=> setIsClicked(!isClicked)}/>}
        </Container>
    )
}