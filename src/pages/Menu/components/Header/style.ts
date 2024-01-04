import { styled } from "styled-components";

export const Container = styled.div`
    .logo {
       margin-left: 0.5rem;
       padding-top: 0.5rem ;
       padding-right: 0.5rem;
    }
    header {
        height: 5.9rem;
        display: flex;
        align-items: center;
        background: #131921;
        color: #ffffff;
       
        
        div {
            cursor: pointer;
            border: 1px solid  transparent
        }

        div:hover {
            border: 1px solid white;
        }
    }

`;