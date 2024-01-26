import { CSSProperties } from "react";
import { ButtonStyle } from "./style";

interface buttonProps {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: (e: any)=> void
    children: string
    style?: CSSProperties | undefined
}
export const Button = ({style, children, type, onClick}: buttonProps) => {
    return (
        <ButtonStyle>
             <div className="register-btn">
                <button
                    onClick={onClick}
                    type={type}
                    style={style}
                >
                    {children}
                </button>
             </div>
        </ButtonStyle>
    )
}