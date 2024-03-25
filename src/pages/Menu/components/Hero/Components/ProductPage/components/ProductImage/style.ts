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
            position: relative;
        }
      
    #lens {
        position: absolute;
        border: 1px solid red;
        width: 200px;
        height: 200px;
        pointer-events: none;
    }   

    #img-principal {
        width: 425px;
        height: 440px;
        cursor: none;
    }
    .img-main {
        width: 425px;
        height: 440px;
    }
    img {
        width: 100px;
        height: 100px;
    }

    .lens {
        width: 100px;
        height: 100px;
        border: 1px solid red;
    }

`;