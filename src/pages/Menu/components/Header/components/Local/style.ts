import styled from "styled-components";

export const Container = styled.div`
     .nav-local {
        position: static;
        display: flex;
        cursor: pointer;
        margin-left: 1.4rem;
        margin-right: 1.4rem;
        padding: 10px 10px 10px 10px;
        border: 1px solid transparent;
        border-radius: 2px;

        span {
            display: block;
            font-size: 1.2rem;
        }
        #s1 {
            line-height: 1;
            color: #cccccc;
        }
        #s2 {
            font-size: 1.2rem;
            font-weight: 600;
        }
        img {
            margin-bottom: -1.5rem;
            padding-right: 0.5rem;
        }
    }

    .nav-local:hover {
        border-color: #ffffff;

    }
`;