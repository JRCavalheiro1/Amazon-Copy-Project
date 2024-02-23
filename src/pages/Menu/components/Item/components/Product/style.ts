import { styled } from "styled-components";

export const Container = styled.div`
    .product {
        display: flex;
        flex-direction: column;
        padding: 30px;
        width: 300px;
        border: 1px solid transparent;
        border-radius: 5px;
        cursor: pointer;
        height: 350px;
    }

    .product:hover {
        border-color: #ccc;
    }

   .product-image {
        display: flex;
        justify-content: center;
   }
    p {
        margin-bottom: 10px;
        font-size: 1.4rem;
        color: #6b6b6b;
    }

    .price {
        display: flex;
    }
    h2 {
        font-size: 1.7rem ;
    }

    h2, span {
        font-weight: 400;
    }

    span {
        font-size: 0.9rem;
        color: #3d3d3d;
    }

`;