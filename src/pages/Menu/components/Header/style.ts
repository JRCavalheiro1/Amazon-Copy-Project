import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: #131921;
    color: #fff;
    height: 5.9rem;
      
    .logo {
        margin-left: 1rem;
        padding-top: 1rem;
        padding-right: 0.5rem;
        padding-left: 0.5rem;  
        cursor: pointer;
        border: 1px solid transparent;
    } 

    select, input {
        padding: 1rem;
        border: none;
    }
    
    .input-search {
        width: 80%;
        max-width: 741px;
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
    .input-submit {
        position: relative;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        cursor: pointer;
        background: #febd69;
    }
`;