import { styled } from "styled-components";

export const Container = styled.div`
   
    select, input, button {
        padding: 1rem;
        border: none;
    }

    select, button {
        cursor: pointer;
    }
    select, button:hover {
        filter: brightness(1);
    }
    button {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
   }
    select {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
   }
`;