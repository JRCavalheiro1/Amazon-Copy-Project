import { styled } from "styled-components";


export const ProductShoppingStyle = styled.div`
        
    .product-shopping {
        width: 273px;
        height: 640px;
        margin-left: 20px;
        padding: 14px 18px;
        border: 1px solid #d5d9d9;
        border-radius: 8px;
    }

    .product-price {
        display: flex;
        margin-bottom: 2px;
        h2 {
            font-weight: 400;
            font-size: 2.3rem;
        }

        span {
            font-size: 1.3rem;
            padding-top: 4px;
        }
    }

    .product-shopping-price {
        margin-bottom: 12px;
    }

    span {
        font-size: 1.4rem;
        color: #2e2e2e;
    }

    .product-shopping-delivery {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .free-delivery {
        .free {
            color: #007185;
            cursor: pointer;
        }
        .free:hover {
            color: #c7582c;
            text-decoration: underline; 
        }
    }

    .send-to {
        width: 130px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 2px;

    }
    .send-local {
        font-size: 1.1rem;
        color: #007185;
    }

    .send-to:hover {
        .send-local  {
            color: #c7582c;
        }
    }

    .product-shoppiung-stock {
        margin-top: 10px;
        h2 {
            font-weight: 400;
            font-size: 1.8rem;
            color: #007600;
        }
    }
    
    .product-shopping-delivery-by {
        margin-top: 10px;
        span {
            font-size: 1.1rem;
        }
        .action {
            display: flex;
            gap: 20px;
        }
        .by-devolution {
            color: #007185;
            cursor: pointer;
        }
        .by-devolution:hover {
            color: #c7582c;
        }

        .action-by {
            color: #61616e;
        }
        
    }

    
`