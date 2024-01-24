import { styled } from "styled-components";

export const ButtonStyle = styled.div`
    .register-btn {
        display: flex;
        flex-direction: row;
        justify-content: center;

        padding-top: 1.3rem;

        button {
            width: 100%;
            border: none;
            padding: 0.5rem;
            border-radius: 8px;
            cursor: pointer;
            background: var(--btn-color);
            box-shadow: 0px 1px 30px 0px rgba(0,0,0,0.12);
            -webkit-box-shadow: 0px 1px 30px 0px rgba(0,0,0,0.12);
            -moz-box-shadow: 0px 1px 30px 0px rgba(0,0,0,0.12);
        } 
    }

    button:hover {
        filter: brightness(0.96);
    }
`;