import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 1500px;

    .carrosel {
        display: flex;
        align-items: center;
        margin-top: 100px;
        width: 100vw;
        height: 28.1rem;
        background: #ffffff;
        position: relative;
    }

    .inner-carrosel {
        display: flex;
        overflow: hidden;

    }

    h1 {
        border: 1px solid blue;
        width: 100px;
    }

    .buttons {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 10px;
        position: absolute;

    }

    .prev-button, .next-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 100px;
        background: #ffffff;
        border-radius: 3px;
        
        cursor: pointer;

        img {
            width: 22px;
            height: 22px;
        }
        
    }

    .prev-button {
        box-shadow: 2px 1px 3px 0px rgba(0,0,0,0.3);
    }

    .next-button {
        box-shadow: -2px 1px 3px 0px rgba(0,0,0,0.3);


    }



`;