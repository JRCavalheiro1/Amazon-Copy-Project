import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #131921;
    color: #fff;
    height: 5.9rem;
      
    .logo {
        width: 15.964rem;
        padding-top: 10px;
        padding-right: 5px;
        padding-left: 5px;  
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 2px;
    } 

    .logo:hover {
        border-color: #ffffff;
    }
    
    @media(max-width: 1012px) {
        width: 1012px;
    }

    
`;