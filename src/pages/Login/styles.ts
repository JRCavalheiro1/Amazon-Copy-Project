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
`;

export const Centralize = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -20px;

    h5 {
        color: #767676;
        font-family: var(--font-text);
        font-size: 1.1rem;
        font-weight: 400;
        padding-top: 2rem;
    }
    h5::before,
    h5::after {
    background-color: #e7e7e7;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 140%;
    }

    h5::before {
    right: 0.5em;
    margin-left: -140%;
    }

    h5::after {
    left: 0.5em;
    margin-right: -140%;
    }
    
`;

export const Content = styled.div`
    width: 34.8rem;
    display: flex;
    flex-direction: column;
    position: relative;

    border: 1px solid #dddddd;
    border-radius: 8px;
    padding: 2.0rem 2.6rem;    

`;