import { styled } from "styled-components";


export const Container = styled.div`
  
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3.69rem;
        margin-top: 1.2rem;
        
        img {
            cursor: pointer;
        }
    }
   
    h1 {
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 1.2;
        margin-bottom: 1rem;
    }
    
`;

export const Centralize = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -20px;

        .line{
            margin-top: 2.6rem;
            margin-bottom: 2.6rem;
            border: none;
            height: 2px;
            background: #dddddd;
            background: linear-gradient(to right, rgba(0,0,0,0), rgba(221, 221, 221), rgba(0,0,0,0));
        }
`;

export const Content = styled.div`
        width: 34.8rem;
        display: flex;
        flex-direction: column;
        position: relative;

        border: 1px solid #dddddd;
        border-radius: 8px;
        padding: 1.4rem 1.8rem;

        .line{
            margin-top: 2.6rem;
            margin-bottom: 2.6rem;
            border: none;
            height: 2px;
            background: #dddddd;
            background: linear-gradient(to right, rgba(0,0,0,0), rgba(221, 221, 221), rgba(0,0,0,0));
        }

        .login-acc {
            font-size: 1.3rem;
            margin-bottom: 0.3rem; 
        }

        
        a {
            text-decoration: none;
            color: var(--link-color);
        }
        a:hover {
            color: var(--link-color-hover);
            text-decoration: underline;
            }
       
`;