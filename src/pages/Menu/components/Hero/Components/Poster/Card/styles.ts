import { styled } from "styled-components";

export const Container = styled.div`
    .card {
        display: flex;
        align-items: center;
        width: 34.567rem;
        height: 42rem;
        padding: 20px 15px;
        margin-left: 20px;
        background: #ffffff;
        flex-wrap: wrap;
        gap: 5px;
        cursor: default;
    }

    .card-image {
        margin-left: 5px;
    }

    h1 {
        padding-left: 10px;
        margin-bottom: -20px;
    }

    img {
        padding-top: 20px;
        cursor: pointer;
    }

    p {
        text-align: start;
        padding-left: 10px;
        font-size: 1.1rem;
        cursor: pointer;
        line-height: 1;
    }

    .card-paragraph {
        font-size: 1.3rem;
        margin-top: 15px;
        margin-bottom: -20px;
        line-height: 1.5;
        cursor: default;
    }

    a {
        padding-top: 30px;
        font-size: 1.2rem;
        padding-left: 10px;
        color: #288798;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        color: var(--link-color-hover);
        text-decoration: underline;
    }
`;