import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
        --font-text:'Amazon Ember V2', sans-serif;
        --btn-color: #ffd814;
        --white: #ffffff;
        --plc-holder: #9aa6b0;
        --input-color: #f7feff;
        --input-border: #c8f3fa;
        --link-color: #0066c0; 
        --link-color-hover:  #c86516;
        --focus-input-border: #007185;
        --focus-input-back: #f7feff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font-text);
    }
`;