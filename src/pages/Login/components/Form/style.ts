import { styled } from "styled-components";

type containerProps = {
    send: boolean
}

export const Container = styled.div<containerProps>`
    h1 {
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 1.2;
    }

    p {
        display: inline-block;
        font-weight: 400;
        font-family: var(--font-text);
        font-size: 1.1rem;
    }

    a {
    text-decoration: none;
    color: var(--link-color);
    font-size: 1.1rem;
    
    }
    a:hover {
        text-decoration: underline;
        color: var(--link-color-hover)
    }

    .login-content {
        display: ${props=> props.send == false ? "block" : "none"}
    }
    .password-content {
        display: ${props=> props.send == true ? "block" : "none"};
    }
   
`;