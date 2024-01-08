import { styled } from "styled-components";

export const Container = styled.div`
    .nav-link-cart-section {
        display: flex;
        cursor: pointer;
        height: 100%;
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 5px 5px 5px 5px;
        margin-left: 1rem;
    }
    
    .nav-link-cart-section:hover {
        border-color: #ffffff;
    }

    .nav-cart {
        display: flex;
        justify-content: center;
        
        .count {
            position: absolute;
            font-size: 1.6rem;
            padding-left: 0.5rem;
            color: #f08804;
            font-weight: 600;
        }
    }

    .cart-text {
        font-size: 1.2rem;
        font-weight: 600;
        margin-left: 0.3rem;
        margin-top: 2rem;
    }

`;
