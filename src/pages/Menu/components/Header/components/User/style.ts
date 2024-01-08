import { styled } from "styled-components";

export const Container = styled.div`
    .nav-user {
        height: 100%;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 9px 10px 9px 10px;
    }
    .nav-user:hover {
        border-color: #ffffff;
    }
    span {
        display: block;
        font-size: 1.2rem;
        line-height: 1;
    }
    span:nth-child(2) {
        font-size: 1.3rem;
        font-weight: 600;
        display: inline;
    }
    
`;