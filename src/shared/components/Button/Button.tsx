import { CSSProperties } from "react";
import { ButtonStyle } from "./style";

interface buttonProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: (e: any)=> void
    children: string
    style?: CSSProperties | undefined
}
export const Button = (props : buttonProps) => {
    return (
        <ButtonStyle>
             <div className="register-btn">
                <button
                    type={props.type}
                    style={props.style}
                >
                    {props.children}
                </button>
             </div>
        </ButtonStyle>
    )
}