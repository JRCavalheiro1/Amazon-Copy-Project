import styled from "styled-components";

export const Container = styled.div`
//================ Local style ========================================     
     .nav-local {
        width: 26.58rem;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border: 1px solid transparent;
        border-radius: 2px;
        margin-right: 20px;
        margin-left: 7px;

        span {
            display: block;
            font-size: 1.2rem;
        }
        #s1 {
            line-height: 1;
            color: #cccccc;
        }
        #s2 {
            font-size: 1.2rem;
            font-weight: 600;
        }
        img {
            margin-bottom: -1.5rem;
            padding-right: 0.5rem;
        }
    }
    .nav-local:hover {
        border-color: #ffffff;

    }
//====================== Modal style ===================================
    .nav-local-modal {
        display: flex;
        right: 40%;
        top: 39%;
        flex-direction: column;
        position: absolute;
        border: 1px solid #cccccc;
        border-radius: 8px;
        width: 37.5rem;
        color: #000;
    }      

    .header-local-modal {
        display: flex;
        align-items: center;
        height: 5.7rem;
        background: #f0f2f2;
        color: #000000;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        border-bottom: 1px solid #cccccc;
        padding: 24px;
        font-size: 1.12rem;
    }

    .body-local-modal{
        height: 18.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #ffffff;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        
        .options-span {
            color: #767979;
            margin-top: 15px;
            font-size: 1.17rem;
        }

        .cep-span {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            color: #767979;
            margin-top: 30px;
        }
        .cep-span::before, .cep-span::after {
            content: "";
            margin-left: 14px;
            height: 1px;
            width: 90px;
            background-color: #9d9f9f;
            display: block;
        }
    }

    .input-local-modal {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 2px ;
    }

    label {
        margin-bottom: -15px;
        color: #9d9f9f;
    }

    .city-local, .cep-local {
        display: flex;
        flex-direction: column;
    }

    .span-hyp {
        padding-top: 20px;
        font-size: 1.6rem;
    }
`;