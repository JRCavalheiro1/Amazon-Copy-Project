import { styled } from "styled-components";

export const Container = styled.div`
    
    .product {
        margin-top: 10px;
    }
    
    .product-visualize {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product-img {
        padding: 2px;
        border: 1px solid transparent;
        cursor: pointer;
        img {
            width: 109px;
            height: 109px;
        }
    }
   

    .trash {
        margin-top: 5px;
        cursor: pointer;
        border: 1px solid #e0e0e0;
        border-radius: 7px;
        padding: 3px 6px;
        display: flex;
        width: 35px;
        align-items: center;
        justify-content: center;
    }

    .horizontal-line {
            width: 100%;
            border: none;
            height: 1px;
            background: #e0e0e0;
    }
`;