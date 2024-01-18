import { styled } from "styled-components";

export const Container = styled.div`
    
    .nav-sugestions {
        width: 100%;
        display: flex;
        align-items: center;
        height: 3.8rem;
        background: #232f3e;
        color: #ffffff;
        font-size: 1.33rem;
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
//1652px
    .nav-sugestions-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 340px;
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        padding: 0.8rem 0.9rem;
        border-radius: 3px;
        border: 1px solid transparent;
        cursor: pointer;
    }

    .nav-sugest-title {
        font-size: 1.2rem;
        padding: 0px 10px 0px 10px; 
        border: 1px solid transparent;
        cursor: pointer;
    }
    .nav-sugest-title:hover {
        border-color: #ffffff;
    }
`;

