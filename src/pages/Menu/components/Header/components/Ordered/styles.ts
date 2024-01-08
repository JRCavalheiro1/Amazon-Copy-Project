import { styled } from "styled-components";

export const Container = styled.div`
    .nav-ordered {
        display: flex;
        height: 100%;
        padding: 9px 10px 9px 10px;
        margin-left: 0.5rem;
        border: 1px solid transparent;
        border-radius: 2px;
        cursor: pointer;
    }
    span {
        display: block;
        font-size: 1.2rem;
        line-height: 1;
    }

    .nav-ordered:hover {
        border-color: #ffffff;
    }
`;