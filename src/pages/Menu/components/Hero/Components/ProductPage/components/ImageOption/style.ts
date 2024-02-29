import { styled } from "styled-components";


export const ImageOptionStyle = styled.div`
   
    .img-mini{
        border: 1px solid #737373;
        width: 50px;
        height: 50px;
        border-radius: 6px;
        cursor: pointer;
    }
    
    .img-mini:hover{
        border: 1px solid var(--focus-input-border);
        box-shadow: 0 0 0 3px #c8f3fa, 0 1px 2px rgba(15,17,17,.15) inset;
    }

`;