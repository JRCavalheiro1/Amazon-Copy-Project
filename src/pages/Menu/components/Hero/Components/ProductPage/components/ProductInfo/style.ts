import { styled } from "styled-components";

export const ProductInfoStyle = styled.div`
    
    //product info body
    .product-informations {
        width:700px;
    }

   //product title info content
   .product-title-info {
        margin-bottom: 5px;
   }

    .product-title {
        font-size: 2.4rem;
        font-weight: 400;
    }

    .product-brand {
        cursor: pointer;
        color: #007185;
        font-size: 1.4rem;
    }

    .product-brand:hover {
        color: #c7582c;
        text-decoration: underline;
    }
    .product-rate {
        display: flex;
        gap: 3px;
    }
    .product-rate-value {
        font-size: 1.3rem;
    }
     


    .horizontal-line {
        width: 100%;
        height: 1px;
        border-top: 0;       
        border-bottom: 1px solid #ccc;      
    }
    

    //product price info content

    .product-price {
        display: flex;
        margin-top: 10px;

        h2 {
            font-weight: 400;
            font-size: 2.2rem;
        }

        span {
            font-size: 1.1rem;
            padding-top: 4px;
        }
    }
    .price-portion, .price-portion-text {
        font-size: 1.2rem;
    }
    
    .price-portion-text {
        color: #5c5c5c;
    }


    .purchase-icons {
      display: flex;
      gap: 30px;
      margin-top: 10px;
      margin-bottom: 15px;
    }

    .purchase-mode-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
            width: 35px;
            height: 35px;
        }

        a{
            text-align: center;
            color: #007185;
        }
    }

    .product-about-info {
        margin-top: 30px;
    }
    .product-about-text {
        font-size: 1.2rem;
        line-height: 1.8;
    }

`;