import { styled } from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    .sugest-close-modal {
        position: absolute;
        right: -35px;
        top: 13px;
    }

    .nav-sugest-modal {
        z-index: 1;
        width: 36.5rem;
        
    }
    .sugest-modal-name {
        height: 5rem;
        background: #232f3e;
        display: flex;
        align-items: center;
    }

    img {
        margin-left: 30px;
    }

    a { 
        font-size: 1.8rem;
        margin-left: 10px;
    }

    .nav-modal-content {
        height: 90.3rem;
        background: #ffffff;
    }
`;