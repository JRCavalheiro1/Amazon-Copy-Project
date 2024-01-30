import { styled } from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    cursor: default;
    z-index: 2;
    
    //======== HEADER MODAL PART============
    .sugest-close-modal {
        margin-left: 100%;
        top: 50%;

        img {
            cursor: pointer;
        }
    }

    .horizontal-line {
        height: 1px;
        width: 100%;
        border: none;
        background: #e6e6e6;
    }

    .nav-sugest-modal {
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

    //=========BODY MODAL PART===========

    .nav-modal-content {
        height: 90.3rem;
        background: #ffffff;
        overflow: hidden;
        overflow-y: scroll;
    }

    h3{
        margin-top: 10px;
        font-size: 1.7rem;
    }

    .list-modal-sugest, h3 {
        padding: 13px 20px 13px 36px;
        color: black;
        line-height: 1.3;
    }
    
    .list-modal-sugest{
        font-weight: 400;
        font-size: 1.32rem;
        color: #595a5a;
        cursor: pointer;
    }

    .list-modal-sugest:hover {
        background: #eaeded;
    }
`;