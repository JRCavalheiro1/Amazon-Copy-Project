import { styled } from "styled-components";

export const Container = styled.div`
    .nav-ordered {
        display: flex;
        height: 100%;
        width: 8.114rem;
        padding: 9px 10px 9px 10px;
        margin-left: 0.5rem;
        border: 1px solid transparent;
        border-radius: 2px;
        cursor: pointer;
    }
    span {
        display: block;
        font-size: 1.2rem;
        line-height: 1;
    }

    .nav-ordered:hover {
        border-color: #ffffff;
    }
    
`;


export const ContainerModal = styled.div`
    display: block;
    
    .point-modal {
            width: 44.1rem;
            cursor: default;
            position: absolute;
            top: -5px;
            left: 632.547px;
            border: 1px solid red;
            
            span {
                position: relative;
                left: 200px;
                height: 1rem;
                background: #ffffff;
                border: 1px solid red;
                width: 10px;
            }
            .modal {
                background: #ffffff;
                height: 50rem;
                width: 44.1rem;
                cursor: default;
            }
        }
            
    
`; 