import { styled } from "styled-components";

export const Container = styled.div`
    .nav-sugestions {
        display: flex;
        align-items: center;
        height: 3.8rem;
        background: #232f3e;
        color: #ffffff;
        font-size: 1.34rem;
    }

    .all-sugestions-btn {
        display: flex;
        justify-content: center;
        padding: 0.8rem 0.9rem;
        gap: 0.4rem;
        font-weight: 600;
        font-size: 1.4rem;
        margin-left: 1.8rem;
        border: 1px solid transparent;
        cursor: pointer;
    }

    .all-sugestions-btn:hover, li:hover {
        border-color: #ffffff;
    }

    .nav-sugestions-bar {
        display: flex;
        justify-content: center;
    }
    
    ul {
        display: flex;
        list-style: none;
        gap: 1.2rem;
    }

    li {
        padding: 0.8rem 0.9rem;
        border: 1px solid transparent;
        cursor: pointer;
    }
`;

