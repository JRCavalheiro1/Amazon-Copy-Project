import { Input, Button } from "../../../../../../shared/components/Index";
import { validationCepSchema as validationSchema } from "../../../../../Register/Validation";
import { useState } from "react";


interface modalProps {
    setLocalText: (e: any, i: any)=> void;
}
export const AddLocalModal = ({setLocalText}: modalProps) => {
    const [city, setCity] = useState("");
    const [cep, setCep] = useState("");
    
    return (
        <div className="nav-local-modal">
              <div className="header-local-modal"><h2>Escolha sua localização</h2> </div>  
              
              <div className="body-local-modal">
                    <span className="options-span">As opções e velocidade de entrega podem variar de acordo<br/>com a região</span>
                    
                    <span className="cep-span">ou insira um CEP do Brasil</span>
                    
                    <div className="input-local-modal">
                        <div className="city-local">
                            <label>cidade</label>
                            <Input
                                name="city"
                                type="text"
                                value={city}
                                onChange={(e)=> setCity(e.target.value)}
                                style={{width: '120px'}}
                            /> 
                        </div>
                        <span className="span-hyp"> - </span>
                        
                        <div className="cep-local">
                            <label>cep</label>
                            <Input
                                name="cep"
                                type="text"
                                value={cep}
                                onChange={(e)=> setCep(e.target.value)}
                                style={{width: '80px'}}
                            />
                        </div>

                       <button
                            onClick={()=> setLocalText(city, cep)}
                            >
                                Confirmar
                        </button>
                                      
                    </div>
                </div>
        </div>
    )
}