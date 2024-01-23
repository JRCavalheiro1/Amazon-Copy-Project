import { CSSProperties } from "react";
import { InputStyle } from "./styles"

interface inputProps {
    label?: string,
    placeholder?: string,
    type?: string,
    name: string,
    value: string,
    onChange?: (event: any) => void,
    onInput?: (event: any) => void,
    style?: CSSProperties | undefined;
    a?: string
}

export const Input = (props : inputProps) => {
    
    return (
        <InputStyle>
            <div className="label-line">
                <label>{props.label}</label> <a href="#">{props.a}</a><br/>
            </div>
            <input
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onInput={props.onInput}
                style={props.style}
                />
        </InputStyle>
    )
}