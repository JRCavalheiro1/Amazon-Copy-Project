import { styled } from "styled-components";

export const Container = styled.div`
   select, input {
        padding: 1rem;
        border: none;
    }
    
    .input-search {
        width: 80%;
        max-width: 741px;
        border: none;
    }

    input .input-search:focus{
        border: none;
    }

    .nav-search {
        display: flex;
        align-items: center;
        width: 900px;
    }

    select {
        position: relative;
        cursor: pointer;
        background: #e6e6e6;
        font-size: 1rem;
        padding-top: 1.2rem;
        padding-bottom: 1.1rem;
        color: #596068;
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
    }

    select:hover {
        filter: brightness(0.9);
        color: #000000;
    }
    .submit {
        display: flex;
        align-items: center;
        justify-content: center;
        .glass-logo {
            position: absolute;
        }
        .input-submit {
            position: relative;
            width: 4.5rem;
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
            background: #febd69;
        }

    }
    .submit:hover {
        filter: brightness(0.97);
        .input-submit {
            background: #f3a847;
        }    
    }
    
    .submit, .input-submit {
        cursor: pointer;
    }
   
`;