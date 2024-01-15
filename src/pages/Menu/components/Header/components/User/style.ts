import { styled } from "styled-components";

export const Container = styled.div`
    .nav-user {
        height: 100%;
        width: 12.814rem;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 9px 10px 9px 10px;
    }

    .nav-user:hover {
        border-color: #ffffff;
        .triangle-modal {
            display: block;
        }
        
    }
    span {
        display: block;
        font-size: 1.2rem;
        line-height: 1;
    }
    span:nth-child(2) {
        font-size: 1.3rem;
        font-weight: 600;
        display: inline;
    }
//1113px
    .triangle-modal {
        display: none;
        position: absolute;
        right: 110px;
        width: 44.1rem;
        span {
            margin-left: 296px;
            margin-bottom: 0px;
            right: -100px;
            height: 1rem;
            width: 1.2rem;
            background: #fff;
        }

    }

    @media (max-width: 1113px){
            .triangle-modal {
                position: static;
                
            }        
        }
    .modal {
        background: #fff;
        height: 50rem;
        width: 100%;
    }
`;

