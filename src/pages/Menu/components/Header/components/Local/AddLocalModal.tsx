import { Input, Button } from "../../../../../../shared/components/Index";
import { validationCepSchema as validationSchema } from "../../../../../Register/Validation";
import { useState } from "react";
import { useFormik} from "formik";
import { Alert2 } from "../../../../../../shared/components/Index";
import iconAlert3 from "../../../../../../images/alertIcon3.svg";

interface modalProps {
    setLocalText: (e: any, i: any)=> void;
}
interface values {
    city_name: string;
    cep_numb: string
}
const initialValues: values = {
    city_name: "",
    cep_numb: ""
}

const onSubmit = () => {}

export const AddLocalModal = ({setLocalText}: modalProps) => {
    
    const formik = useFormik<values>({
        validationSchema,
        initialValues,
        onSubmit
    });

    return (
        <form onSubmit={formik.handleSubmit}>
        <div className="nav-local-modal">
              <div className="header-local-modal"><h2>Escolha sua localização</h2> </div>  
              <div className="body-local-modal">
                    <span className="options-span">As opções e velocidade de entrega podem variar de acordo<br/>com a região</span>
                    
                    <span className="cep-span">ou insira um CEP do Brasil</span>
                    
                    <div className="input-local-modal">
                            <div className="city-local">
                                <label>cidade</label>
                                <Input
                                    name={"city_name"}
                                    type={"text"}
                                    value={formik.values.city_name}
                                    onChange={formik.handleChange}
                                    style={{width: '120px'}}
                                />           
                            </div>
                            <span className="span-hyp"> - </span>
                            
                            <div className="cep-local">
                                <label>cep</label>
                                <Input
                                    name={"cep_numb"}
                                    type={"text"}
                                    value={formik.values.cep_numb}
                                    onChange={formik.handleChange}
                                    style={{width: '80px'}}
                                />
                            </div>
                        <button
                            type="submit"
                            onClick={()=> formik.values.city_name && formik.values.cep_numb != "" ? setLocalText(formik.values.city_name, formik.values.cep_numb) : undefined}
                                >
                                    Confirmar
                            </button>
                        </div>
                        <div className="local-modal-error">
                            { formik.errors.cep_numb && <Alert2 icon={iconAlert3} message={formik.errors.city_name || formik.errors.cep_numb}/>}
                        </div>
                </div>
        </div>
    </form>
    )
}