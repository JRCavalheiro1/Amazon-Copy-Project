import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: #131921;
    color: #fff;
    height: 5.9rem;
      
    .logo {
        margin-left: 1rem;
        padding-top: 1rem;
        padding-right: 0.5rem;
        padding-left: 0.5rem;  
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 2px;
    } 

    .logo:hover {
        border-color: #ffffff;
    }
    
`;