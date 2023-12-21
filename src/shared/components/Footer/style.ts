import { styled } from 'styled-components';


export const ContainerFooter = styled.div`
    footer {
        margin-top: 2.5rem;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        ul {
            display: flex;
            list-style: none;
            gap: 3rem;
            font-family: var(--font-text);

            a {
                text-decoration: none;
                color: var(--link-color);
            } 
            a:hover {
                color: var(--link-color-hover);
                text-decoration: underline;
            }
            
        }

        .line2{
            border: none;
            width: 100%;
            height: 2px;
            background: #dddddd;
            background: linear-gradient(to right, rgba(0,0,0,0), rgba(221, 221, 221), rgba(0,0,0,0));
            margin-bottom: 2.5rem;
            //box-shadow: inset 0px 18px 40px 1px rgba(linear-gradient(to right, rgba(221,221,221,221), rgba(0, 0, 0, 0), rgba(221,221,221,221)))
        }

        p {
            display: block;
            margin-top: 1.3rem;
            opacity: calc(0.70);
        }

    }
`;