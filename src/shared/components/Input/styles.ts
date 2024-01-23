import { styled } from "styled-components";



export const InputStyle = styled.div`
   
  a {
    text-decoration: none;
    color: var(--link-color);
    font-size: 1.1rem;
    margin-left: 58%;
  }
  a:hover {
    text-decoration: underline;
    color: var(--link-color-hover)
  }
   label {
        display: inline-block;
        margin-bottom: -1rem;
        margin-top: 1rem;
        font-weight: 600;
        font-size: 1.3rem;
        padding-left: 0.2rem;
    }
    
    input {
        width: 100%;
        height: 3.1rem;
        padding: 0.3rem 0.7rem;
        line-height: normal;

        border-radius: 0.3rem;
        border: 1px solid #a6a6a6;
                
        box-shadow: 0 1px 0 rgba(255,255,255,.5), 0 1px 0 rgba(0,0,0,.07) inset;
        outline: 0;
        transition: 0.2s;

    }
    
    input:focus {
        border: 1px solid var(--focus-input-border);
        box-shadow: 0 0 0 3px #c8f3fa, 0 1px 2px rgba(15,17,17,.15) inset;
        background: var(--focus-input-back);
        transition: 0.2s;
    } 

    
   

`;