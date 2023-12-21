import { styled } from "styled-components";


export const Container = styled.div`
     .list-config {
            padding-top: 2rem;
            list-style: none;
        
            img {
                cursor: pointer;
            }
            a {
                display: inline-block;
                font-size: 1.3rem;
                text-decoration: none;
                color: var(--link-color);
            }
             a:hover {
                color: var(--link-color-hover);
                text-decoration: underline;
            }

            .a1 {
                display: block;
                padding-left: 1.3rem;
            }
     }

`;
