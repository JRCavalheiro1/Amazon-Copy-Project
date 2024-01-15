import styled from "styled-components";

export const Container = styled.div`
     .nav-local {
        width: 26.58rem;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border: 1px solid transparent;
        border-radius: 2px;
        margin-right: 20px;
        margin-left: 7px;

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