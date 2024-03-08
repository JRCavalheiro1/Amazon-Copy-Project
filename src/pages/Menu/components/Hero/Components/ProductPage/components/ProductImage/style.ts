import { styled } from "styled-components";


export const ProductImageStyle = styled.div`
    .product-image {
        display: flex;
        position: relative;
        width: 500px;
        height: 500px;
        gap: 10px;
        cursor: pointer;
    }

    .img-options {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

    .img-principal {
        width: 425px;
        height: 440px;
    }
    
    img {
        width: 100px;
        height: 100px;
    }

`;