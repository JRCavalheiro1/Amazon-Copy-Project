import { styled } from "styled-components";

export const Container = styled.div`
    .cart-modal {
        right: 0;
        width: 140px;
        height: 100vh;
        border: 1px solid #e0e0e0;
        border-top-left-radius: 4px;
        background: #fff;
        padding: 8px;
        padding-top: 10px;

        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .cart-m-total-cost {
        margin-bottom: 5px;
        span {
            font-size: 1.2rem;
        }
        h2 {
            color: #b32704;
        }
    }

    .free-delivery {
        line-height: 1.3;
        p {
            font-size: 1.1rem;
            color: gray;
        }
        #green-p {
            color: #067d62;
        }
        #link-p {
            text-decoration: none;
            color: #007185;
        }

        #link-p:hover {
            text-decoration: underline;
            color: var(--link-color-hover);
        }
    }

    .product {
        margin-top: 10px;
    }
    
    .product-visualize {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product-img {
        padding: 2px;
        border: 1px solid transparent;
        
        img {
            width: 109px;
            height: 109px;
            cursor: pointer;
        }

    }
    .product-img:hover {
        border-color: #d9d5d5;
    }

    .trash {
        margin-top: 5px;
        cursor: pointer;
        border: 1px solid #d9d5d5;
        border-radius: 7px;
        padding: 3px 6px;
        display: flex;
        width: 35px;
        align-items: center;
        justify-content: center;
    }
`;