import { styled } from "styled-components";

export const Container = styled.div`
    background: #ffffff;    
    margin-top: 30px;
    
    .product-page {
        display: flex;
        justify-content: center;
    }

    .product-image {
        display: flex;
        width: 500px;
        gap: 10px;
    }

    .img-options {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

    .img-main {
    }

    .img-principal {
        width: 425px;
        height: 440px;
    }
    
    
    
    
    img {
        width: 100px;
        height: 100px;
    }

    .product-informations, .product-shopping {
        border: 1px solid red;
        height: 300px;
    }

    .product-informations {

    }

    
`   
;