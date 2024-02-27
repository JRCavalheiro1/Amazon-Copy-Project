import { styled } from "styled-components";

export const Container = styled.div`
    .product {
        display: flex;
        flex-direction: column;
        padding: 8px;
        padding-top: 20px;
        width: 300px;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
        height: 400px;
    }

   .product-image {
        display: flex;
        justify-content: center;
        cursor: pointer;
   }
    a {
        margin-bottom: 10px;
        margin-top: 20px;
        font-size: 1.4rem;
        color: #292929;
        text-decoration: none;
        cursor: pointer;
    }
    a:hover {
        color: #ca511f;
    }

    .price {
        display: flex;
        width: 70px;
        cursor: pointer;
        gap: 3px;
    }
    h2 {
        font-size: 2rem;
    }

    h2, span {
        font-weight: 400;
    }

    span {
        font-size: 1rem;
        color: #3d3d3d;
    }

`;